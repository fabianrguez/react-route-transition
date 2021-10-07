import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  color: #111;
  transition: all 0.4s ease-in;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
    </StyledNav>
  );
}