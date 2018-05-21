import React, {PropTypes} from 'react';
import MapComponent from './MapComponent';

class DetailComponent extends React.Component {
  renderMapComponent(restaurant) {
    return <MapComponent latitude={this.props.restaurant.location.lat} longitude={this.props.restaurant.location.lng}/>;
  }
  render() {
    return (

      <div className="tile is-parent is-7" >

        <article className="tile is-child">
          {this.renderMapComponent()}
          <div className="content">
            <div className="hero is-primary is-small">
              <div className="hero-body">
                  <div className="title is-5">{this.props.restaurant.name}</div>
                  <div className="subtitle is-5">{this.props.restaurant.category}</div>
              </div>
            </div>

            <ul className="content">
              <p>{this.props.restaurant.location.address}</p>
              <p>{this.props.restaurant.contact.formattedPhone}</p>
              <p>@{this.props.restaurant.contact.twitter}blah</p>
            </ul>
          </div>
        </article>
      </div>
    )
  }
}



export default DetailComponent;
