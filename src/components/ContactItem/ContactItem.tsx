import { Item, ButtonClose } from './ContactItem.styled';
import { FaWindowClose } from 'react-icons/fa';

interface IContactItem {
  id: string;
  name: string;
  number: string;
  onDeleteContact: (idContact: string) => void;
}

const ContactItem = ({ id, name, number, onDeleteContact }: IContactItem) => {
  return (
    <Item>
      {name}: {number}
      <ButtonClose type="button" onClick={() => onDeleteContact(id)}>
        <FaWindowClose size={32} />
      </ButtonClose>
    </Item>
  );
};

export default ContactItem;
