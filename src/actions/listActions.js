import {ACTION_TYPES} from "../constants/constants";

const fetchRestaurantsWithRedux = () => {
  return (dispatch) => {
    dispatch( {type: ACTION_TYPES.FETCH_RESTAURANTS_REQUEST});
    return fetchRestaurants().then(([response, json]) => {
      if(response.status === 200) {
        dispatch({type: ACTION_TYPES.FETCH_RESTAURANTS_SUCCESS, json});
      }
      else {
        dispatch({type: ACTION_TYPES.FETCH_RESTAURANTS_ERROR});
      }
    });
  }
};

const fetchRestaurants = () => {
  const URL = "https://s3.amazonaws.com/br-codingexams/restaurants.json";
  return fetch(URL, { method: 'GET'})
    .then(response => {
        return Promise.all([response, response.json()]);
      });
};

const setCurrentRestaurant = (restaurant) => {
  return (dispatch) => {
    dispatch({type: ACTION_TYPES.GET_RESTAURANT, restaurant});
  };
};


export {fetchRestaurantsWithRedux, setCurrentRestaurant};
