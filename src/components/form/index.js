import React, { useContext } from 'react';

import { API } from '../../constants';
import { StoreContext } from '../../utils/store';
import styles from './form.module.css';

export const Form = () => {
  const { queries, doFetch } = useContext(StoreContext);
  const [query = "", setQuery] = queries;

  return (
    <form
      className={styles.form}
      onSubmit={e => {
        doFetch(`${API}data/pricemulti?fsyms=${query}&tsyms=EUR`);
        setQuery("");
        e.preventDefault();
      }}
    >
      <div className={styles["form-field"]}>
        <input
          type="text"
          className={styles.input}
          value={query}
          onChange={event => setQuery(event.target.value.trim().toUpperCase())}
        />
        <span className={styles.line}></span>
        <label htmlFor="message" className={styles.label}>
          cryptocurrency code
        </label>
      </div>
      <button type="submit" className={styles.submit}>
        Add
      </button>
      <p className={styles.info}>
        Use of this service is subject to terms and conditions.
      </p>
    </form>
  );
};
