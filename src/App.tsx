import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from './components/nav/Nav';
import StoryFeed from './components/feeds/StoryFeed';
import MainFeed from './components/feeds/MainFeed';
import ForYou from './components/forYou/ForYou';

const Main = styled.main`
  padding: 9rem 0;
  background-color: #fafafa;
`;

const Section = styled.section`
  position: relative;
  width: 93.5rem;
  margin: 0 auto;
  display: flex;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Content = styled.div`
  max-width: 61.4rem;
  width: 100%;

  @media (max-width: 1000px) {
    margin: 0 auto;
  }
`;

interface StoryProps {
  id: number;
  profile: string;
  name: string;
}

export type StoryFeedProps = {
  story: StoryProps[];
};

const App: React.FC = () => {
  const [story, setStory] = useState<StoryProps[]>([]);
  useEffect(() => {
    fetch('/data/story.json')
      .then((data) => data.json())
      .then((data) => setStory(data));
  }, []);

  return (
    <>
      <Nav />
      <Main>
        <Section>
          <Content>
            <StoryFeed story={story} />
            <MainFeed />
          </Content>
          <ForYou story={story} />
        </Section>
      </Main>
    </>
  );
};

export default App;
