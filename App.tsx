import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import MainNavigation from './src/routes/MainNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;