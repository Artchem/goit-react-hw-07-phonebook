import { useSelector } from 'react-redux';
import { Btn, Item } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/contactsSlice';

export function ContactList({ options, deleteContact }) {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
  // console.log('contacts  ContactList:>> ', contacts);

  const getFiltredContacts = () => {
    const normalizedFilter = filterValue.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFiltredContacts();

  return filteredContacts.map(contact => (
    <Item key={contact.id}>
      {contact.name}: {contact.number}
      <Btn
        onClick={() => dispatch(delContact({ id: contact.id }))}
        type="button"
      >
        Delete
      </Btn>
    </Item>
  ));
}
