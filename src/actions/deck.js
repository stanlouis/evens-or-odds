import { FETCH_DECK_RESULT } from './types';

export const fetchDeckResult = deckJson => {
  const { remaining, deck_id } = deckJson;
  return { type: FETCH_DECK_RESULT, remaining, deck_id };
};

export const fetchNewDeck = () => dispatch => {
  const BASEURL = 'https://deck-of-cards-api-wrapper.appspot.com';
  return fetch(`${BASEURL}/deck/new/shuffle`)
    .then(response => response.json())
    .then(json => dispatch(fetchDeckResult(json)));
};
