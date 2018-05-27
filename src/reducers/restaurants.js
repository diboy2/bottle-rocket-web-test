import {ACTION_TYPES} from "../constants/constants";

export default function restaurants(state = [], action) {
  switch (action.type) {
    case ACTION_TYPES.FETCH_RESTAURANTS_REQUEST:
      return state;
    case ACTION_TYPES.FETCH_RESTAURANTS_SUCCESS:
      return [...state,
        ...action.json.restaurants
      ];
    default:
      return state;
  }
}
