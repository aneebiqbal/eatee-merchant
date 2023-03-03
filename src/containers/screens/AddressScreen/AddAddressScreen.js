import { View, Text, TextInput, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresses } from "../../../actions";
import { ApplicationStyles, Colors } from "../../../theme";
import {
  FullwidthButton,
  Header,
  InputField,
} from "../../../components/common";
import strings from "../../../constants/strings";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { createAddress } from "../../../services/address";
import { styles } from "./styles";

import { Formik } from "formik";
import { HP, WP } from "../../../utils";

const AddAddressScreen = ({
  navigation,
  route: {
    params: { location, region },
  },
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const {
    user: { accessToken },
  } = useSelector(({ AccountState }) => AccountState);
  const onSuccess = () => {
    debugger;
    dispatch(fetchAddresses(accessToken));
    navigation.pop(2);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header left title={strings.addAdress} navigation={navigation} />
      <ScrollView style={styles.containerBelowHeader}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.mapContainer}
          initialRegion={region}
          minZoomLevel={15}
          maxZoomLevel={20}
        >
          <Marker
            coordinate={region}
            title={location}
            description={strings.selectLocation}
          />
        </MapView>
        <Formik
          validateOnChange={false}
          initialValues={{
            label: "",
            address: location,
            street: "",
            floor: "",
            notes: "",
          }}
          onSubmit={(values) => {
            debugger;
            createAddress(
              values,
              region,
              accessToken,
              setLoading,
              setError,
              onSuccess
            );
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <View style={ApplicationStyles.p20}>
                <InputField
                  multiline
                  numberOfLines={3}
                  text={values.address}
                  isDisabled={true}
                  setText={handleChange("address")}
                  error={errors.label && errors.label}
                />
                <InputField
                  placeholder={strings.street}
                  text={values.street}
                  setText={handleChange("street")}
                  error={errors.street && errors.street}
                />
                <InputField
                  placeholder={strings.floorBuilding}
                  text={values.floor}
                  setText={handleChange("floor")}
                  error={errors.floor && errors.floor}
                />
              </View>
              <View style={styles.ph}>
                <Text style={styles.errorStyle}>{error}</Text>
              </View>
              <View style={[{ marginBottom: WP("5") }]}>
                <FullwidthButton
                  notApplyMargin={true}
                  label={strings.saveAddress}
                  onPress={handleSubmit}
                  style={{ marginTop: HP("5") }}
                  loading={loading}
                />
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddAddressScreen;
