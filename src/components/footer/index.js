import React from 'react';

import { Container } from '../container';
import styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus
      justo, tincidunt nec mi vel, ultricies tristique tortor. Aliquam dolor
      purus, aliquet non lorem eu, bibendum convallis est. In hac habitasse
      platea dictumst. Vivamus non nulla nec nibh dapibus consequat non et
      neque.
    </Container>
  </footer>
);
