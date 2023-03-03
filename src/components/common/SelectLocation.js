import { View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FullwidthButton } from ".";
import { apiKey } from "../../config";
import { Images } from "../../theme";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {
  getCurrentLocation,
  fetchLocationName,
} from "../../services/geolocation";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { styles } from "./styles/selectLocation";
import strings from "../../constants/strings";
navigator.geolocation = require("react-native-geolocation-service");
// TextInput.defaultProps.selectionColor = Colors.primary;

const SelectLocation = ({ navigation }) => {
  const mapView = useRef(null);
  const autocompleteRef = useRef(null);
  const [location, setLocation] = useState("");
  const [region, setRegion] = useState({
    latitude: 60.43897,
    longitude: 31.501607690508443,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    getLocation();
    return () => {};
  }, []);

  const getLocation = useCallback(async () => {
    getCurrentLocation(null, setRegion);
  }, [setRegion]);

  const renderAutocomplete = () => {
    return (
      <View style={styles.autocompleteContainer}>
        <GooglePlacesAutocomplete
          ref={autocompleteRef}
          placeholder={location}
          minLength={2}
          autoFocus={false}
          returnKeyType={"default"}
          fetchDetails={true}
          listViewDisplayed={false}
          enablePoweredByContainer={false}
          placeholderTextColor={"#E6464D"}
          isRowScrollable={true}
          onPress={(data, details = null) => {
            setLocation(details.name);
            setRegion({
              ...region,
              latitude: parseFloat(
                JSON.stringify(details.geometry.location.lat)
              ),
              longitude: parseFloat(
                JSON.stringify(details.geometry.location.lng)
              ),
            });
          }}
          query={{
            key: apiKey,
            language: "en",
            components: "country:pk",
          }}
          styles={{
            textInputContainer: {
              backgroundColor: "#fff",
              borderTopWidth: 0,
              borderBottomWidth: 0,
            },
            container: {
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#E6464D",
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 44,
              color: "#E6464D",
              marginTop: 0,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
            },
            predefinedPlacesDescription: {
              color: "#E6464D",
            },
            description: {},
          }}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.mapsContainer}>
        <View style={styles.dFlex}>
          {renderAutocomplete()}
          <MapView
            ref={mapView}
            provider={mapView.PROVIDER_GOOGLE}
            style={styles.map}
            region={region}
            minZoomLevel={15}
            maxZoomLevel={20}
            onRegionChangeComplete={(selectedRegion) => {
              fetchLocationName(region, setLocation, autocompleteRef);
              setRegion(selectedRegion);
            }}
            showsUserLocation={true}
            loadingEnabled={true}
            showsMyLocationButton={false}
          >
            {/* <Marker
            coordinate={region}
            title={location}
            description={strings.selectLocation}
          /> */}
          </MapView>
          <View style={styles.markerFixed}>
            <Image style={styles.marker} source={Images.marker} />
          </View>
          <TouchableOpacity
            style={styles.currentLocationFixed}
            onPress={getLocation}
          >
            <Image style={styles.loc} source={Images.currentLoc} />
          </TouchableOpacity>
          <FullwidthButton
            onPress={() => {
              navigation.navigate('AddAddressScreen', { location, region });
            }}
            label={"select Location"}
          />
        </View>
    </SafeAreaView>
  );
};
export default SelectLocation;
