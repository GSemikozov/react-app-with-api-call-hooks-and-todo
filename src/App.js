import './index.css';

import React, { useState } from 'react';

import { Container } from './components/container';
import { Form } from './components/form';
import { Layout } from './components/layout';
import { List } from './components/list';

function App() {
  const [listItems, setListItems] = useState([]);

  const addItem = item => {
    const newItems = [...listItems, ...item];
    setListItems(newItems);
  };

  const removeItem = index => {
    const newItems = [...listItems];
    newItems.splice(index, 1);
    setListItems(newItems);
  };

  return (
    <Layout>
      <Container>
        <div className="inner">
          <div className="inner__col">
            <h1 className="page-title">
              Now you can track all your cryptos here!
            </h1>
            <h2 className="page-subtitle">
              Just enter the cryptocurrency code on the form to the right.
            </h2>
            <List data={listItems} removeListItem={removeItem} />
          </div>
          <div className="inner__col">
            <Form addItem={addItem} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default App;
