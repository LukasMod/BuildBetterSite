import React, { useContext } from 'react';
import bemModulesCss from 'bem-css-modules';

import { default as ServicesStyles } from './Services.module.scss';
import { StoreContext } from '../../store/StoreProvider';
import Service from '../Service/Service';

const style = bemModulesCss(ServicesStyles);

const Services = () => {
  const { services } = useContext(StoreContext);

  const servicesElements = services.map((service) => (
    <Service key={service.id} {...service} />
  ));

  return (
    <article className={style()}>
      <h2 className={style('title')}>Shop</h2>
      <ul className={style('list')}>{servicesElements}</ul>
    </article>
  );
};

export default Services;
