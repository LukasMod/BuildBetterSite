import React from 'react';
import bemCssModules from 'bem-css-modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { default as FooterStyles } from './Footer.module.scss';

const style = bemCssModules(FooterStyles);
const linkToGitHub = 'https://github.com/LukasMod';

const Footer = () => {
  return (
    <footer className={style()}>
      <section className={style('contact-wrapper')}>
        <div className={style('media-wrapper')}>
          <a className={style('media-wrapper-link')} href={linkToGitHub}>
            <FontAwesomeIcon
              icon={['fab', 'facebook-square']}
              className={style('media')}
            />
          </a>
          <a className={style('media-wrapper-link')} href={linkToGitHub}>
            <FontAwesomeIcon
              icon={['fab', 'github-square']}
              className={style('media')}
            />
          </a>
          <a className={style('media-wrapper-link')} href={linkToGitHub}>
            <FontAwesomeIcon
              icon={'envelope-square'}
              className={style('media')}
            />
          </a>
        </div>
        <address className={style('address-wrapper')}>
          <div>
            <FontAwesomeIcon
              icon={'building'}
              className={style('media--small')}
            />
            <span>Gdynia, Świętokrzyska 1</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={'phone-square-alt'}
              className={style('media--small')}
            />
            <span>(+48) 123 456 789</span>
          </div>
          <div>
            <FontAwesomeIcon icon={'at'} className={style('media--small')} />
            <span>buildbetteroffice@bb.com</span>
          </div>
        </address>
      </section>

      <section className={style('rights')}>
        <FontAwesomeIcon icon={'code'} className={style('media--small')} />
        <span>by LukasMod. Cheers!</span>
      </section>
    </footer>
  );
};

export default Footer;
