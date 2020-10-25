import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as BlogPostStyles } from './BlogPost.module.scss';

const style = bemCssModules(BlogPostStyles);

const BlogPost = () => {
  return (
    <article>
      <div className={style('image-wrapper')}>
        <img src='img/tools640x426.jpg' alt='tools' />
      </div>
      <h2 className={style('title')}>Article</h2>
      <p className={style('text')}>
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
        quis natus, excepturi quo tenetur quisquam et.
      </p>
    </article>
  );
};

export default BlogPost;
