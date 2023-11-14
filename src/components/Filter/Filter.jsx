import { nanoid } from 'nanoid';
import { Container, Icon, Input } from './Filter.styled';

const Filter = ({ inputValue, onFilter }) => {
  const filterId = nanoid();
  return (
    <Container>
      <Input
        type="text"
        value={inputValue}
        id={filterId}
        onChange={onFilter}
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
