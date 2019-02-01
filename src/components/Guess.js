import React from 'react';
import { connect } from 'react-redux';
import { setGuessEven, setGuessOdd } from '../actions/guess';

const Guess = ({ guess, setGuessEven, setGuessOdd }) => {
  const classNameEven =
    guess === 'even' ? 'btn btn-outline-success' : 'btn btn-outline-primary';
  const classNameOdd =
    guess === 'odd' ? 'btn btn-outline-success' : 'btn btn-outline-primary';
  return (
    <div>
      <h3>Will it be even or odd?</h3>
      <div>
        <button onClick={setGuessEven} className={classNameEven}>
          Even
        </button>{' '}
        <button onClick={setGuessOdd} className={classNameOdd}>
          Odd
        </button>
      </div>
    </div>
  );
};

export default connect(
  ({ gameState: { guess } }) => ({ guess }),
  { setGuessEven, setGuessOdd }
)(Guess);
