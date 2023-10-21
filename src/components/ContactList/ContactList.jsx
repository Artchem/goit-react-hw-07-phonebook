import { useSelector } from 'react-redux';
import { Btn, Item } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export function ContactList() {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
  console.log('contacts  ContactList:>> ', items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFiltredContacts = () => {
    const normalizedFilter = filterValue.toLowerCase().trim();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFiltredContacts();

  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}

      {items.length > 0 &&
        filteredContacts.map(contact => (
          <Item key={contact.id}>
            {contact.name}: {contact.phone}
            <Btn
              onClick={() => dispatch(delContact({ id: contact.id }))}
              type="button"
            >
              Delete
            </Btn>
          </Item>
        ))}
    </>
  );
}
