import React from 'react';
import { Marker } from 'react-google-maps';

class MapMarker extends React.Component {
  render() {
     return <Marker
        position = { { lat:this.props.latitude, lng: this.props.longitude} }
        label = {this.props.label}
     />
  }
}

export default MapMarker;
