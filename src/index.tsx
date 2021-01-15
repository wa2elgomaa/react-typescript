import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import styled from 'styled-components';

// application store 
import {store , persistor} from './redux/stores';

// global styles 
import GlobalStyle from './index.styled';

// containers 
import {Home} from './containers/Home';


// styles 
const AppWrapper = styled.div`{
  padding: 0 20px;
  display:flex;
  justify-content:center;
  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
  }
}`


ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <AppWrapper>
      <GlobalStyle />
      <Home />
    </AppWrapper>
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
