import React from 'react';
import style from './SettingsSignOutBlock.module.scss';
import settingsImg from '../../assets/align-center.svg';
import signOutImg from '../../assets/log-out.svg';

const SettingsSignOutBlock = () => {
  return (
    <div className={style.container}>
      <div className={style.settings}>
        <img src={settingsImg} alt="" />
        <span>Settings</span>
      </div>
      <div className={style.signOut}>
        <img src={signOutImg} alt="" />
        <span>Sign Out</span>
      </div>
    </div>
  );
};

export default SettingsSignOutBlock;
