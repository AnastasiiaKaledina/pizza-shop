import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>😕</span>
      <br />
      <h2>
        Страница не найдена. Попробуйте перейти на&nbsp;<NavLink to='/' className={styles.mainHref}>главную</NavLink>
      </h2>
    </div>
  );
};

export default NotFoundBlock;
