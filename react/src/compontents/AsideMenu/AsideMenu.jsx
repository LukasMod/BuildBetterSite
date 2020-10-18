import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as AsideMenuStyles } from './AsideMenu.module.scss';

const style = bemCssModules(AsideMenuStyles);

const AsideMenu = () => {
    return (
        <aside className={style()}>
            <div className={style('nav-wrapper')}>
                <nav>
                    <ul>
                        <p className={style('title')}>Nawigacja:</p>
                        <li className={style('link')}>Shop</li>
                        <li className={style('link')}>User Panel</li>
                        <li className={style('link')}>Blog</li>
                    </ul>
                </nav>
            </div>
        </aside>);
}

export default AsideMenu;
