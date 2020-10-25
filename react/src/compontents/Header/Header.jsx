import React from 'react';
import bemCssModules from 'bem-css-modules';
import { Link } from 'react-router-dom';

import { default as HeaderStyles } from './Header.module.scss';

const style = bemCssModules(HeaderStyles);

const Header = () => {
  return (
    <header className={style()}>
      <Link to='/'>
        <img
          src='img/LogoBuildBetter240x180.png'
          alt='logo buildbetter'
          className={style('logo-wrapper')}
        />
        <div className={style('img-wrapper')}>
          <img
            src='img/industrialHeader.png'
            alt='industrial header'
            className={style('image')}
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;
