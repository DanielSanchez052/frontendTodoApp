import React from 'react';

import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig'; 

import PageBase from './pages/TaskPage/PageBase'
import {Provider} from 'react-redux'
import {store} from './store/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PageBase />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
