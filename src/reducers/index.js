import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPENDED } from '../actions/types';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false,
};

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

export default rootReducer;
