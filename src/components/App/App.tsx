import React, { Component } from 'react';
import Notiflix from 'notiflix';
import GlobalStyles from '../../GlobalStyles';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import Notification from '../Notification';
import {
  Container,
  WrapForms,
  WrapList,
  FormTitle,
  ListTitle,
} from './App.styled';

Notiflix.Notify.init({
  width: '500px',
  position: 'center-top',
  closeButton: true,
  fontFamily: 'Comic Sans MS',
  fontSize: '24px',
  warning: {
    background: 'rgb(255, 240, 245)',
    textColor: 'rgb(40, 70, 219)',
    notiflixIconColor: 'rgb(205, 92, 92)',
  },
});

export type Contact = {
  id: string;
  name: string;
  number: string;
};

export type AppState = {
  contacts: Contact[];
  filter: string;
};

export default class App extends Component<{}, AppState> {
  state: AppState = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  findContactByName = (name: string) => {
    const { contacts } = this.state;
    return contacts.find(item => item.name.toLowerCase() === name);
  };

  formSubmitHandler = (data: { name: string; number: string }) => {
    const { name, number } = data;
    const normalizedName = name.toLowerCase();
    if (this.findContactByName(normalizedName)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }
    this.addContact(name, number);
  };

  addContact = (name: string, number: string) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = (id: string) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getVisibleContacts();
    return (
      <Container>
        <GlobalStyles />
        <WrapForms>
          <FormTitle>Phonebook</FormTitle>
          <ContactForm onSubmit={this.formSubmitHandler} />
          <Filter filter={filter} onChange={this.changeFilter} />
        </WrapForms>
        <WrapList>
          <ListTitle>Contacts</ListTitle>
          {contacts.length > 0 ? (
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <Notification message="There is no contact in Phonebook" />
          )}
        </WrapList>
      </Container>
    );
  }
}
