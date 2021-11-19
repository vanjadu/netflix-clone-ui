import React from 'react';
import './Billboard.scss';
// Assets
import BackgroundImage from '../../assets/billboard.webp';
import TitleImage from '../../assets/billboard-title.webp';

const Billboard = () => {
  return (
    <div className="billboard">
      <img
        src={BackgroundImage}
        alt="background"
        className="billboard__background"
      />
      <div className="billboard__content">
        <img src={TitleImage} alt="movie title" className="billboard__title" />
      </div>
    </div>
  );
};

export default Billboard;
