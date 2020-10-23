import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as HeaderStyles } from './Header.module.scss';

const style = bemCssModules(HeaderStyles);

const Header = () => {
  return (
    <header className={style()}>
      <img
        src='img/LogoBuildBetter240x180.png'
        alt=''
        className={style('logo-wrapper')}
      />
      <div className={style('img-wrapper')}>
        <img src='img/industrialHeader.png' alt='' className={style('image')} />
      </div>
    </header>
  );
};

export default Header;
