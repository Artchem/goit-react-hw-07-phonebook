import { useDispatch, useSelector } from 'react-redux';

// import { nanoid } from 'nanoid';

import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './ContactForm.styled';
import { toast } from 'react-toastify';
import { addContact } from 'redux/operations';

export default function ContactForm() {
  const dispatch = useDispatch();
  const selectContactItem = useSelector(state => state.contacts.items);

  const handleSubmit = evt => {
    evt.preventDefault();

    const data = {
      // id: nanoid(5),
      name: evt.target.name.value,
      phone: evt.target.phone.value,
    };
    // console.log('data :>> ', data);
    if (selectContactItem.some(contact => contact.name === data.name)) {
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
          name="phone"
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
