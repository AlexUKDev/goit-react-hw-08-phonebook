import { Title } from './SectionTitle.Styled';
import PropTypes from 'prop-types';
export const SectionTitle = ({ title }) => {
  return <Title>{title}</Title>;
};
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
