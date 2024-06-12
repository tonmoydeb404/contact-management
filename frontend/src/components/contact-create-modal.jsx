import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useCreateContact from "../hooks/use-create-contact";

/**
 * @param {ContactCreateModal.propTypes} props
 * @returns {JSX.Element}
 */
const ContactCreateModal = (props) => {
  const { isOpen, onOpenChange, onSuccess } = props;

  const { trigger } = useCreateContact();

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const handleSubmit = async () => {
    await trigger(
      {
        name: contactName,
        email: contactEmail,
        phone: contactPhone,
      },
      {
        onSuccess: (data) => {
          onSuccess(data);
          onOpenChange(false);
        },
      }
    );
  };

  useEffect(() => {
    if (isOpen === false) {
      setContactEmail("");
      setContactName("");
      setContactPhone("");
    }
  }, [isOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Contact
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Name"
                  variant="bordered"
                  type="text"
                  onChange={(e) => setContactName(e.target.value)}
                  value={contactName}
                />
                <Input
                  label="Email"
                  variant="bordered"
                  type="email"
                  onChange={(e) => setContactEmail(e.target.value)}
                  value={contactEmail}
                />
                <Input
                  label="Phone"
                  variant="bordered"
                  type="tel"
                  onChange={(e) => setContactPhone(e.target.value)}
                  value={contactPhone}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleSubmit}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

ContactCreateModal.propTypes = {
  isOpen: PropTypes.bool,
  onOpenChange: PropTypes.func,
  onSuccess: PropTypes.func,
};

export default ContactCreateModal;
