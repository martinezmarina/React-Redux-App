import { combineReducers } from 'redux';
import { catReducer as cats } from './catReducer';
import { dogReducer as dogs } from './dogReducer'

export default combineReducers({
  cats, dogs
});
