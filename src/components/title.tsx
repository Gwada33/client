import React from 'react';

const Title = ({ children, blue }) => {
  const titleClass = `title text-left w-9/12 text-[75px] font-bold ${blue ? 'text-[#0F44FF]' : ''}`;

  return (
      <h1 className={titleClass}>{children}</h1>
  );
};

export default Title;
