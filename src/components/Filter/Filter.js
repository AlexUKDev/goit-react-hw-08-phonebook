import PropTypes from 'prop-types';
import { LabelWrap, FilterInput } from './Filter.Styled';

export const Filter = ({ lableText, value, onChange }) => {
  return (
    <LabelWrap>
      {lableText}
      <FilterInput onChange={onChange} value={value}></FilterInput>
    </LabelWrap>
  );
};

Filter.propTypes = {
  lableText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
