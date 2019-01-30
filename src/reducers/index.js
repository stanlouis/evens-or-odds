import {
  SET_GAME_STARTED,
  SET_INSTRUCTIONS_EXPENDED,
  FETCH_DECK_RESULT,
} from '../actions/types';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false,
};

const rootReducer = (state = DEFAULT_SETTINGS, action) => {
  switch (action.type) {
    case SET_GAME_STARTED:
      return {
        ...state,
        gameStarted: action.gameStarted,
      };
    case SET_INSTRUCTIONS_EXPENDED:
      return {
        ...state,
        instructionsExpanded: action.instructionsExpanded,
      };
    case FETCH_DECK_RESULT:
      const { remaining, deck_id } = action;
      return {
        ...state,
        remaining,
        deck_id,
      };
    default:
      return state;
  }
};

export default rootReducer;
