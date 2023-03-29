import React from 'react';
import { Linking, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const MapsView = (order) => {
  
  const openMap = () => {
    const url = `https://maps.apple.com/?q=${order?.order.customerAddress.latitude},${order?.order.customerAddress.longitude}`;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Can't open map URL: ", url);
      }
    });
  };
  return (
    <MapView
        style={styles.container}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: order?.order.customerAddress?.latitude,
          longitude: order?.order.customerAddress?.longitude,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}
        minZoomLevel={16}
        maxZoomLevel={16}
        onPress={openMap}
      >
        
     <Marker
        coordinate={{
          latitude: order?.order.location.latitude.toString(),
          longitude: order?.order.location.longitude.toString()
        }}
        title= {'selectedAddress.label'}
        description={'strings.nisaSultanAddress'}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 9
  },
});
export default MapsView;