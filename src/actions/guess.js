import { SET_GUESS } from './types';

export const setGuessEven = () => ({
  type: SET_GUESS,
  guess: 'event',
});

export const setGuessOdd = () => ({
  type: SET_GUESS,
  guess: 'odd',
});
