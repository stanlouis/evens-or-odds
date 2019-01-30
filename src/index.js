import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false,
};

const SET_GAME_STARTED = 'SET_GAME_STARTED';
const SET_INSTRUCTIONS_EXPENDED = 'SET_INSTRUCTIONS_EXPENDED';

const rootReducer = (state = DEFAULT_SETTINGS, action) => {
  switch (action.type) {
    case SET_GAME_STARTED:
      return {
        gameStarted: action.gameStarted,
        ...state,
      };
    case SET_INSTRUCTIONS_EXPENDED:
      return {
        ...state,
        gameStarted: action.gameStarted,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

console.log('Initial store.getState()', store.getState());

store.subscribe(() => console.log('store.getState()', store.getState()));

const startGame = () => {
  return { type: SET_GAME_STARTED, gameStarted: true };
};

const cancelGame = () => {
  return { type: SET_GAME_STARTED, gameStarted: false };
};

const expandInstructions = () => {
  return { type: SET_INSTRUCTIONS_EXPENDED, instructionsExpanded: true };
};
const cancelInstructions = () => {
  return { type: SET_INSTRUCTIONS_EXPENDED, instructionsExpanded: false };
};

store.dispatch(startGame());
store.dispatch(expandInstructions());
store.dispatch(cancelGame());
store.dispatch(cancelInstructions());

// store.dispatch({ type: 'foo' });
// store.dispatch({ type: 'bar' });

ReactDOM.render(<App />, document.getElementById('root'));
