import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as ContentStyles } from './Content.module.scss';

const style = bemCssModules(ContentStyles);

const Content = () => {
  return (
    <main className={style()}>
      <h1>Article</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        facilis. Quasi, nulla! Unde, tempora. Voluptatibus vitae enim ex, ipsum
        dolorem ullam corrupti vero nam delectus quasi mollitia perspiciatis
        impedit nesciunt! Omnis nulla soluta architecto eius voluptas, id dicta
        mollitia quibusdam ab nemo at corporis cumque, iste aspernatur quaerat
        tempora. Similique possimus officiis provident aut. Ab suscipit eos
        quasi expedita ex? Dolore nostrum, unde maxime minima, nemo facilis
        neque, quos maiores eveniet repudiandae ut perspiciatis doloribus
        officiis quas sed amet suscipit? Qui totam eligendi corrupti rerum fugit
        deserunt similique nostrum ad. Suscipit nobis corporis enim dolorem
        soluta ducimus mollitia sunt provident. Non pariatur veritatis optio
        perspiciatis, aperiam ipsum cum, officia placeat nobis in consectetur
        quis natus, excepturi quo tenetur quisquam et. Ipsa nam, obcaecati
        possimus nemo ullam a beatae quas distinctio, consequatur dolorem quod
        molestiae nostrum maiores fuga? Praesentium rerum animi quae vero quas
        ipsum eligendi commodi harum, quaerat maxime assumenda. Aliquam odio ea
        odit explicabo, asperiores numquam nam, veritatis molestias ipsam
        obcaecati adipisci cupiditate non at, tempora natus aspernatur.
        Repellat, soluta. Sapiente sunt hic id nihil saepe! Iusto, at atque.
        Vitae quod rem veniam minus. Sed eius molestiae sunt et corporis quas
        obcaecati pariatur recusandae harum, doloremque saepe nesciunt placeat
        vel, labore adipisci. Officiis tenetur ipsum corporis, corrupti esse
        maiores. Repellendus corrupti ratione animi deleniti accusamus, et,
        sapiente illo porro a laboriosam cumque provident ex laudantium. Illo
        itaque blanditiis architecto sit quos, voluptas quidem eos iure quod,
        alias aspernatur eaque.
      </div>
    </main>
  );
};

export default Content;
