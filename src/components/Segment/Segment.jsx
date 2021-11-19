import React from 'react';
import './Segment.scss';
// Assets
import PlaceholderImage from '../../assets/thumbnail-top10-h.jpg';
import SomeImage from '../../assets/thumbnail-top10.jpg';
import OtherImage from '../../assets/thumbnail.jpg';

const Segment = ({title}) => {
  return (
    <div className="segment">
      <p className="segment__title">{title}</p>
      <div className="segment__container">
        <img src={PlaceholderImage} alt="thumbnail" className="segment__thumbnail" />
        <img src={PlaceholderImage} alt="thumbnail" className="segment__thumbnail" />
        <img src={PlaceholderImage} alt="thumbnail" className="segment__thumbnail" />
        <img src={PlaceholderImage} alt="thumbnail" className="segment__thumbnail" />
        <img src={PlaceholderImage} alt="thumbnail" className="segment__thumbnail" />
      </div>
    </div>
  );
};

export default Segment;
