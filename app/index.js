import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import 'react-hot-loader/patch';

require('./style.css');

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#app'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
