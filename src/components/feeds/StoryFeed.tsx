import React from 'react';
import styled from 'styled-components';
import { BorderGray } from '../index';
import { StoryFeedProps } from '../../App';

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

const StoryFeed = ({ story }: StoryFeedProps) => {
  return (
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
  );
};

export default StoryFeed;
