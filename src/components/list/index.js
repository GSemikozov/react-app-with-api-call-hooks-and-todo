import PropTypes from 'prop-types';
import React from 'react';

import cupIcon from '../../assets/icon.svg';
import styles from './list.module.css';

export const List = ({ data, removeListItem }) => {
  return (
    <div>
      <ul className={styles.list}>
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <li key={index} index={index}>
              <img src={cupIcon} alt="icon" />
              <span className={styles.currencies}>
                <span className={styles.currency}>{item.name} </span>{" "}
                <span className={styles.rate}>{item.value} &euro;</span>
              </span>
              <button
                type="button"
                className={styles.button}
                onClick={() => removeListItem(index)}
              >
                <span className={styles.delete}></span>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  removeListItem: PropTypes.func.isRequired
};
