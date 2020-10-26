import React from 'react';
import bemModulesCss from 'bem-css-modules';

import { default as ServiceStyles } from './Service.module.scss';
import { StoreContext } from '../../store/StoreProvider';

const style = bemModulesCss(ServiceStyles);

const Service = ({ description, id, img, price, producers, title }) => {
  return (
    <li>
      <article className={style()}>
        <h3 className={style('title')}>{title}</h3>
        <img src={img} alt={title} className={style('image')} />
        <p className={style('price')}>
          {price} zł/m<sup>2</sup>
        </p>
        <p className={style('description')}>{description}</p>
        <p className={style('producers')}>
          <b>Producers:</b> {producers}
        </p>
      </article>
    </li>
  );
};

export default Service;
