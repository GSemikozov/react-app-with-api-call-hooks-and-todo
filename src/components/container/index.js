import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './container.module.css';

export const Container = ({ children, className }) => (
  <div className={cx(styles.container, className)}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Container.defaultProps = {
  className: null
};
