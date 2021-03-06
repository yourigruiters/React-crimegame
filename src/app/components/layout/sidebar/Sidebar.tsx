import React from 'react';
import styled from '@emotion/styled';
import logo from '../../../media/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { transitionStyle } from '../../../styles/defaultStyles';
import Tooltip from '../../Tooltip';

const Header = styled.header<{
  sidebarOpen: boolean;
}>`
  ${({ theme: { colors }, sidebarOpen }) => `
    width: ${sidebarOpen ? '150px' : '70px'};
    flex-grow: 0;
    flex-shrink: 0;
    min-height: 100vh;
    background-color: ${colors.default};
    border-right: 1px solid ${colors.border};
    transition: ${transitionStyle}, width 0.25s linear;
  `}
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  padding: 10px;

  img {
    display: block;
    width: 50px;
    height: 50px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;

const UL = styled.ul<{
  sidebarOpen: boolean;
}>`
  ${({ theme: { colors }, sidebarOpen }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    column-gap: 10px;
		width: ${sidebarOpen ? '100%' : '100%'};
    height: auto;
    list-style-type: none;
    color: ${colors.gray};
  `}

  a {
    text-decoration: none;
    color: inherit;
  }

  ${({ theme: { colors }, sidebarOpen }) => `
    p {
      color: ${colors.gray};
      opacity: ${sidebarOpen ? '1' : '0'};
      transition: ${transitionStyle}, opacity 0.25s;

      &:hover,
      &:hover svg {
        color: ${colors.defaultReversed};
      }
    }
  `}
`;

// IMG EN TEKST IN AANBRENGEN MET POSITON - ZORGEN DAT DIE ZICHTBAAR IS AL HET BREDER WORDT
const LI = styled.li`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: auto;
  padding: 10px 0px;
  cursor: pointer;

  &:hover,
  &:hover svg {
    ${({ theme: { colors } }) => `
    color: ${colors.defaultReversed};
  `}
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 70px;
  flex-grow: 0;
  flex-shrink: 0;
  height: 50px;
  padding: 10px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  ${({ theme: { colors } }) => `
    color: ${colors.gray};
  `}
  transition: unset;
`;

interface Props {
  sidebarOpen: boolean;
}

const Sidebar: React.FC<Props> = ({ sidebarOpen }) => {
  return (
    <Header sidebarOpen={sidebarOpen}>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <Navigation>
        <UL sidebarOpen={sidebarOpen}>
          <Link to="home">
            <Tooltip
              value="Home"
              position="right"
              display={sidebarOpen === false}
            >
              <LI>
                <IconContainer>
                  <Icon icon="house" />
                </IconContainer>
                <p>Home</p>
              </LI>
            </Tooltip>
          </Link>
          <Link to="travel">
            <Tooltip
              value="Travel"
              position="right"
              display={sidebarOpen === false}
            >
              <LI>
                <IconContainer>
                  <Icon icon="earth-americas" />
                </IconContainer>
                <p>Travel</p>
              </LI>
            </Tooltip>
          </Link>
          <Link to="bank">
            <Tooltip
              value="Bank"
              position="right"
              display={sidebarOpen === false}
            >
              <LI>
                <IconContainer>
                  <Icon icon="building-columns" />
                </IconContainer>
                <p>Bank</p>
              </LI>
            </Tooltip>
          </Link>
          <Link to="shop">
            <Tooltip
              value="Shop"
              position="right"
              display={sidebarOpen === false}
            >
              <LI>
                <IconContainer>
                  <Icon icon="shopping-cart" />
                </IconContainer>
                <p>Shop</p>
              </LI>
            </Tooltip>
          </Link>
          <Link to="crime">
            <Tooltip
              value="Crime"
              position="right"
              display={sidebarOpen === false}
            >
              <LI>
                <IconContainer>
                  <Icon icon="people-robbery" />
                </IconContainer>
                <p>Crime</p>
              </LI>
            </Tooltip>
          </Link>
        </UL>
      </Navigation>
    </Header>
  );
};

export default Sidebar;
