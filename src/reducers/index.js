import { combineReducers } from 'redux';
import settingsReducer from './settings';
import deckReducer from './deck';
import gameStateReducer from './GameState';

export default combineReducers({
  settings: settingsReducer,
  deck: deckReducer,
  gameState: gameStateReducer,
});
