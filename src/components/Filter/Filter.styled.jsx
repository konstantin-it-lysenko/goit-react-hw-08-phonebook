import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export const Container = styled.div`
  margin-bottom: 30px;
  width: 300px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 2px solid #fff;
  border-radius: 16px;
  background-color: #302f2f;
`;

export const Input = styled(TextField)`
  min-width: 200px;
  width: 100%;
`;

export const Icon = styled(SearchIcon)`
  fill: #fff;
  width: 40px;
  height: 40px;
`;
