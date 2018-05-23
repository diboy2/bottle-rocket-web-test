import React, {PropTypes} from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import MapMarker from './MapMarker';

class MapComponent extends React.Component {

  renderMapMarker(restaurant, index){
    return <MapMarker latitude = {restaurant.location.lat} longitude = {restaurant.location.lng} key = {index} label = {restaurant.name}/>
  }

  render() {
    var self = this;
   const GoogleMapExample = withGoogleMap(props => (

      <GoogleMap
        defaultCenter = { { lat:32.950787, lng: -96.821118 } }
        defaultZoom = { 13 }
      >
      {self.props.restaurants.map(self.renderMapMarker)}
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample  containerElement={ <div style={{ height: `400px`, width: `400px`,position:`fixed`,bottom: `0`, right: `0` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   )
  };
}

export default MapComponent;
