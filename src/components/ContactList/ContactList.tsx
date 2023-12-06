import ContactItem from '../ContactItem';
import { List } from './ContactList.styled';
import { Contact } from '../App/App';

interface IContactList {
  contacts: Contact[];
  onDeleteContact: (idContact: string) => void;
}

const ContactList = ({ contacts, onDeleteContact }: IContactList) => {
  return (
    <List>
      {contacts.map(({ id, name, number }: Contact) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};

export default ContactList;
