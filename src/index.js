import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/routes';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers'

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>

		<Routes />

	</Provider>
  ,
  document.getElementById('root')
);
