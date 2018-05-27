import {ACTION_TYPES} from "../constants/constants";

export default function currentRestaurant(state = {}, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_RESTAURANT:
      return Object.assign({}, state, action.restaurant);
    default:
      return state;
  }
}

