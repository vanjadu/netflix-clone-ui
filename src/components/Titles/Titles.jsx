import React from 'react';
import './Titles.scss';
import Segment from '../Segment';

const Titles = () => {
  return (
    <div className="titles">
      <Segment title="Popular on Netflix" />
      <Segment title="Continue watching" />
      <Segment title="Watch it again" />
    </div>
  );
};

export default Titles;
