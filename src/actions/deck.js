import { DECK, DECK_DRAW } from './types';

const API_BASEURL = 'https://deck-of-cards-api-wrapper.appspot.com';
const CUSTOM_ERROR = 'Unsuccessful request to deckofcardsapi.com';

export const fetchDeckSuccess = deckJson => {
  const { remaining, deck_id } = deckJson;
  return { type: DECK.FETCH_SUCCESS, remaining, deck_id };
};

export const fetchDeckError = error => ({
  type: DECK.FETCH_ERROR,
  message: error.message,
});

export const fetchNewDeck = () => dispatch => {
  return fetch(`${API_BASEURL}/deck/new/shuffle`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(CUSTOM_ERROR);
      }
      return response.json();
    })
    .then(json => dispatch(fetchDeckSuccess(json)))
    .catch(error => dispatch(fetchDeckError(error)));
};

export const fetchDrawCard = deck_id => dispatch => {
  return fetch(`${API_BASEURL}/deck/${deck_id}/draw`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(CUSTOM_ERROR);
      }
      return response.json();
    })
    .then(json => {
      dispatch({
        type: DECK_DRAW.FETCH_SUCCESS,
        cards: json.cards,
        remaining: json.remaining,
      });
    })
    .catch(error =>
      dispatch({ type: DECK_DRAW.FETCH_ERROR, message: error.message })
    );
};
