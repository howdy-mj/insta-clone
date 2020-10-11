import React from 'react';
import styled from 'styled-components';
import { FlexSpaceBetween, CircleProfileImg } from '../index';
import { StoryFeedProps } from '../../App';

const Wrap = styled.div`
  position: absolute;
  left: 65rem;
  width: 29.5rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Profile = styled.div`
  display: flex;
  margin: 2rem 0;
`;

const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;

  div {
    font-weight: 700;
    margin-bottom: 5px;
  }
  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.text.gray};
  }
`;

const RecommendTitle = styled(FlexSpaceBetween)`
  color: ${(props) => props.theme.text.gray};
  font-weight: 600;
  font-size: 1.4rem;
`;

const SeeAll = styled.div`
  color: black;
  font-size: 1.2rem;
`;

const Friend = styled(FlexSpaceBetween)`
  align-items: center;
  padding: 1rem 0;

  div {
    display: flex;
    align-items: center;

    p {
      font-weight: 600;
    }
  }

  img {
    margin-right: 1rem;
  }
`;

const Follow = styled.div`
  color: ${(props) => props.theme.text.skyBlue};
`;

const ForYou = ({ story }: StoryFeedProps) => {
  return (
    <Wrap>
      <Profile>
        <CircleProfileImg
          src="https://avatars2.githubusercontent.com/u/58619071?s=460&u=d7f4b38f9fbb416b367d0bda029733171e1cf3c9&v=4"
          alt="profile"
          width="5.6rem"
          height="5.6rem"
          hasBorder
        />
        <ProfileDetail>
          <div>howdy_mj</div>
          <p>김민정</p>
        </ProfileDetail>
      </Profile>
      <div>
        <RecommendTitle>
          <div>회원님을 위한 추천</div>
          <SeeAll>모두 보기</SeeAll>
        </RecommendTitle>
        <div>
          {story &&
            story.slice(0, 2).map((item, index) => (
              <Friend key={index}>
                <div>
                  <CircleProfileImg
                    src={item.profile}
                    alt="profile"
                    width="3.2rem"
                    height="3.2rem"
                  />
                  <p>{item.name}</p>
                </div>
                <Follow>팔로우</Follow>
              </Friend>
            ))}
        </div>
      </div>
    </Wrap>
  );
};

export default ForYou;
