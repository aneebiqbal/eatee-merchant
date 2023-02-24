import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  FullwidthButton,
  Header,
  InputField,
  Spinner,
} from "../../../components/common";
import { ApplicationStyles, Colors, Images } from "../../../theme";
import { Icon } from "react-native-elements";
import { HP, WP } from "../../../utils";
import { FieldArray, Formik } from "formik";
import SelectDropdown from "react-native-select-dropdown";
import { launchImageLibrary } from "react-native-image-picker";
import { useSelector } from "react-redux";
import { uploadImage } from "../../../components/UpdateNewMenu";
import {
  createItemSuccess,
  createNewItem,
  getCatogeriesByMerchantId,
} from "../../../actions/CreateItemAction";
import { useDispatch } from "react-redux";
import Toast from "react-native-simple-toast";
import strings from "../../../constants/strings";
import { useQuery } from "react-query";
import { Picker } from "@react-native-picker/picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CreateNewMenuScreen = ({navigation}) => {
  const { user } = useSelector(({ AccountState }) => AccountState);
  // const [itemDetail,setItemDetail]=useState([{sizeTypeId:30,price:100}]);
  const [imageUrl, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    itemDetails: [{ price: "", sizeTypeId: "", quantity: "" }],
    description: "",
    name: "",
    foodCatogeryType: "",
    isActive: true,
  };

  const sizeOptions = ["Small", "Medium", "Large"];

  const onSubmit = (values) => {
    debugger;
    values.imageUrl = imageUrl;
    console.log(values);
    createNewItem(values, user.accessToken, setLoading, setError, onSuccess);
  };

  const onSuccess = (body) => {
    debugger;
    Toast.show("Item Created Successfully");
    dispatch(createItemSuccess(body));
  };

  const getImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: "photo",
        quality: 0.75,
        includeBase64: true,
      });
      result.assets &&
        (await uploadImage(result?.assets[0], setLoading, setImage));
      debugger;
      console.log("image data -- ", result);
    } catch (e) {
      console.log("error in selecting image from gallery ", e);
    }
  };

  const categories = useQuery("categories", () =>
    getCatogeriesByMerchantId(user.accessToken, user.merchantId)
  );
  debugger;
  return (
    <SafeAreaView style={styles.flex1}>
      <Header user left />
      <View style={styles.addItemViewStyle}>
        <Text style={styles.addItemText}>{strings.addItem}</Text>
      </View>

      <ScrollView
        style={[ApplicationStyles.shadow, styles.inputFieldContainer]}
      >
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "column",
            alignItems: "flex-start",
            bottom: 10,
          }}
        >
          <View style={styles.profileContainer}>
            <TouchableOpacity
              onPress={async () => {
                await getImage();
              }}
            >
              <ImageBackground
                source={
                  imageUrl !== null && imageUrl !== undefined && imageUrl !== ""
                    ? { uri: imageUrl }
                    : require("../../../assets/images/person.jpg")
                }
                style={styles.profilePic}
              >
                <View
                  style={{
                    position: "absolute",
                    right: -15,
                    bottom: 0,
                    zIndex: 8,
                    borderRadius: 30,
                    backgroundColor: Colors.placeholder,
                    opacity: 0.5,
                    width: 35,
                    height: 35,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    right: -10,
                    bottom: 5,
                    zIndex: 10,
                  }}
                >
                  <Icon name={"camera"} type={"entypo"} color={Colors.black} />
                </View>

                {loading && (
                  <Spinner
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      top: 0,
                    }}
                  />
                )}
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => (
              <View>
                <FieldArray name="itemDetails">
                  {({ push, remove }) => {
                    const addItemDetail = () => {
                      debugger;
                      push({ price: "", sizeTypeId: "", quantity: "" });
                    };
                    return (
                      <View style={{}}>
                        <View style={styles.inputFieldView}>
                          <View style={{ flex: 1 }}>
                            <InputField
                              placeholder="Name"
                              setText={handleChange(`name`)}
                              text={values.name}
                            />
                          </View>
                          {/* {categories?.data.result.length && ( */}
                            <View style={{ flex: 1, marginHorizontal: 10 }}>
                              <Picker
                                selectedValue={values.foodCatogeryType}
                                style={{
                                  width: WP(30),
                                }}
                                onValueChange={(itemValue, itemIndex) => {
                                  debugger;
                                  setFieldValue("foodCatogeryType", itemValue);
                                }}
                              >
                                <Picker.Item
                                  key={0}
                                  label={"Select category"}
                                  value={""}
                                />
                                {categories?.data?.result.map(
                                  (category, index) => (
                                    <Picker.Item
                                      key={category.id}
                                      label={category.name}
                                      value={category.id}
                                    />
                                  )
                                )}
                              </Picker>
                            </View>
                          {/* )} */}
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            marginHorizontal: 20,
                            marginVertical: 20,
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            // right: 40
                          }}
                        >
                          <View style={{ flex: 1, justifyContent: "center" }}>
                            <InputField
                              placeholder="Description"
                              multiline
                              setText={handleChange(`description`)}
                              text={values.description}
                            />
                          </View>
                          <View
                            style={{
                              flex: 1,
                              marginLeft: 10,
                              alignItems: "center",
                            }}
                          >
                            <Text style={{ fontSize: 17, fontWeight: "500" }}>
                              Is Active?
                            </Text>
                            <BouncyCheckbox
                              isChecked={values.isActive}
                              fillColor="#4ECCA3"
                              onPress={() =>
                                setFieldValue("isActive", !values.isActive)
                              }
                              size={35}
                            />
                          </View>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginHorizontal: 1,
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "700",
                              fontSize: 22,
                              marginHorizontal: 10,
                            }}
                          >
                            Item Details
                          </Text>
                        </View>
                        {values.itemDetails.map((item, index) => (
                          <View style={styles.itemDetailContainer} key={index}>
                            <View style={styles.priceContainer}>
                              <View style={{ marginRight: 10, width: WP(15) }}>
                                <InputField
                                  placeholder="Price"
                                  setText={handleChange(
                                    `itemDetails.${index}.price`
                                  )}
                                  text={item.price}
                                />
                              </View>
                            </View>
                            <View style={{ marginRight: 10, width: WP(15) }}>
                              <InputField
                                placeholder="Quantity"
                                setText={handleChange(
                                  `itemDetails.${index}.quantity`
                                )}
                                text={item.quantity}
                              />
                            </View>
                            <View style={styles.sizeContainer}>
                              <SelectDropdown
                                buttonStyle={styles.buttonStyleWidth}
                                data={sizeOptions}
                                defaultButtonText={"Select Size"}
                                defaultValue="Select Size"
                                onSelect={(selectedItem, sizeIndex) => {
                                  debugger;
                                  setFieldValue(
                                    `itemDetails.${index}.sizeTypeId`,
                                    sizeIndex + 1
                                  );
                                }}
                                buttonTextAfterSelection={(
                                  selectedItem,
                                  sizeIndex
                                ) => {
                                  return selectedItem;
                                }}
                                rowTextForSelection={(item, sizeIndex) => {
                                  return item;
                                }}
                              />
                            </View>
                            <TouchableOpacity onPress={() => remove(index)}>
                              <Image
                                source={Images.cross2}
                                style={{
                                  height: 40,
                                  width: 40,
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                        ))}
                        <TouchableOpacity
                          style={styles.addButton}
                          onPress={addItemDetail}
                        >
                          <Image
                            source={Images.plus}
                            style={{
                              height: 40,
                              width: 40,
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                </FieldArray>
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: HP(5),
                    alignItems: "center",
                  }}
                >
                  <FullwidthButton
                    label={"Save Changes"}
                    onPress={handleSubmit}
                    loading={loading}
                    style={{
                      height: HP(5),
                      width: WP(50),
                    }}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 10,
  },
  itemDetailContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    marginHorizontal: 20,
  },
  priceContainer: {
    marginRight: 20,
  },
  sizeContainer: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    width: WP(20),
    height: HP(4),
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 26,
  },
  submitButtonText: {
    alignItems: "center",
  },
  buttonStyleWidth: {
    width: WP(20),
    height: HP(4),
  },
  profileContainer: {
    marginLeft: WP(1),
    margin: 20,
    flexDirection: "row",
  },
  profilePic: {
    height: 120,
    width: 120,
    zIndex: 1,
  },
  flex1: {
    flex: 1,
  },
  addItemViewStyle: {
    margin: 30,
  },
  addItemText: {
    fontWeight: "700",
    fontSize: 24,
  },
  inputFieldContainer: {
    backgroundColor: "#FFFFFF",
    shadowRadius: 5,
    borderRadius: 6,
    marginHorizontal: 20,
    paddingBottom: HP(10),
  },
  inputFieldView: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CreateNewMenuScreen;
