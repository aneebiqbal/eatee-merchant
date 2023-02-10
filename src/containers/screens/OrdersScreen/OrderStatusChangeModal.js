import { View, SafeAreaView, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FullwidthButton, InputField } from '../../../components/common';
import { Colors } from '../../../theme';
import Modal from "react-native-modal";
import { styles } from './styles';
import SelectDropdown from 'react-native-select-dropdown'
import { HP, WP } from '../../../utils';
import strings from '../../../constants/strings';
import { PostOrderStatus } from '../../../actions/OrderTrackingAction';
import { useDispatch, useSelector } from 'react-redux';

const OrderChangeModal = ({
  isVisible,
  closeModal,
  navigation,
  order
}) => {
    const {
        user: {accessToken},
    } = useSelector(({AccountState}) => AccountState);
      
  console.log(order)
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [prepairingMinutes, setPrepairingMinutes] = useState('');
  const [deliveryMinutes, setDeliveryMinutes] = useState('');
  const [orderStatus, setOrderStatus] = useState(1)

  const options = ["Pending", "Preparing", "Shipping", "Completed", "Cancelled"]
  
  const handlePreparingMinutes = (text) => {
    const reg = /^\d+$/;
    if (reg.test(text)) {
        setPrepairingMinutes(text);
    }
  };

  const handleDeliveryMinutes = (text) => {
    const reg = /^\d+$/;
    if (reg.test(text)) {
        setDeliveryMinutes(text);
    }
  };

  const handleSubmitEvent = () => { 
    debugger; 
    dispatch(
        PostOrderStatus(accessToken,{prepairingMinutes,deliveryMinutes, statusId: orderStatus, orderId: order.id})
    );
    closeModal()
  };

  return (
    <Modal 
      isVisible={isVisible} 
      coverScreen={true} 
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      animationIn='slideInRight'
      animationOut='slideOutRight'
      style={styles.ChangeOrderStatusModal}
    >
      <SafeAreaView style={styles.flex1}>
        <View style={styles.changeStatusModalContainer}>
            <Text style={{fontSize: 22, fontWeight: '600'}}>Change your Order Status</Text>
            <Text style={{fontSize: 20, fontWeight: '400', paddingTop: 20}}>Status:</Text>
            <View style={{marginTop: 20}}>
                <SelectDropdown
                    buttonStyle={{
                    width: WP(20),
                    }}
                    data={options}
                    defaultButtonText='Change Status'
                    defaultValue='Pending'
                    onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index+1)
                    setOrderStatus(index+1)
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
        </View>

        <View style={styles.changeStatusModalContainer}>
            <Text style={{fontSize: 20, fontWeight: '400', paddingTop: 20}}>Preparing Minutes</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'gray',
                padding: 10,
                borderRadius: 5,
                margin: 10,
                justifyContent:"center"
            }}>
                {/* <InputField
                    leftIcon={'clock'}
                    placeholder={'Preparing Minutes'}
                    setText={handleChange}
                    value={searchText}
                /> */}
                <TextInput
                    value={prepairingMinutes}
                    onChangeText={handlePreparingMinutes}
                    placeholder={'Preparing Minutes'}
                    style={{
                        flex: 1,
                        padding: 10,
                    }}
                />
            </View>
        </View>

        <View style={styles.changeStatusModalContainer}>
            <Text style={{fontSize: 20, fontWeight: '400', paddingTop: 20}}>Delivery Minutes</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'gray',
                padding: 10,
                borderRadius: 5,
                margin: 10,
                justifyContent:"center"
            }}>
                {/* <InputField
                    leftIcon={'clock'}
                    placeholder={'Delivery Minutes'}
                    setText={handleChange}
                    value={searchText}
                /> */}
                   <TextInput
                        value={deliveryMinutes}
                        onChangeText={handleDeliveryMinutes}
                        placeholder={'Delivery Minutes'}
                        style={{
                            flex: 1,
                            padding: 10,
                        }}
                    />
            </View>
        </View>

        <View>
            <FullwidthButton
                label={'Submit'}
                onPress={handleSubmitEvent}
            />
        </View>
       
      </SafeAreaView>
    </Modal>
  )
}

export default OrderChangeModal