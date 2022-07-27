import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <>
            <div className={s.main_img}>
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt='main img' />
            </div>
            <div>
                ava +description
            </div>
        </>
    );
}

export default ProfileInfo;