import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import useDeleteContact from "../hooks/use-delete-contact";

/**
 * @param {ContactDeleteModal.propTypes} props
 * @returns {JSX.Element}
 */
const ContactDeleteModal = (props) => {
  const { isOpen, onOpenChange, onSuccess, id } = props;

  const { trigger } = useDeleteContact();

  const handleSubmit = async () => {
    await trigger(id, {
      onSuccess: () => {
        onOpenChange(false);
        onSuccess(id);
      },
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Delete Contact
              </ModalHeader>
              <ModalBody>
                <p className="text-base w-full text-default-700">
                  Are you sure to delete this contact item? After performing
                  this action this cannot be undone!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" onPress={handleSubmit}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

ContactDeleteModal.propTypes = {
  isOpen: PropTypes.bool,
  onOpenChange: PropTypes.func,
  onSuccess: PropTypes.func,
  id: PropTypes.string,
};

export default ContactDeleteModal;
