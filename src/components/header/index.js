import React from 'react';

import { Container } from '../container';
import { Logo } from '../logo';
import styles from './header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <Container className={styles.headerInner}>
      <Logo />
    </Container>
  </header>
);
