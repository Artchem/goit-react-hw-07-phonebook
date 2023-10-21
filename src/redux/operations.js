import axios from 'axios';
import {
  fetchingInProgress,
  fetchingError,
  fetchingSuccess,
} from './contactsSlice';

axios.defaults.baseURL = 'https://653421eee1b6f4c5904694f4.mockapi.io';

// const response = axios.get('/contacts');
// console.log('response :>> ', response);

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
