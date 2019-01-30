// Actions type
import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPENDED } from './types';

// Actions creators
export const startGame = () => {
  return { type: SET_GAME_STARTED, gameStarted: true };
};

export const cancelGame = () => {
  return { type: SET_GAME_STARTED, gameStarted: false };
};

export const expandInstructions = () => {
  return { type: SET_INSTRUCTIONS_EXPENDED, instructionsExpanded: true };
};
export const collapseInstructions = () => {
  return { type: SET_INSTRUCTIONS_EXPENDED, instructionsExpanded: false };
};
