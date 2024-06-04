import React from 'react';
import style from './ListsBlock.module.scss';
import addNewListImg from '../../assets/plus-circle.svg';

const ListsBlock = () => {
  return (
    <div className={style.container}>
      <span className={style.title}>Lists</span>
      <ol>
        <li className={style.listItem}>
          <span className={style.colorCircle1}></span>
          <span>Work</span>
        </li>
        <li className={style.listItem}>
          <span className={style.colorCircle2}></span>
          <span>Personal</span>
        </li>
        <li className={style.listItem}>
          <span className={style.colorCircle3}></span>
          <span>Study</span>
        </li>
        <li className={style.listItem}>
          <img src={addNewListImg} alt="#" />
          <span>Add new list</span>
        </li>
      </ol>
    </div>
  );
};

export default ListsBlock;
