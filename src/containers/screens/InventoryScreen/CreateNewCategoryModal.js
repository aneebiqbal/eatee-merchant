import { View, SafeAreaView, Text, TextInput, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import { Divider } from 'react-native-paper';
import { Colors, Fonts, Images } from '../../../theme';
import { ButtonIconOrText, FullwidthButton, MenuItem, Tag } from '../../../components/common';
import { Image } from 'react-native';
import { useState } from 'react';
import { Formik } from 'formik';


const CreateNewCategoryModal = ({isVisible, closeModal, navigation}) => {
  const [categoryDetail,setcategoryDetail]=useState([{categoryTypeId:0,description:''}]);
  const [fields, setFields] = useState([{label: '', value: ''}])

  const addCategoryDetaill=() => {
    categoryDetail.push({categoryTypeId:0,description:''});
    setcategoryDetail([...categoryDetail]);
  }
  
  const removeCategoryDetaill=index => {
    categoryDetail.splice(index,1);
    setcategoryDetail([...categoryDetail]);
  }
  const renderCreateNewCategory =() => {
    return categoryDetail?.map((element, index) =>{
      return(
        <View key={index}>
          <View>
              <Divider style={{marginHorizontal: 30, marginTop: 10}}/>
          </View>
  
          <View style={{marginHorizontal: 40, height: 90, marginTop: 20}}>
            <Text style={{fontWeight: '700', fontSize: 16}}>Category Name</Text>
            <TextInput
                placeholder="Cheese"
                style={{height: 50, width: 480, borderColor: 'lightgray', borderWidth: 1, borderRadius: 6, marginTop: 10, textAlign: 'center'}}
                //onChangeText={(text) => console.log(text)}
            />
          </View>
            <View style={{marginHorizontal: 40, height: 90, marginTop: 40}}>
              <Text style={{fontWeight: '700', fontSize: 16}}>Category Description</Text>
              <TextInput
                  placeholder="Description"
                  style={{height: 50, width: 480, borderColor: 'lightgray', borderWidth: 1, borderRadius: 6, marginTop: 10, textAlign: 'center', }}
                  //onChangeText={(text) => console.log(text)}
              />
            </View>
        </View>
      )
    });
  }
  return (
    <Modal 
      isVisible={isVisible} 
      coverScreen={true} 
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      animationIn='slideInRight'
      animationOut='slideOutRight'
      style={{ margin: 0, flex: 1, backgroundColor: 'white', width: '70%', height: '100%', alignSelf: 'flex-end' }}
    >
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={{margin: 30}}>
            <Text style={{fontWeight:"700", fontSize: 24}}>Add Parent Category</Text>
          </View>

          {renderCreateNewCategory()}

          <View style={{flexDirection:'row', justifyContent:"flex-end", marginHorizontal: 30, alignItems:"center", right: 30, top: 20}}>
            <TouchableOpacity style={{right: 10}} onPress={()=>{addCategoryDetaill()}}>
              <Image
                source={Images.plus}
                style={{
                  left: 10,
                  height: 55,
                  width: 55
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {removeCategoryDetaill()}}>
              <Image
                source={Images.cross2}
                style={{
                  left: 15,
                  height: 55,
                  width: 55
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', left: 30 , top: 30, marginBottom: 40}}>
            <View style={{flexDirection: 'row', padding: 10}}>
              <ButtonIconOrText
                label={'Cancel'}
                style={{ height: 58, backgroundColor: '#FFC018', width: 210, marginHorizontal:20 }}
              />
              <ButtonIconOrText 
                  label={'Update'}
                  style={{ height: 58, backgroundColor: '#F33810',width: 210 }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}

export default CreateNewCategoryModal