import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import bemCssModules from 'bem-css-modules';

import { default as ContentStyles } from './Content.module.scss';

import BlogPost from '../BlogPost/BlogPost';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Services from '../Services/Services';

const style = bemCssModules(ContentStyles);

const Content = () => {
  return (
    <main className={style()}>
      <Switch>
        <Route exact path='/' render={() => <Main />} />
        <Route path='/services' render={() => <Services />} />
        <Route path='/user-panel' render={() => <Services />} />
        <Route path='/blog' render={() => <BlogPost />} />
        <Route path='/PageNotFound' render={() => <PageNotFound />} />
        <Redirect to='PageNotFound' />
      </Switch>
    </main>
  );
};

export default Content;
