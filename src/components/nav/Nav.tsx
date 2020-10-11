import React from 'react';
import styled from 'styled-components';
import {
  FlexSpaceBetween,
  CircleProfileImg,
  HomeSVG,
  DirectSVG,
  CompassSVG,
  HeartSVG,
} from '../index';

const Wrap = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  border-bottom: ${(props) => props.theme.grayBorder};
`;

const Container = styled(FlexSpaceBetween)`
  align-items: center;
  width: 93.5rem;
  height: 5.4rem;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 90vw;
  }
`;

const SearchBox = styled.div`
  height: 2.8rem;
  width: 21.5rem;
  min-width: 12.5rem;

  input {
    width: inherit;
    height: inherit;
    border: ${(props) => props.theme.grayBorder};
    border-radius: 3px;
    background-color: #fafafa;
    padding: 0 1rem;

    ::placeholder {
      text-align: center;
    }
  }
`;

const Icons = styled(FlexSpaceBetween)`
  width: 22.2rem;
`;

const Nav = () => {
  return (
    <Wrap>
      <Container>
        <div>
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            alt="logo"
            style={{ width: '10rem', marginTop: '1rem' }}
          />
        </div>
        <SearchBox>
          <input type="text" autoCapitalize="none" placeholder="검색" />
        </SearchBox>
        <Icons>
          <HomeSVG />
          <DirectSVG />
          <CompassSVG />
          <HeartSVG />
          <CircleProfileImg
            src="https://avatars2.githubusercontent.com/u/58619071?s=460&u=d7f4b38f9fbb416b367d0bda029733171e1cf3c9&v=4"
            alt="profile"
            width="2.2rem"
            height="2.2rem"
            hasBorder
          />
        </Icons>
      </Container>
    </Wrap>
  );
};

export default Nav;
