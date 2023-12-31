import React from 'react';
import Header, {HeaderProps} from './HeaderContent';
import Main, {MainProps} from './MainContent';
import Footer, {FooterProps} from './FooterContent';

interface ContentProps {
  content: {
    header: HeaderProps;
    main: MainProps;
    footer: FooterProps;
  };
}

const Content: React.FC<ContentProps> = ({ content }) => {
  const { header, main, footer } = content;
  return (
    <article className="main-content col-start-1 lg:col-start-2 col-span-2 w-full h-full flex flex-col gap-20 lg:gap-40 pt-60 pb-20 lg:pb-60 font-normal">
      <Header {...header} />
      <Main {...main} />
      <Footer {...footer} />
    </article>
  );
};

export default Content;
