import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  FlexSpaceBetween,
  BorderGray,
  CircleProfileImg,
  DirectSVG,
  HeartSVG,
  OptionsSVG,
  CommentSVG,
  BookMarkSVG,
} from '../index';

const Feed = styled(BorderGray)`
  &:not(:last-child) {
    margin-bottom: 6rem;
  }
`;

const Header = styled(FlexSpaceBetween)`
  padding: 1.6rem;
  height: 2rem;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: 600;
    margin-left: 1rem;
  }
`;

const ImgDiv = styled.div`
  img {
    height: 61.3rem;
    width: 61.3rem;
    object-fit: cover;
  }
`;

const Action = styled(FlexSpaceBetween)`
  padding: 0 1.6rem;
  margin: 1rem 0;
`;

const ActionLeft = styled(FlexSpaceBetween)`
  width: 10rem;
`;

const FeedContent = styled.div`
  padding: 0 1.6rem;
`;

const Likes = styled.div`
  font-weight: 600;
`;

const Text = styled.div`
  display: flex;
  margin: 1rem 0;

  div {
    font-weight: 600;
    margin-right: 5px;
  }
`;

const Comment = styled(FlexSpaceBetween)`
  align-items: center;
  border-top: 1px solid #efefef;
  height: 5.6rem;
  padding: 0 1.6rem;

  input {
    display: inline-block;
    border: none;
    outline: none;
    width: 90%;
    font-size: 1.4rem;
  }

  div {
    color: ${(props) => props.theme.text.skyBlue};
    opacity: 0.3;
  }
`;

interface UserFeedProps {
  id: number;
  profile: string;
  name: string;
  img: string;
  likes: number;
  text: string;
}

const MainFeed: React.FC = () => {
  const [userFeed, setUserFeed] = useState<UserFeedProps[]>([]);
  useEffect(() => {
    fetch('/data/userFeed.json')
      .then((data) => data.json())
      .then((data) => setUserFeed(data));
  }, []);

  return (
    <>
      {userFeed &&
        userFeed.map((item) => (
          <Feed key={item.id}>
            <Header>
              <Profile>
                <CircleProfileImg
                  src={item.profile}
                  alt="profile"
                  height="3.2rem"
                  width="3.2rem"
                />
                <span>{item.name}</span>
              </Profile>
              <OptionsSVG />
            </Header>
            <ImgDiv>
              <img src={item.img} alt="feed" />
            </ImgDiv>
            <Action>
              <ActionLeft>
                <HeartSVG />
                <CommentSVG />
                <DirectSVG />
              </ActionLeft>
              <BookMarkSVG />
            </Action>
            <FeedContent>
              <Likes>좋아요 {item.likes}개</Likes>
              <Text>
                <div>{item.name}</div>
                <p>{item.text}</p>
              </Text>
            </FeedContent>
            <Comment>
              <input type="text" placeholder="댓글 달기..." />
              <div>게시</div>
            </Comment>
          </Feed>
        ))}
    </>
  );
};

export default MainFeed;
