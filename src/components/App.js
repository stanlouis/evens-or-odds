import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/settings';
import { cancelGame } from '../actions/settings';
import { fetchDeckResult } from '../actions/deck';
import Instructions from './Instructions';
class App extends Component {
  startGame = () => {
    this.props.startGame();

    const BASEURL = 'https://deck-of-cards-api-wrapper.appspot.com';
    fetch(`${BASEURL}/deck/new/shuffle`)
      .then(response => response.json())
      .then(json => this.props.fetchDeckResult(json));
  };
  render() {
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

const mapStateToProps = state => ({
  gameStarted: state.gameStarted,
});

const mapDispatchToProps = dispatch => ({
  startGame: () => dispatch(startGame()),
  cancelGame: () => dispatch(cancelGame()),
  fetchDeckResult: deckJson => dispatch(fetchDeckResult(deckJson)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
