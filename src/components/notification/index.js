import React from 'react';

import styles from './notification.module.css';

export const Notification = ({ children }) => (
  <div className={styles.notification}>{children}</div>
);
