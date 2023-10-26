import { Container, Text } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import {
  selectContactsItems,
  selectError,
  selectIsLoading,
} from 'redux/selectors';

export default function App() {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const items = useSelector(selectContactsItems);
  // const contactsAll = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <h2>Contacts</h2>

      <Text>Total contacts: {items.length}</Text>

      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
      <ToastContainer autoClose={3000} position="top-right" />
    </Container>
  );
}
