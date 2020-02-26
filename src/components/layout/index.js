import './layout.module.css';

import PropTypes from 'prop-types';
import React from 'react';

import bgImg from '../../assets/bg.png';
import { Footer } from '../footer';
import { Header } from '../header';
import styles from './layout.module.css';

export const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <>
      <main>
        <img src={bgImg} className="bg-img" alt="bg-img" />
        {children}
      </main>
      <Footer />
    </>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
