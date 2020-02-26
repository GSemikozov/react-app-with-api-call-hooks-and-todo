import React, { useContext } from 'react';

import cupIcon from '../../assets/icon.svg';
import { API } from '../../constants';
import { StoreContext } from '../../utils/store';
import styles from './list.module.css';

export const List = () => {
  const { sharing, doFetch } = useContext(StoreContext);
  const [{ data }] = sharing;

  const removeListItem = index => {
    const listItems = data.filter((listItem, listItemIndex) => {
      return listItemIndex !== index;
    });
    const query = listItems.map(item => item.name).join(",");
    const url =
      query.length > 0
        ? `${API}data/pricemulti?fsyms=${query}&tsyms=EUR&extraParams=test&api_key=4c2ea3142b37ec9003722fb17ec0a0499c055adcf45502bdf5dfbb28c2dd454c`
        : null;
    doFetch(url);
  };

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
