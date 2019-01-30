import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/settings';
import { cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  };
  render() {
    if (this.props.fetchState === fetchStates.error) {
      return (
        <div>
          <p>Please try reloading the app. An error occurred.</p>
          <p>{this.props.message}</p>
        </div>
      );
    }

    return (
      <div className="container">
        <h2 className="my-5">♡ ♤ Evens or Odds ♢ ♧</h2>
        {this.props.gameStarted ? (
          <div>
            <h3>The game is on!</h3>

            <button
              onClick={this.props.cancelGame}
              className="btn btn-outline-danger"
            >
              <i className="fas fa-stop" /> End Game
            </button>
          </div>
        ) : (
          <div>
            <h3>A new game awaits</h3>

            <button
              onClick={this.startGame}
              className="btn btn-outline-success"
            >
              <i className="fas fa-play" /> Start Game
            </button>
            <hr />
            <Instructions />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const { gameStarted,  } = state.settings;
  // const {fetchState, message} = state.deck;
  const {
    settings: { gameStarted },
    deck: { fetchState, message },
  } = state;

  return {
    gameStarted,
    fetchState,
    message,
  };
};

// const mapDispatchToProps = dispatch => ({
//   startGame: () => dispatch(startGame()),
//   cancelGame: () => dispatch(cancelGame()),
//   fetchNewDeck: () => fetchNewDeck(dispatch),
// });

export default connect(
  mapStateToProps,
  { startGame, cancelGame, fetchNewDeck }
)(App);
