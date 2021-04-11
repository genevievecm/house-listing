import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import Listing from './pages/Listing';
import reportWebVitals from './reportWebVitals';

import './styles/global.scss';

// automates some a11y testing
// https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react
if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

// TODO: add routing for different pages
ReactDOM.render(
  <React.StrictMode>
		<Layout>
			<Listing />
		</Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
