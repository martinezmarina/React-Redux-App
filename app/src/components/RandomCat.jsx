import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchCat } from '../store/actions/catActions';

const RandomCat = props => {
  useEffect(() => {
    props.fetchCat();
  }, []);


 console.log(props)
  return (
    <div className="kitties">
      <h2>😺 Cat Images 🐾</h2>
      <button onClick={props.fetchCat}>New Cat</button>
      {props.isFetching && (
        <Loader type="BallTriangle" color="lime" height={100} width={100} />
      )}
      {props.cat && <img src={props.cat} alt="Kitty Picture: Click Again"/>}
      {props.error && <p className="error">{props.error}</p>}
      </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    cat: state.cats.cat,
    isFetching: state.cats.isFetching,
    error: state.cats.error
  };
};

export default connect(
  mapStateToProps,
  { fetchCat }
)(RandomCat);