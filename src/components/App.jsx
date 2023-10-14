import { GlobalStyles } from './globalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/ContactList';
import { Wrap, Heading } from './App.styled';

export const App = () => {
  return (
    <Wrap>
      <Heading>Phonebook</Heading>
      <ContactForm />
      <Heading>Contacts</Heading>
      <Filter />
      <ContactList/>
      <GlobalStyles />
    </Wrap>
  );
};
