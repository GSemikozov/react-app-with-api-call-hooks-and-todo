import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import { Notification } from '../notification';
import styles from './form.module.css';

export const Form = ({ addItem }) => {
  const [query = "", setQuery] = useState("");
  const [notification, showNotification] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!query) return;
    setIsError(false);

    await setQuery(e.target.value);
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${query}&tsyms=EUR&extraParams=test&api_key=4c2ea3142b37ec9003722fb17ec0a0499c055adcf45502bdf5dfbb28c2dd454c`
    );
    const data = await response.json();

    try {
      if (data.Response === "Error") {
        setIsError(true);
        throw new Error(data.Message);
      }

      const result = Object.entries(data).map(([crypto, data]) => ({
        name: crypto,
        value: data.EUR
      }));

      addItem(result);
      setQuery("");
    } catch (error) {
      console.log(error);
    }
  };

  const loaded = useRef(false);
  useEffect(() => {
    if (loaded.current && isError === true) {
      showNotification(true);
      const timer = setTimeout(() => {
        showNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      loaded.current = true;
    }
  }, [isError]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {notification && (
        <Notification>Here will be placed Error message</Notification>
      )}
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

Form.propTypes = {
  addItem: PropTypes.func.isRequired
};
