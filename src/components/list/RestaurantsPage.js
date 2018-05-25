import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurantsWithRedux} from '../../actions/listActions';
import RestaurantListItemComponent from './RestaurantListItemComponent';
import MapComponent from './MapComponent';

class RestaurantsPage extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurantsWithRedux();
  }
  renderMapComponent(restaurants) {
    return <MapComponent restaurants={restaurants} currentRestaurant={this.props.currentRestaurant}/>;
  }
  restaurantRow(restaurant, index) {
    return <RestaurantListItemComponent restaurant={restaurant} index={index}/>;
  }

  render() {
    return (

      <section>

        <div className="">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-12 is-vertical">
              {this.props.restaurants.map(this.restaurantRow)}
            </div>

          </div>
          {this.renderMapComponent(this.props.restaurants)}
        </div>
      </section>


    );
  }
}

RestaurantsPage.defaultProps = {
  restaurants: [],
  currentRestaurant: null
};

function mapStateToProps(state, ownProps) {
  return {
    restaurants: state.restaurants,
    currentRestaurant: state.currentRestaurant
  };
}

export default connect(mapStateToProps, {fetchRestaurantsWithRedux})(RestaurantsPage); // ListPage automatically gets a dispatch property
