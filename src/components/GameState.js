import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const correctGuessesKey = 'CORRECT_GUESSES_RECORD_win321';

const checkRecord = correctGuesses => {
  const record = Number(localStorage.getItem(correctGuessesKey));
  if (correctGuesses > record) {
    localStorage.setItem(correctGuessesKey, correctGuesses);
    return { record: correctGuesses, isNewRecord: true };
  }
  return { record, isNewRecord: false };
};

const GameState = ({ correctGuesses, remaining }) => {
  const { record, isNewRecord } = checkRecord(correctGuesses);
  const recordLabel = isNewRecord ? (
    <Fragment>
      <i className="fas fa-trophy" /> New record
    </Fragment>
  ) : (
    'Record'
  );
  const guessText = correctGuesses === 1 ? 'guess' : 'guesses';
  return (
    <div>
      <h3>
        {recordLabel}: {record}
      </h3>
      <p>{remaining} cards remaining</p>
      <p>
        {correctGuesses} correct {guessText}
      </p>
    </div>
  );
};

export default connect(
  ({ deck: { remaining }, gameState: { correctGuesses } }) => ({
    remaining,
    correctGuesses,
  })
)(GameState);
