import { View, SafeAreaView, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FullwidthButton } from '../../../components/common';
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
            <Text style={styles.headingText}>{strings.changeYourOrderStatus}</Text>
            <Text style={styles.heading2Text}>{strings.status}</Text>
            <View style={styles.mt20}>
                <SelectDropdown
                    buttonStyle={styles.buttonStyleWidth}
                    data={options}
                    defaultButtonText={strings.changeStatus}
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
            <Text style={styles.preparingMinutesText}>{strings.preparingMinutes}</Text>
            <View style={styles.Textinput}>
                <TextInput
                    value={prepairingMinutes}
                    onChangeText={handlePreparingMinutes}
                    placeholder={strings.preparingMinutes}
                    style={styles.InputStyle}
                />
            </View>
        </View>
         <View style={styles.changeStatusModalContainer}>
            <Text style={styles.preparingMinutesText}>{strings.deliveryMinutes}</Text>
            <View style={styles.Textinput}>
                <TextInput
                    value={deliveryMinutes}
                    onChangeText={handleDeliveryMinutes}
                    placeholder={strings.deliveryMinutes}
                    style={styles.InputStyle}
                />
            </View>
        </View>
        <FullwidthButton
            label={strings.submit}
            onPress={handleSubmitEvent}
        />
       
      </SafeAreaView>
    </Modal>
  )
}

export default OrderChangeModal