import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  res: User;
}

const TopComp: React.FC<Props> = ({ res }) => {
  // eslint-disable-next-line no-console
  console.log({ res });
  return (
    <>
      <div>
        <p>{res.name}</p>
        <Link to={`/${res.id}`}>{res.id}</Link>
        <p>{res.channel_id}</p>
      </div>
    </>
  );
};

export default TopComp;
