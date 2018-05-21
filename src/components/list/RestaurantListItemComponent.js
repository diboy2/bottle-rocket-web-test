import React, {PropTypes} from 'react';

class RestaurantListItemComponent extends React.Component {
  render() {
    return (
      <div className="tile" key={this.props.index}><article className="tile is-child"><a className="title is-4" href="#">{this.props.restaurant.name}</a><figure className="image"><img src={this.props.restaurant.backgroundImageURL}/></figure></article></div>
    );

  }
}

export default RestaurantListItemComponent;

