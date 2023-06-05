import PropTypes from 'prop-types';
import { SectionStyled, Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionStyled title={title}>
      <Title>{title}</Title>
      {children}
    </SectionStyled>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
