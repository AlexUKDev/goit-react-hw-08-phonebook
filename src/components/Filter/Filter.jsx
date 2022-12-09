import { useDispatch } from 'react-redux';

import { updateFilterValue } from 'redux/contacts/slice';

import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterHandler = ({ currentTarget: { value } }) => {
    dispatch(updateFilterValue(value.toLocaleLowerCase()));
  };

  return (
    <>
      <TextField
        onChange={filterHandler}
        id="outlined-basic"
        label="Search contact by name"
        variant="outlined"
        color="success"
      />
    </>
  );
};
