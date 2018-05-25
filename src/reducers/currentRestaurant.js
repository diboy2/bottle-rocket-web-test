export default function currentRestaurant(state = {}, action) {
  switch (action.type) {
    case "GET_RESTAURANT":
      return Object.assign({}, state, action.restaurant);
    default:
      return state;
  }
}

