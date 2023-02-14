import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ButtonIconOrText, Header, Spinner } from '../../../components/common'
import { ApplicationStyles, Colors, Images } from '../../../theme'
import { Icon } from 'react-native-elements'
import { HP, WP } from '../../../utils'
import { FieldArray, Formik } from 'formik';
import SelectDropdown from 'react-native-select-dropdown'
import {launchImageLibrary} from 'react-native-image-picker';
import { useSelector } from 'react-redux'
import { uploadImage } from '../../../components/UpdateNewMenu'

const CreateNewMenuScreen = () => {
  const {user} = useSelector(({AccountState}) => AccountState);
  console.log(user)
    const [itemDetail,setItemDetail]=useState([{sizeTypeId:30,price:100}]);
    const [image, setImage] = useState(
        user.imageUrl ? user.imageUrl : '../../../assets/images/burger1.jpg',
    );
    const [loading, setLoading] = useState(false);
    const initialValues = {
        itemDetail: [{ price: '', sizeTypeId: '' }],
    };
    const sizeOptions = ['Small', 'Medium', 'Large'];

    const onSubmit = (values) => {
        console.log(values);
    };

    const getImage = async () => {
        debugger;
        try {
          const result = await launchImageLibrary({
            mediaType: 'photo',
            quality: 0.75,
            includeBase64: true,
          });
          result.assets &&
            (await uploadImage(result?.assets[0], setLoading, setImage));
          console.log('image data -- ', result);
        } catch (e) {
          console.log('error in selecting image from gallery ', e);
        }
      };

    return (
    <SafeAreaView style={{flexDirection:'column',}}>
      <Header
            user
            left
        />
        <View style={{margin:30, flexDirection:'column', alignItems:'flex-start'}}>
            <Text style={{fontWeight: '700', fontSize: 24}}>Add Item</Text>
        </View>

        <View
            style={[ApplicationStyles.shadow,{
                backgroundColor: '#FFFFFF',
                shadowRadius: 5,
                borderRadius: 6,
                marginHorizontal: 20,
                paddingBottom: 30
            }]}
        >
            <View style={{flexDirection:"row", margin: 20}}>
                <View style={{height: 90}}>
                    <Text>Item Name</Text>
                    <TextInput
                        placeholder="Food"
                        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, borderRadius: 6, marginTop: 10, textAlign: 'center'}}
                        //onChangeText={(text) => console.log(text)}
                    />
                </View>
                <View style={{marginHorizontal: 20, height: 90}}>
                    <Text>Category</Text>
                    <TextInput
                        placeholder="Aneeb Iqbal"
                        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, borderRadius: 6, marginTop: 10, textAlign: 'center'}}
                        //onChangeText={(text) => console.log(text)}
                    />
                </View>
                {/* <View style={[ApplicationStyles.shadow,{
                    height: 170,
                    width: 230,
                    backgroundColor: 'white',
                    left: 30
                }]}>
                    <TouchableOpacity style={{height: 25, }}>
                        <Icon name="pencil" type="font-awesome" size={20} color="#0EBE7E" style={{ top: 2 , justifyContent: 'flex-end', flexDirection:'row', right: 10 }} />
                    </TouchableOpacity>
                    <Image
                        source={Images.burger2}
                        style={{
                            height: HP(15),
                            width: WP(23),
                            bottom: 10,
                            left: 25,
                            position:'absolute'
                        }}
                    />
                </View> */}
        <View style={styles.profileContainer}>
          <TouchableOpacity
            onPress={async () => {
              await getImage();
            }}>
            <ImageBackground
              source={
                user.imageUrl !== null &&
                user.imageUrl !== undefined &&
                user.imageUrl !== ''
                  ? {uri: image}
                  : require('../../../assets/images/person.jpg')
              }
              style={styles.profilePic}>
              <View
                style={{
                  position: 'absolute',
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
                  position: 'absolute',
                  right: -10,
                  bottom: 5,
                  zIndex: 10,
                }}>
                <Icon name={'camera'} type={'entypo'} color={Colors.black} />
              </View>

              {loading && (
                <Spinner
                  style={{
                    position: 'absolute',
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

            </View>
            <View style={{marginHorizontal: 20, bottom: 90, width: '52%'}}>
               <Text>Description</Text>
               <TextInput
                  multiline={true}
                  numberOfLines={4}
                  placeholder="Food"
                  placeholderStyle={{ top: 0, left: 0, position: 'absolute' }}
                  style={{height: 90, width: '100%', borderColor: 'gray', borderWidth: 1, borderRadius: 6, marginTop: 10, textAlign: 'center'}}
                  //onChangeText={(text) => console.log(text)}
               />
            </View>

            <View style={{ marginHorizontal: 20, flexDirection:'column', alignItems: 'flex-start', bottom : 50}}>
                <View style={{flexDirection:'row',alignItems:"center", marginBottom: 10}}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 22,
                     }}>Item Details
                    </Text>
                </View>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                <View>
                    <FieldArray name="itemDetail">
                    {({ push, remove }) => {
                        const addItemDetail = () => {
                        push({ price: '', sizeTypeId: '' });
                        };
                        return (
                        <View style={styles.formContainer}>
                            {values.itemDetail.map((item, index) => (
                            <View style={styles.itemDetailContainer} key={index}>
                                <View style={styles.priceContainer}>
                                <Text style={styles.label}>Price</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="€20"
                                    onChangeText={handleChange(`itemDetail.${index}.price`)}
                                    onBlur={handleBlur(`itemDetail.${index}.price`)}
                                    value={item.price}
                                />
                                </View>
                                <View style={styles.sizeContainer}>
                                <Text style={styles.label}>Size</Text>
                                <SelectDropdown
                                    buttonStyle={styles.buttonStyleWidth}
                                    data={sizeOptions}
                                    defaultButtonText={'Select Size'}
                                    defaultValue='Small'
                                    onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index+1)
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                    }}
                                />
                                </View>
                                <TouchableOpacity style={styles.removeButton} onPress={() => remove(index)}>
                                <Image
                                    source={Images.cross2}
                                    style={{
                                        height: 40,
                                        width: 40
                                    }}
                                />
                                </TouchableOpacity>
                            </View>
                            ))}
                            <TouchableOpacity style={styles.addButton} onPress={addItemDetail}>
                            <Image
                                    source={Images.plus}
                                    style={{
                                        height: 40,
                                        width: 40
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        );
                    }}
                    </FieldArray>
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    </TouchableOpacity>
                </View>
            )}
      </Formik> 
    </View>

            <View style={{flexDirection:'row', justifyContent: 'flex-start', marginHorizontal: 22}}>
                <ButtonIconOrText
                    label={'Cancel'}
                    style={{
                        height: '100%',
                        width: '25%',
                        marginHorizontal: 5,
                        backgroundColor:'#FFC018',
                    }}
                    />
                    <ButtonIconOrText
                        label={'Save Changes'}
                        style={{
                            height: '100%',
                            width: '25%'
                        }}
                    />
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    formContainer: {
      flexDirection: 'column',
      flexWrap: 'wrap',
      marginBottom: 10,
    },
    itemDetailContainer: {
      flexDirection: 'row',
      marginRight: 10,
      marginBottom: 10,
      alignItems: 'center',
    },
    priceContainer: {
      marginRight: 10,
    },
    sizeContainer: {
      marginRight: 10,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 5,
      width: WP(20),
      height: HP(4),
    },
    addButton: {
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    addButtonText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      lineHeight: 26,
    },
    removeButton: {
      flexDirection: 'column',
      alignItems:"center",
      justifyContent: 'center',
      marginTop: 15
    },
    submitButtonText: {
        alignItems:'center',
    },
    buttonStyleWidth: {
        width: WP(20),
        height: HP(4)
    },
    profileContainer: {
      marginVertical: WP('4'),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profilePic: {
      height: 120,
      width: 120,
      zIndex: 1,
    },
});
  
  
  

export default CreateNewMenuScreen