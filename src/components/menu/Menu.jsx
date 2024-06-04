import React from 'react';
import style from './Menu.module.scss';
import searchImg from '../../assets/search.svg';
import TasksBlock from '../tasksBlock/TasksBlock';
import ListsBlock from '../listsBlock/ListsBlock';
import SettingsSignOutBlock from '../settingsSignOutBlock/SettingsSignOutBlock';

const Menu = () => {
  return (
    <div className={style.container}>
      <span className={style.menuText}>Menu</span>
      <div className={style.searchBlock}>
        <img src={searchImg} alt="" />
        <input type="text" placeholder="Search..." />
      </div>
      <TasksBlock />
      <ListsBlock />
      <SettingsSignOutBlock />
    </div>
  );
};

export default Menu;
