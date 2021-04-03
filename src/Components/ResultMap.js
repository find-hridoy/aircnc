// import "mapbox-gl/dist/mapbox-gl.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

function ResultMap({ lat, lng }) {
  const [viewport, setViewport] = useState({
    width: "52vw",
    height: "90vh",
    latitude: 24.16667,
    longitude: 90.41667,
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
          latitude={24.16667}
          longitude={90.41667}
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
