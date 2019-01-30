import { DECK } from './types';

export const fetchDeckSuccess = deckJson => {
  const { remaining, deck_id } = deckJson;
  return { type: DECK.FETCH_SUCCESS, remaining, deck_id };
};

export const fetchDeckError = error => ({
  type: DECK.FETCH_ERROR,
  message: error.message,
});

export const fetchNewDeck = () => dispatch => {
  const BASEURL = 'https://deck-of-cards-api-wrapper.appspot.com';
  return fetch(`${BASEURL}/deck/new/shuffle`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Unsuccessful request to deckofcardsapi.com');
      }
      return response.json();
    })
    .then(json => dispatch(fetchDeckSuccess(json)))
    .catch(error => dispatch(fetchDeckError(error)));
};
