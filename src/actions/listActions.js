const fetchRestaurantsWithRedux = () => {
  return (dispatch) => {
    dispatch( {type: "FETCH_REQUEST"});
    return fetchRestaurants().then(([response, json]) => {
      console.log("json");
      console.log(json);
      if(response.status === 200) {
        dispatch({type: "FETCH_SUCCESS", json});
      }
      else {
        dispatch({type: "FETCH_ERROR"});
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


export {fetchRestaurantsWithRedux};