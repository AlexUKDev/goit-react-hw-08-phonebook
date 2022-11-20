import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { updateFilterValue } from '../../redux/filter.Slice';

import { LabelWrap, FilterInput } from './Filter.Styled';

export const Filter = ({ labelText }) => {
  const dispatch = useDispatch();

  return (
    <LabelWrap>
      {labelText}
      <FilterInput
        onChange={e =>
          dispatch(updateFilterValue(e.currentTarget.value.toLocaleLowerCase()))
        }
      ></FilterInput>
    </LabelWrap>
  );
};

Filter.propTypes = {
  labelText: PropTypes.string.isRequired,
};
