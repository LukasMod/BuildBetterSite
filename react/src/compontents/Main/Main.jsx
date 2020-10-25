import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as MainStyles } from './Main.module.scss';

const style = bemCssModules(MainStyles);

const Main = () => {
  return (
    <article className={style()}>
      <h2 className={style('title')}>Hello Seeker of effective solutions</h2>
      <p className={style('text')}>
        Welcome to my website. Be sure to visit the shopping section and blog.
      </p>
      <div className={style('image-wrapper')}>
        <img src='img/architects.jpg' alt='architects' />
      </div>
    </article>
  );
};

export default Main;
