import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { Divider } from "react-native-paper";
import { Colors, Fonts, Images } from "../../../theme";
import {
  ButtonIconOrText,
  FullwidthButton,
  MenuItem,
  Tag,
} from "../../../components/common";
import { Image } from "react-native";
import { useState } from "react";
import { FieldArray, Formik } from "formik";
import { WP } from "../../../utils";

const CreateNewCategoryModal = ({ isVisible, closeModal, navigation }) => {
  const [categoryDetail, setcategoryDetail] = useState([
    { categoryTypeId: 0, description: "" },
  ]);
  const [fields, setFields] = useState([{ label: "", value: "" }]);


  const initialValues = {
    categories: [{ name: "", description: "" }],
  };

  const onSubmit = (values) => {
    debugger;
    console.log(values);
  };

  return (
    <Modal
      isVisible={isVisible}
      coverScreen={true}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      style={{
        margin: 0,
        flex: 1,
        backgroundColor: "white",
        width: WP(55),
        height: "100%",
        alignSelf: "flex-end",
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ margin: 30 }}>
            <Text style={{ fontWeight: "700", fontSize: 24 }}>
              Add Parent Category
            </Text>
          </View>

          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, setFieldValue, handleSubmit, handleChange }) => (
              <View>
                <FieldArray name="categories">
                  {({ push, remove }) => (
                    <>
                      {values.categories.map((category, index) => (
                        <View key={index}>
                          <Divider
                            style={{ marginHorizontal: 30, marginTop: 10 }}
                          />
                          <View
                            style={{
                              marginHorizontal: 40,
                              height: 90,
                              marginTop: 20,
                            }}
                          >
                            <Text style={{ fontWeight: "700", fontSize: 16 }}>
                              Category Name
                            </Text>
                            <TextInput
                              placeholder="Cheese"
                              style={{
                                height: 50,
                                width: 480,
                                borderColor: "lightgray",
                                borderWidth: 1,
                                borderRadius: 6,
                                marginTop: 10,
                                textAlign: "center",
                              }}
                              onChangeText={(text) =>
                                setFieldValue(`categories[${index}].name`, text)
                              }
                              value={category.name}
                            />
                          </View>
                          <View
                            style={{
                              marginHorizontal: 40,
                              height: 90,
                              marginTop: 40,
                            }}
                          >
                            <Text style={{ fontWeight: "700", fontSize: 16 }}>
                              Category Description
                            </Text>
                            <TextInput
                              placeholder="Description"
                              style={{
                                height: 50,
                                width: 480,
                                borderColor: "lightgray",
                                borderWidth: 1,
                                borderRadius: 6,
                                marginTop: 10,
                                textAlign: "center",
                              }}
                              onChangeText={(text) =>
                                setFieldValue(
                                  `categories[${index}].description`,
                                  text
                                )
                              }
                              value={category.description}
                            />
                          </View>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "center",
                            }}
                          >
                            <TouchableOpacity
                              style={{
                                paddingRight: 10,
                                marginTop: 10,
                              }}
                              onPress={() => remove(index)}
                            >
                              <Image source={Images.cross2} style={{}} />
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{
                                paddingRight: 10,
                                marginTop: 10,
                              }}
                              onPress={() =>
                                push({ name: "", description: "" })
                              }
                            >
                              <Image source={Images.plus} style={{}} />
                            </TouchableOpacity>
                          </View>
                        </View>
                      ))}
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "flex-end",
                          alignItems: "center",
                          left: 30,
                          top: 30,
                          marginBottom: 40,
                        }}
                      >
                        <View style={{ flexDirection: "row", padding: 10 }}>
                          <ButtonIconOrText
                            label={"Cancel"}
                            style={{
                              height: 58,
                              backgroundColor: "#FFC018",
                              width: 210,
                              marginHorizontal: 20,
                            }}
                          />
                          <ButtonIconOrText
                            label={"Update"}
                            style={{
                              height: 58,
                              backgroundColor: "#F33810",
                              width: 210,
                            }}
                            onPress={handleSubmit}
                          />
                        </View>
                      </View>
                    </>
                  )}
                </FieldArray>
              </View>
            )}
          </Formik>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default CreateNewCategoryModal;
