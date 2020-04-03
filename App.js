import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormComponent from "./components/formComponent";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import reducers from './reducers';
import thunk from "redux-thunk";

// const reducer = combineReducers({
//   form: reduxFormReducer, // mounted under "form"
// });

const store = createStore(reducers, applyMiddleware(thunk));
export default function App() {
  return (
      <Provider store={store}>
        <FormComponent/>
      </Provider>
  );
}
