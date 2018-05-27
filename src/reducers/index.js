import {combineReducers} from 'redux';
import restaurants from './restaurants';
import currentRestaurant from './currentRestaurant';

const rootReducer = combineReducers({
  restaurants,
  currentRestaurant
});

export default rootReducer;
