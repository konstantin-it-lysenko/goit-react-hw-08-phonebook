import { useDispatch, useSelector } from 'react-redux';
import {
  getFilterValue,
  updateFilter,
} from './../../redux/filterSlice/filterSlice';
import { nanoid } from 'nanoid';
import { Container, Icon, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  const filterId = nanoid();

  const filterInputHandler = e => {
    const inputValue = e.target.value;

    dispatch(updateFilter(inputValue));
  };

  return (
    <Container>
      <Input
        type="text"
        value={filterValue}
        id={filterId}
        onChange={filterInputHandler}
        label="Find contacts by name"
        InputProps={{
          style: { color: 'white' },
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
      />
      <Icon fontSize="inherit" />
    </Container>
  );
};

export default Filter;
