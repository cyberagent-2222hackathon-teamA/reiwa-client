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
        <Link to={`/user/${res.id}`}>{res.name}</Link>
        <p>{res.channel_id}</p>
      </div>
    </>
  );
};

export default TopComp;
