import { Button, NextUIProvider, useDisclosure } from "@nextui-org/react";
import { useCallback, useState } from "react";
import ContactCreateModal from "../components/contact-create-modal";
import ContactDeleteModal from "../components/contact-delete-modal";
import ContactItem from "../components/contact-item";
import useContacts from "../hooks/use-contacts";

const App = () => {
  const { contacts, onInsert, onRemove } = useContacts();

  const createModal = useDisclosure();

  const deleteModal = useDisclosure();
  const [selectedContact, setSelectedContact] = useState(null);

  const handleDelete = useCallback((contact) => {
    setSelectedContact(contact);
    deleteModal.onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NextUIProvider>
      <main className="w-full max-w-[500px] min-h-screen mx-auto py-10">
        <header className="flex items-center justify-between mb-8">
          <h1 className="font-bold text-2xl">Contacts</h1>

          <Button variant="solid" color="primary" onClick={createModal.onOpen}>
            Create New
          </Button>
        </header>

        <div className="flex flex-col gap-2">
          {Array.isArray(contacts) &&
            contacts.map((contact) => (
              <ContactItem
                {...contact}
                key={contact.id}
                onDelete={() => handleDelete(contact)}
              />
            ))}
        </div>
      </main>

      <ContactCreateModal
        isOpen={createModal.isOpen}
        onOpenChange={createModal.onOpenChange}
        onSuccess={onInsert}
      />

      <ContactDeleteModal
        isOpen={deleteModal.isOpen}
        onOpenChange={deleteModal.onOpenChange}
        onSuccess={onRemove}
        id={selectedContact?.id}
      />
    </NextUIProvider>
  );
};

export default App;
