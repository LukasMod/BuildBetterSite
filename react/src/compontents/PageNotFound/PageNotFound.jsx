import React from 'react';
import bemCssModules from 'bem-css-modules';
import { Link } from 'react-router-dom';

import { default as PageNotFoundStyles } from './PageNotFound.module.scss';

const style = bemCssModules(PageNotFoundStyles);

const PageNotFound = () => {
  return (
    <article className={style()}>
      <div className={style('image-wrapper')}>
        <img src='img/blueprint.jpg' alt='blueprint' />
        <h2 className={style('title')}>Upssss! We have a problem...</h2>
        <p className={style('text')}>
          The architect forgot to draw something into the design. Try &nbsp;
          <Link to='/' className={style('link')}>
            here
          </Link>
        </p>
      </div>
    </article>
  );
};

export default PageNotFound;
