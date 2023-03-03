import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import {apiKey} from '../config';
import Axios from 'axios';

export const getCurrentLocation = async (dispatch, callback, region = {}) => {
  try {
    let isPermissionGranted = false;
    if (Platform.OS === 'ios') {
      const geoStatus = await Geolocation.requestAuthorization('whenInUse');
      if (geoStatus === 'granted') {
        isPermissionGranted = true;
      }
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'foodleaMerchant',
          message: 'foodleaMerchant App wants access to your location. ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        isPermissionGranted = true;
      }
    }
    if (isPermissionGranted) {
      await Geolocation.getCurrentPosition(
        async position => {
          const {
            coords: {latitude, longitude},
          } = position;
          const locationName = await fetchLocationName(
            {longitude, latitude},
            null,
            null,
          );
          dispatch
            ? dispatch(
                callback({
                  longitude,
                  latitude,
                  label: 'Current Location',
                  addressLine1: locationName,
                  id: 0,
                }),
              )
            : callback({
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                longitude,
                latitude,
              });
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  } catch (err) {
    console.warn(err);
  }
};

export const fetchLocationName = async (
  region,
  setLocation,
  autocompleteRef,
) => {
  await Geocoder.init(apiKey);
  if (region) {
    const resp = await Geocoder.from(region.latitude, region.longitude).then(
      json => {
        if (setLocation && autocompleteRef) {
          setLocation(json.results[0].formatted_address);
          autocompleteRef.current.setAddressText(
            json.results[0].formatted_address,
          );
        }
        return json.results[0].formatted_address;
      },
    );
    return resp;
  }
  return '';
};

// export const timeToReachDestination = async (
// ) => {
//   const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington%2C%20DC&destinations=New%20York%20City%2C%20NY&units=imperial&key=${apiKey}`
//   return Axios
//   .get(url, {
//     headers: {},
//   })
//   .then(response => {
//     console.log(response)
//     return response;
//   })
//   .catch(error => {
//     return error.response;
//   });
// };