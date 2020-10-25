import React, { createContext, useEffect, useState } from 'react';

import request from '../helpers/request';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    const { data } = await request.get('/services');
    setServices(data.services);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ services, setServices, user, setUser }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
