import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [45.0, 30.0, -5],
        center: [-10, 10],
        scale: 600,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Marker coordinates={[-47.8825, -15.7942]}>
        <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
        <text
          textAnchor="middle"
          y="25"
          style={{ fontFamily: "system-ui", fill: "#FFF" }}
        >
          Guaratinguetá
        </text>
      </Marker>
    </ComposableMap>
  );
};

export default Map;
