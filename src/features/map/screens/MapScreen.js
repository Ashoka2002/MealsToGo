import React, { useContext, useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/locationContext";
import { RestaurantContext } from "../../../services/restaurants/mock/restaurantsContext";
import { MapCalloutComp } from "../components/MapCalloutComp";
import SearchCompMap from "../components/SearchCompMap";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export default function MapScreen({ navigation }) {
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
            longitudeDelta: 0.1,
          }}
        >
          {restaurants.map((res) => (
            <Marker
              key={res.name}
              title={res.name}
              coordinate={{ latitude: res.geometry.location.lat, longitude: res.geometry.location.lng }}
            >
              {/* <Image style={{ height: 30, width: 30 }} source={require("../../../../assets/pin.png")} /> */}
              <Callout onPress={() => navigation.navigate("RestaurantDetail", { item: res })}>
                <MapCalloutComp restaurant={res} />
              </Callout>
            </Marker>
          ))}
        </Map>
      )}
    </>
  );
}
