import { Avatar, Button, Card, CardBody, Link } from "@nextui-org/react";
import { LucideTrash2 } from "lucide-react";
import PropTypes from "prop-types";

/**
 * @param {ContactItem.propTypes} props
 * @returns {JSX.Element}
 */
const ContactItem = (props) => {
  const { email, id, name, phone, onDelete } = props;
  return (
    <Card shadow="sm">
      <CardBody className="flex flex-row gap-3 items-center">
        <Avatar
          alt={name}
          className="flex-shrink-0"
          size="md"
          src={`https://api.dicebear.com/8.x/fun-emoji/svg?seed=${id}-${phone}`}
        />
        <div className="flex flex-col flex-1">
          <span className="text-base font-medium">{name}</span>
          <Link
            href={`mailto:${email}`}
            target="_blank"
            title="Email"
            className="text-sm text-default-500"
          >
            {email}
          </Link>
          <Link
            href={`tel:${phone}`}
            target="_blank"
            title="Phone"
            className="text-sm text-default-500"
          >
            {phone}
          </Link>
        </div>
        <Button
          color="danger"
          size="sm"
          variant="light"
          isIconOnly
          className="flex-shrink-0"
          onClick={onDelete}
        >
          <LucideTrash2 />
        </Button>
      </CardBody>
    </Card>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
  onDelete: PropTypes.func,
};

export default ContactItem;
