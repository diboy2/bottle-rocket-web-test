import React from 'react';
import {connect} from 'react-redux';
import {fetchRestaurantsWithRedux} from '../../actions/listActions';
import RestaurantListItemComponent from './RestaurantListItemComponent';
import DetailComponent from './DetailComponent';

class ListPage extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurantsWithRedux();
  }

  restaurantRow(restaurant, index) {
    return <RestaurantListItemComponent restaurant={restaurant} index={index}/>;
  }

  renderDetailComponent() {
      return <DetailComponent restaurant={this.props.restaurants[0]} />;
  }

  render() {
    return (

      <section>
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-5 is-vertical">
              {this.props.restaurants.map(this.restaurantRow)}
            </div>
            {this.renderDetailComponent()}

          </div>

        </div>
      </section>


    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    restaurants: state.restaurants
  };
}

export default connect(mapStateToProps, {fetchRestaurantsWithRedux})(ListPage); // ListPage automatically gets a dispatch property
