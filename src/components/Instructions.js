import React from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

const Instructions = ({
  instructionsExpanded,
  collapseInstructions,
  expandInstructions,
}) => {
  return (
    <div>
      {instructionsExpanded ? (
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
            onClick={collapseInstructions}
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
            onClick={expandInstructions}
            className="btn btn-outline-primary"
          >
            <i className="fas fa-angle-double-down" /> Read more
          </button>
        </div>
      )}
    </div>
  );
};

// Expanded form
/**** 
const mapStateToProps = state => ({
  instructionsExpanded: state.instructionsExpanded,
});

const mapDispatchToProps = dispatch => ({
  expandInstructions: () => dispatch(expandInstructions()),
  collapseInstructions: () => dispatch(collapseInstructions()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Instructions);
****/

//Concise form
export default connect(
  state => ({ instructionsExpanded: state.settings.instructionsExpanded }),
  { expandInstructions, collapseInstructions }
)(Instructions);
