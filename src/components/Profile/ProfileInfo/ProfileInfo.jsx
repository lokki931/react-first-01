import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ava from '../../../assets/images/ava.png';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const { photos, fullName, aboutMe } = props.profile;
  return (
    <>
      <div className={s.main_img}>
        <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="main img" />
      </div>
      <div className={s.img_info}>
        <img src={photos.large ? photos.large : ava} alt={fullName} />
        <div className={s.info}>
          <p>{fullName}</p>
          <p>{aboutMe}</p>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
