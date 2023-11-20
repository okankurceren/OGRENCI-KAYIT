import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class Main extends Component {
componentWillMount() {
    // bu kısmı kendi firebase hesabınıza göre ayarlamalısınız.
    firebase.initializeApp({
    apiKey: 'AIzaS***_***-****',
    authDomain: '****.firebaseapp.com',
    databaseURL: 'https://****.firebaseio.com',
    projectId: '****',
    storageBucket: '****.appspot.com',
    messagingSenderId: '****'
  });
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default Main;
