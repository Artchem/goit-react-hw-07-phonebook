import { Container, Text } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const contactsAll = useSelector(state => state.contacts);
  // console.log('contactsAll :>> ', contactsAll);

  return (
    <Container>
      <ContactForm />
      <h2>Contacts</h2>

      <Text>Total contacts: {contactsAll.items.length}</Text>

      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} position="top-right" />
    </Container>
  );
}
