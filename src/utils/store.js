import React, { createContext, useState } from 'react';

import { useCryptoApi } from '../hooks/useCryptoHook';

export const StoreContext = createContext(null);

export default ({ children }) => {
  const [{ data, isLoading, isError }, doFetch] = useCryptoApi();
  const [query, setQuery] = useState();

  const store = {
    sharing: [{ data, isLoading, isError }],
    queries: [query, setQuery],
    doFetch
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
