import React from 'react';

const Subtitle = ({ children, blue }) => {
  const titleClass = `text-lg opacity-80 w-full font-bold ${blue ? 'text-[#0F44FF]' : ''}`;

  return (
      <h2 className={titleClass}>{children}</h2>
  );
};

export default Subtitle;
