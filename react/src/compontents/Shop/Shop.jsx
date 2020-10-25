import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as ShopStyles } from './Shop.module.scss';

const style = bemCssModules(ShopStyles);

const Shop = () => {
  return (
    <article>
      <h2 className={style('title')}>Shop</h2>
      <p className={style('text')}>Services</p>
    </article>
  );
};

export default Shop;
