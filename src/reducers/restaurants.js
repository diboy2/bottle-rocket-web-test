export default function restaurants(state = [], action)  {
  switch(action.type) {
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS":
      return [...state,
        ...action.json.restaurants
      ];
    default:
      return state;
  }
}
