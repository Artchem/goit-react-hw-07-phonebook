import { Input, Label } from './Filter.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.value);
  return (
    <Label htmlFor="">
      Find contacts by name
      <Input
        onChange={evt => dispatch(setFilter(evt.target.value))}
        type="text"
        name="filter"
        value={filterValue}
      />
    </Label>
  );
}
