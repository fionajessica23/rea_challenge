import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'react-hot-loader/patch';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './components/reducers';
import ReduxApp from './components/App';

const logger = store => next => (action) => {
  // This could be used down the track for tracking events? At the moment it is just for debugging.
  console.log('dispatching', action); // eslint-disable-line no-console
  console.log('current state', store.getState()); // eslint-disable-line no-console

  return next(action);
};

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(logger)),
);

const render = (Component) => {
  ReactDom.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.querySelector('#app'),
  );
};

render(ReduxApp);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(ReduxApp);
  });
}
