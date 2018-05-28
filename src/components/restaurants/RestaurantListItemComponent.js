import React, {PropTypes} from 'react';
import DetailComponent from './DetailComponent';

class RestaurantListItemComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  renderDetailComponent() {
      return <DetailComponent restaurant={this.props.restaurant} />;
  }
  render() {
    return (
        <div className="tile is-child is-horizontal" key={this.props.index}>
        <div className = "tile is-12 is-horizontal">
          <article className = "tile is-horizontal"><figure className="image"><img src={this.props.restaurant.backgroundImageURL}/></figure></article>
            {this.renderDetailComponent()}
        </div>
        </div>
    );
  }
}

export default RestaurantListItemComponent;

