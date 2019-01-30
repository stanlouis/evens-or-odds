import React from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

const Instructions = props => {
  return (
    <div>
      {props.instructionsExpanded ? (
        <div>
          <h3>Instructions</h3>
          <p>Welcome to evens or odds. The game goes like this</p>
          <p>
            The deck is shuffled. Then choose: will the next card be even or
            odd?
          </p>
          <p>Make a choice on every draw, and see how many you get right!</p>
          <p>(Face cards don't count)</p>

          <button
            onClick={props.collapseInstructions}
            className="btn btn-outline-primary"
          >
            <i className="fas fa-angle-double-up" /> Show less
          </button>
        </div>
      ) : (
        <div>
          <h3>Instructions</h3>
          <p>Welcome to evens or odds. The game goes like this...</p>
          <button
            onClick={props.expandInstructions}
            className="btn btn-outline-primary"
          >
            <i className="fas fa-angle-double-down" /> Read more
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { instructionsExpanded: state.instructionsExpanded };
};

const mapDispatchToProps = dispatch => {
  return {
    expandInstructions: () => dispatch(expandInstructions()),
    collapseInstructions: () => dispatch(collapseInstructions()),
  };
};

const componentConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default componentConnector(Instructions);
