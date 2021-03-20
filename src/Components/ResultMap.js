// import "mapbox-gl/dist/mapbox-gl.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

function ResultMap() {
  // const location = {
  //   lat: 23.70731,
  //   lgt: 90.415482,
  // };
  const [viewport, setViewport] = useState({
    width: "52vw",
    height: "90vh",
    latitude: 23.900372,
    longitude: 90.327225,
    zoom: 12,
    // pitch: 30,
  });

  return (
    <div className="map">
      <ReactMapGL
        style={{ position: "fixed" }}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiaHJpZG95LW1hcGJveCIsImEiOiJja21mM294ajMzMjVxMnFvOWUzamFjancwIn0.dghqrHAgIVbKOJAJApVtpw"
        }
        mapStyle={"mapbox://styles/mapbox/streets-v9"}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker
          latitude={23.900372}
          longitude={90.327225}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <LocationOnIcon />
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default ResultMap;
