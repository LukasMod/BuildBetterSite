import React from 'react';
import { NavLink } from 'react-router-dom';
import bemCssModules from 'bem-css-modules';

import { default as AsideMenuStyles } from './AsideMenu.module.scss';

const style = bemCssModules(AsideMenuStyles);

const AsideMenu = () => {
  return (
    <aside className={style()}>
      <div className={style('nav-wrapper')}>
        <nav>
          <ul>
            <p className={style('title')}>MENU:</p>
            <li>
              <NavLink
                to='/shop'
                className={style('nav-link')}
                activeClassName={style('active')}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/user-panel'
                className={style('nav-link')}
                activeClassName={style('active')}>
                User Panel
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/blog'
                className={style('nav-link')}
                activeClassName={style('active')}>
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AsideMenu;
