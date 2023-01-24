import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ButtonIconOrText, Header } from '../../../components/common'
import { ApplicationStyles, Images } from '../../../theme'
import { Icon } from 'react-native-elements'

const CreateNewMenuScreen = () => {
    const [itemDetail,setItemDetail]=useState([{sizeTypeId:30,price:100}]);

    const addItemDetail=() => {
        itemDetail.push({sizeTypeId:3,price:50});
        setItemDetail([...itemDetail]);
    }

    const removeItemDetail=(index) => {
        debugger
        itemDetail.splice(index,1);
        setItemDetail([...itemDetail]);
    }
  
  const renderItemDetail =()=> {
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    //   });
        return itemDetail?.map((element,index) => {
            debugger;
            return (
                <View style={{flexDirection:"row", marginTop: 15, alignItems:"center"}}>
                    <View style={{height: 90}}>
                        <Text>Price</Text>
                        <TextInput
                            value={element.price}
                            placeholder="€20"
                            style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, borderRadius: 6, marginTop: 10, textAlign: 'center'}}
                            //onChangeText={(text) => console.log(text)}
                        />
                    </View>
                    <View style={{marginHorizontal: 20, height: 90}}>
                        <Text>Size</Text>
                        <TextInput
                            value={element.sizeTypeId}
                            placeholder="XL"
                            style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, borderRadius: 6, marginTop: 10, textAlign: 'center'}}
                            //onChangeText={(text) => console.log(text)}
                        />
                    </View>
                    <TouchableOpacity onPress={()=>{removeItemDetail(index)}}>
                        <Image
                            source={Images.cross2}
                            style={{
                                height: 40,
                                width: 40
                            }}
                        />
                    </TouchableOpacity>
             </View>
            );
        });
  }
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
                <View style={[ApplicationStyles.shadow,{
                    height: 170,
                    width: 230,
                    backgroundColor: 'white',
                    left: 30,

                }]}>
                    <TouchableOpacity style={{height: 25, }}>
                        <Icon name="pencil" type="font-awesome" size={20} color="#0EBE7E" style={{ top: 2 , justifyContent: 'flex-end', flexDirection:'row', right: 10 }} />
                    </TouchableOpacity>
                    <Image
                        source={Images.burger2}
                        style={{
                            height: 170,
                            width: 190,
                            bottom: 10,
                            left: 20,
                            position:'absolute'
                        }}
                    />
                </View>
            </View>
            <View style={{marginHorizontal: 20, bottom: 90, width: 400}}>
               <Text>Description</Text>
               <TextInput
                  multiline={true}
                  numberOfLines={4}
                  placeholder="Food"
                  placeholderStyle={{ top: 0, left: 0, position: 'absolute' }}
                  style={{height: 90, width: 400, borderColor: 'gray', borderWidth: 1, borderRadius: 6, marginTop: 10, textAlign: 'center'}}
                  //onChangeText={(text) => console.log(text)}
               />
            </View>

            <View style={{ bottom: 30, marginHorizontal: 20, flexDirection:'column'}}>
                <View style={{flexDirection:'row',alignItems:"center"}}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 22,
                     }}>Item Details
                    </Text>
                    <TouchableOpacity onPress={()=>{addItemDetail()}}>
                        <Image
                           source={Images.plus}
                           style={{
                              left: 10,
                              height: 30,
                              width: 30
                           }}
                        />
                    </TouchableOpacity>
                    
                </View>
                {renderItemDetail()}  
            </View>

            <View style={{flexDirection:'row', justifyContent: 'flex-start', marginHorizontal: 22}}>
                <ButtonIconOrText
                        label={'Cancel'}
                        style={{
                            height: '100%',
                            width: '20%',
                            marginHorizontal: 5,
                            backgroundColor:'#FFC018',
                        }}
                    />
                    <ButtonIconOrText
                        label={'Save Changes'}
                        style={{
                            height: '100%',
                            width: '20%'
                        }}
                    />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default CreateNewMenuScreen