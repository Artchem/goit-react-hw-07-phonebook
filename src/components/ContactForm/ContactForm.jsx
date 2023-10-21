import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './ContactForm.styled';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contactItem = useSelector(state => state.contacts.items);

  const handleSubmit = evt => {
    evt.preventDefault();

    const data = {
      id: nanoid(5),
      name: evt.target.name.value,
      number: evt.target.number.value,
    };
    // console.log('data :>> ', data);
    if (contactItem.some(contact => contact.name === data.name)) {
      toast.info(`${data.name} is already in contacts`);
      return;
    }
    dispatch(addContact(data));

    evt.target.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled htmlFor="">
        Name
        <InputStyled
          type="text"
          name="name"
          // value={name}
          // onChange={handleChange}
          // pattern="^[A-Za-zА-Яа-я]{1}[A-Za-zА-Яа-я-\'\s]*[A-Za-zА-Яа-я]{1}$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelStyled>
      <LabelStyled htmlFor="">
        Number
        <InputStyled
          type="tel"
          name="number"
          // value={number}
          // onChange={handleChange}
          // pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelStyled>
      <ButtonStyled type="submit">Add contact</ButtonStyled>
    </FormStyled>
  );
}
