import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/settings';
import { cancelGame } from '../actions/settings';
import Instructions from './Instructions';
class App extends Component {
  render() {
    console.log('this', this.props);
    return (
      <div>
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
            <Instructions />
          </div>
        ) : (
          <div>
            <h3>A new game awaits</h3>

            <button
              onClick={this.props.startGame}
              className="btn btn-outline-success"
            >
              <i className="fas fa-play" /> Start Game
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return { gameStarted: state.gameStarted };
};

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame()),
    cancelGame: () => dispatch(cancelGame()),
  };
};

const componentConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default componentConnector(App);
