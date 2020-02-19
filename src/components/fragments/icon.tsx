import React from 'react';

interface Props {
  src: string;
  alt: string;
}

export const Icon: React.FC<Props> = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};
