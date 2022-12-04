import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { updateFilterValue } from 'redux/contacts/slice';

import { LabelWrap, FilterInput } from './Filter.Styled';

export const Filter = ({ labelText }) => {
  const dispatch = useDispatch();

  const filterHandler = ({ currentTarget: { value } }) => {
    dispatch(updateFilterValue(value.toLocaleLowerCase()));
  };

  return (
    <LabelWrap>
      {labelText}
      <FilterInput onChange={filterHandler}></FilterInput>
    </LabelWrap>
  );
};

Filter.propTypes = {
  labelText: PropTypes.string.isRequired,
};
