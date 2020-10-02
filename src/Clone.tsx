import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  HomeSVG,
  DirectSVG,
  CompassSVG,
  HeartSVG,
  OptionsSVG,
  CommentSVG,
  BookMarkSVG,
} from './components';

const BorderGray = styled.div`
  border: ${(props) => props.theme.grayBorder};
  border-radius: 3px;
  background-color: #fff;
`;

const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CircleProfileImg = styled.img<{ hasBorder?: boolean }>`
  border-radius: 50%;
  border: ${(props) => (props.hasBorder ? '1px solid #dfdfdf' : 'none')};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const NavWrap = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: #fff;
  border-bottom: ${(props) => props.theme.grayBorder};
`;

const NavContainer = styled(FlexSpaceBetween)`
  align-items: center;
  width: 93.5rem;
  height: 5.4rem;
  margin: 0 auto;
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

const Main = styled.main`
  padding: 9rem 0;
  background-color: #fafafa;
`;

const Section = styled.section`
  position: relative;
  width: 93.5rem;
  margin: 0 auto;
  display: flex;
`;

const ContentWrap = styled.div`
  max-width: 61.4rem;
  width: 100%;
`;

const ContentContainer = styled.div``;

const StoryWrap = styled(BorderGray)`
  margin-bottom: 2.4rem;
  padding: 1.6rem 0;
`;

const StoryContainer = styled.div`
  height: 8.4rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
`;

const Story = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6.3rem;
  padding: 0 0.5rem;

  div {
    border-radius: 50%;
    height: 6rem;
    width: 6rem;
    border: 2px solid red;
  }

  img {
    border-radius: 50%;
    height: 5.6rem;
    width: 5.6rem;
    object-fit: cover;
    box-sizing: content-box;
    border: 2px solid #fff;
    margin-bottom: 8px;
  }

  p {
    font-size: 1.2rem;
  }
`;

const FeedWrap = styled.div``;

const Feed = styled(BorderGray)`
  &:not(:last-child) {
    margin-bottom: 6rem;
  }
`;

const FeedTitle = styled(FlexSpaceBetween)`
  padding: 1.6rem;
  height: 2rem;
`;

const FeedTitleProfile = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: 600;
    margin-left: 1rem;
  }
`;

const FeedPicture = styled.div`
  img {
    height: 61.3rem;
    width: 61.3rem;
    object-fit: cover;
  }
`;

const FeedAction = styled(FlexSpaceBetween)`
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

const Content = styled.div`
  display: flex;
  margin: 1rem 0;

  div {
    font-weight: 600;
    margin-right: 5px;
  }
`;

const CommentWrap = styled(FlexSpaceBetween)`
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

const ForYouWrap = styled.div`
  position: fixed;
  left: 90rem;
  width: 29.5rem;
`;

const ForYouContainer = styled.div``;

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

const Recommend = styled.div``;

const RecommendTitle = styled(FlexSpaceBetween)`
  color: ${(props) => props.theme.text.gray};
  font-weight: 600;
  font-size: 1.4rem;
`;

const SeeAll = styled.div`
  color: black;
  font-size: 1.2rem;
`;

const RecommendFriends = styled.div``;

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

interface StoryProps {
  id: number;
  profile: string;
  name: string;
}

interface UserFeedProps {
  id: number;
  profile: string;
  name: string;
  img: string;
  likes: number;
  text: string;
}

const Clone: React.FC = () => {
  const [story, setStory] = useState<StoryProps[]>([]);
  const [userFeed, setUserFeed] = useState<UserFeedProps[]>([]);
  useEffect(() => {
    fetch('/data/story.json')
      .then((data) => data.json())
      .then((data) => setStory(data));
  }, []);
  // console.log(story);

  useEffect(() => {
    fetch('/data/userFeed.json')
      .then((data) => data.json())
      .then((data) => setUserFeed(data));
  }, []);

  return (
    <>
      <NavWrap>
        <NavContainer>
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
              src="https://darrynking.files.wordpress.com/2019/08/woody.png?w=640"
              alt="profile"
              width="2.2rem"
              height="2.2rem"
              hasBorder
            />
          </Icons>
        </NavContainer>
      </NavWrap>

      <Main>
        <Section>
          <ContentWrap>
            <ContentContainer>
              <StoryWrap>
                <StoryContainer>
                  {story &&
                    story.map((item) => (
                      <Story key={item.id}>
                        <div>
                          <img src={item.profile} alt="profile" />
                        </div>
                        <p>
                          {item.name.length > 10
                            ? item.name.slice(0, 9).concat('...')
                            : item.name}
                        </p>
                      </Story>
                    ))}
                </StoryContainer>
              </StoryWrap>

              <FeedWrap>
                {userFeed &&
                  userFeed.map((item) => (
                    <Feed key={item.id}>
                      <FeedTitle>
                        <FeedTitleProfile>
                          <CircleProfileImg
                            src={item.profile}
                            alt="profile"
                            height="3.2rem"
                            width="3.2rem"
                          />
                          <span>{item.name}</span>
                        </FeedTitleProfile>
                        <OptionsSVG />
                      </FeedTitle>
                      <FeedPicture>
                        <img src={item.img} alt="feed" />
                      </FeedPicture>
                      <FeedAction>
                        <ActionLeft>
                          <HeartSVG />
                          <CommentSVG />
                          <DirectSVG />
                        </ActionLeft>
                        <BookMarkSVG />
                      </FeedAction>
                      <FeedContent>
                        <Likes>좋아요 {item.likes}개</Likes>
                        <Content>
                          <div>{item.name}</div>
                          <p>{item.text}</p>
                        </Content>
                      </FeedContent>
                      <CommentWrap>
                        <input type="text" placeholder="댓글 달기..." />
                        <div>게시</div>
                      </CommentWrap>
                    </Feed>
                  ))}
              </FeedWrap>
            </ContentContainer>
          </ContentWrap>

          <ForYouWrap>
            <ForYouContainer>
              <Profile>
                <CircleProfileImg
                  src="https://darrynking.files.wordpress.com/2019/08/woody.png?w=640"
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
              <Recommend>
                <RecommendTitle>
                  <div>회원님을 위한 추천</div>
                  <SeeAll>모두 보기</SeeAll>
                </RecommendTitle>
                <RecommendFriends>
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
                </RecommendFriends>
              </Recommend>
            </ForYouContainer>
          </ForYouWrap>
        </Section>
      </Main>
    </>
  );
};

export default Clone;
