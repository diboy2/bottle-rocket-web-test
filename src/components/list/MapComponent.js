import React, {PropTypes} from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer';
import MapMarker from './MapMarker';

class MapComponent extends React.Component {

  renderMapMarker(restaurant, index){
    return <MapMarker latitude = {restaurant.location.lat} longitude = {restaurant.location.lng} key = {index} label = {restaurant.name}/>
  }
  setCenterAndZoom() {
    const bounds = new window.google.maps.LatLngBounds();
    this.props.restaurants.forEach(restaurant => bounds.extend(new window.google.maps.LatLng(restaurant.location.lat, restaurant.location.lng)));
    this.map.fitBounds(bounds);

  }
  render() {
    var self = this;
   const GoogleMapExample = withGoogleMap(props => (

      <GoogleMap
        ref={(ref) => { self.map = ref; }}
        defaultZoom={15}
        defaultCenter={{ lat: 13.727286, lng: 100.568995 }}
        onTilesLoaded={() => self.setCenterAndZoom()}
      >

        {self.props.restaurants.map(self.renderMapMarker)}

      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample  containerElement={ <div style={{ height: `500px`, width: `500px`,position:`fixed`,bottom: `0`, right: `0` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   )
  };
}

export default MapComponent;
