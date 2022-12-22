import React from "react";
import GoogleMapReact from 'google-map-react';
interface x{
    lat:number;
    lng:number;
    text:any;
}
const AnyReactComponent = ({ text }:x) => <div>{text}</div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 35.69835602,
      lng: 51.35502627
    },
    zoom: 12
  };

  return (
    // Important! Always set the container height explicitly
    <div className="lg:w-[90%] lgmin:w-[35%] lg:h-[200px] lgmin:h-[300px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}