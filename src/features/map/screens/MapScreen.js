import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components";
import SearchCompMap from "../components/SearchCompMap";
import { RestaurantContext } from "../../../services/restaurants/mock/restaurantsContext";
import { LocationContext } from "../../../services/location/locationContext";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export default function MapScreen() {
  const { restaurants } = useContext(RestaurantContext);
  const { location } = useContext(LocationContext);

  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport?.northeast?.lat;
    const southwestLat = viewport?.southwest?.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <SearchCompMap />
      {lat && lng && (
        <Map
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.2,
          }}
        >
          {restaurants.map((res) => (
            <Marker
              key={res.name}
              title={res.name}
              coordinate={{ latitude: res.geometry.location.lat, longitude: res.geometry.location.lng }}
            ></Marker>
          ))}
        </Map>
      )}
    </>
  );
}
