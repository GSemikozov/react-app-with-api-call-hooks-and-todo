import './index.css';

import React, { useContext, useEffect, useRef, useState } from 'react';

import { Container } from './components/container';
import { Form } from './components/form';
import { Layout } from './components/layout';
import { List } from './components/list';
import { Notification } from './components/notification';
import { StoreContext } from './utils/store';

function App() {
  const { sharing } = useContext(StoreContext);
  const [{ isLoading, isError }] = sharing;
  const [notification, showNotification] = useState(false);

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
    <Layout>
      <div></div>
      {notification && (
        <Notification>
          param is empty or null, or there is no data yet / anymore
        </Notification>
      )}
      <Container>
        <div className="inner">
          <div className="inner__col">
            <h1 className="page-title">
              Now you can track all your cryptos here!
            </h1>
            <h2 className="page-subtitle">
              Just enter the cryptocurrency code on the form to the right.
            </h2>
            {isLoading ? <div>Loading...</div> : <List />}
          </div>
          <div className="inner__col">
            <Form />
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default App;
