import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/carActions';

const AddedFeature = props => {
  const removeFeature = e => {
    e.preventDefault();
    props.removeFeature(props.feature);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={ removeFeature } className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null,
  { removeFeature }
)(AddedFeature);
