import React from 'react';
import style from './TasksBlock.module.scss';
import upcomingImg from '../../assets/chevrons-right.svg';
import todayImg from '../../assets/list.svg';
import calendarImg from '../../assets/calendar.svg';
import stickyWallImg from '../../assets/icon_StickyNote_.svg';
const TasksBlock = () => {
  return (
    <div className={style.container}>
      <span className={style.title}>Tasks</span>
      <ol>
        <li>
          <img src={upcomingImg} alt="" />
          <span className={style.tasksItem}>Upcoming</span>
          <span className={style.count}>15+</span>
        </li>
        <li>
          <img src={todayImg} alt="" />
          <span className={style.tasksItem}>Today</span>
          <span className={style.count}>8</span>
        </li>
        <li>
          <img src={calendarImg} alt="" />
          <span className={style.tasksItem}>Calendar</span>
        </li>
        <li>
          <img src={stickyWallImg} alt="" />
          <span className={style.tasksItem}>Sticky Wall</span>
        </li>
      </ol>
    </div>
  );
};

export default TasksBlock;
