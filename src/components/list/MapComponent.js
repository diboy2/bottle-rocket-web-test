import React, {PropTypes} from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class MapComponent extends React.Component {


  render() {
   const GoogleMapExample = withGoogleMap(props => (

      <GoogleMap
        defaultCenter = { { lat:4, lng: 4 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample props={this.props} containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   )
  };
}

export default MapComponent;
