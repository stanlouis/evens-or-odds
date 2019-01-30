import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame } from '../actions/settings';
import { cancelGame } from '../actions/settings';
class App extends Component {
  cancelGame = () => {
    return this.props.dispatch(cancelGame());
  };
  startGame = () => {
    return this.props.dispatch(startGame());
  };

  render() {
    console.log('this', this.props);
    return (
      <div>
        <h2 className="my-5">♡ ♤ Evens or Odds ♢ ♧</h2>
        {this.props.gameStarted ? (
          <div>
            <h3>The game is on!</h3>

            <button
              onClick={this.cancelGame}
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

const componentConnector = connect(mapStateToProps);
export default componentConnector(App);
