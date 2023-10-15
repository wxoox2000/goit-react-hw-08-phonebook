import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/ContactList';
import { Wrap, Heading, Decoration } from './App.styled';

export const ContactsBook = () => {
    return <Wrap>
      <Decoration />
    <Heading>Phonebook</Heading>
    <ContactForm />
    <Heading>Contacts</Heading>
    <Filter />
    <ContactList/>
  </Wrap>
}