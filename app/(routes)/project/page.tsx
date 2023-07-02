import React from 'react';
import Minimap from './Minimap';
import Content from './Content';
import content from '../../_api/project.json';
import Wrapper from '@/app/_component/SmoothScroll';

interface AboutProps {}

export async function generateMetadata() {
  const { title, description, viewport, robots, charset } = content.metadata;
  return {
    title,
    description,
    viewport,
    robots,
    charset
  };
}

const About: React.FC<AboutProps> = () => {
  return (
    <Wrapper>
      <div className="w-screen h-full">
        <Content/>
      </div>
    </Wrapper>
  );
};

export default About;