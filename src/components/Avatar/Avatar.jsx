import React from 'react';
import './Avatar.scss';
import AvatarImage from '../../assets/vanja.jpg'

const Avatar = () => {
  return (
    <div className="avatar">
      <img src={AvatarImage} alt="avatar" className="avatar__image" />
    </div>
  );
};

export default Avatar;
