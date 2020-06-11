import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchDog } from '../store/actions/dogActions';

const RandomDog = props => {
  useEffect(() => {
    props.fetchDog();
  }, []);


 console.log(props)
  return (
    <div className="doggos">
      <h2>🐶 Dog Images 🐾</h2>
      <button onClick={props.fetchDog}>New Dog</button>
      {props.isFetching && (
        <Loader type="BallTriangle" color="lime" height={100} width={100} />
      )}
      {props.dog && <img src={props.dog} alt="Doggo Picture: Click Again"/>}
      {props.error && <p className="error">{props.error}</p>}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    dog: state.dogs.dog,
    isFetching: state.dogs.isFetching,
    error: state.dogs.error
  };
};

export default connect(
  mapStateToProps,
  { fetchDog }
)(RandomDog);