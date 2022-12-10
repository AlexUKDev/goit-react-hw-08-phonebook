import { Title } from './HeadTitle.Styled';
import PropTypes from 'prop-types';

export const HeadTitle = ({ title, size, mb, mt }) => {
  return (
    <Title size={size} mb={mb} mt={mt}>
      {title}
    </Title>
  );
};
HeadTitle.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  mb: PropTypes.number,
  mt: PropTypes.number,
};
