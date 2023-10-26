import { useSelector } from 'react-redux';
import { Btn, Item } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/operations';
import {
  getFiltredContacts,
  selectContactsItems,
  selectError,
  selectIsLoading,
} from 'redux/selectors';

export function ContactList() {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const items = useSelector(selectContactsItems);
  const dispatch = useDispatch();

  const filteredContacts = useSelector(getFiltredContacts);
  // console.log('filteredContacts :>> ', filteredContacts);

  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}

      {items.length > 0 &&
        filteredContacts.map(contact => (
          <Item key={contact.id}>
            {contact.name}: {contact.phone}
            <Btn onClick={() => dispatch(delContact(contact.id))} type="button">
              Delete
            </Btn>
          </Item>
        ))}
    </>
  );
}
