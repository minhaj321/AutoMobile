import React from 'react'
import GoogleMapReact from 'google-map-react';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';

const AnyReactComponent = ({ text }) => (
    <LocationOnSharpIcon style={{color:'red',fontSize:30}}/>
);

const Map = () => {
  return (
<div style={{height:500}}>
    <div style={{ height: '100%', width: '100%' }}>
    <GoogleMapReact
    //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
      defaultCenter={{
        lat: 59.955413,
        lng: 30.337844
      }}
      defaultZoom={11}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My asdas"
      />
    </GoogleMapReact>
  </div>
  </div>
  )
}

export default Map