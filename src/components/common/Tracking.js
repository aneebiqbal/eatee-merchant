import { View, Text } from 'react-native'
import React from 'react'
import {Colors} from '../../theme';
import { ProgressSteps, ProgressStep, StepIndicator } from 'react-native-progress-steps';


const Tracking = () => {
  const getStepNumber = () => {
    switch ('status') {
      case "Order Created":
        return 1
      case "Payment Success":
        return 2;
      case "On Delivery":
        return 3;
      case "Delivered":
        return 4;
    }
  }

  return (
    <View style={{flex:1, flexDirection:'row', width: '100%'}}>
      <ProgressSteps 
          progressBarColor={Colors.lightGra} 
          activeStepIconBorderColor={Colors.primary}
          completedProgressBarColor={Colors.lightGra}
          labelColor={Colors.primaryGrayMid}
          activeLabelColor={Colors.black}
          borderWidth={1}
          activeStep={getStepNumber()}
          labelFontSize={14}
          activeStepFontSize={14}
          completedStepFontSize={14}
      >
        <ProgressStep label="Order Created" removeBtnRow />
        <ProgressStep label="Payment Success" removeBtnRow />
        <ProgressStep label="On Delivery" removeBtnRow />
        <ProgressStep label="Order Delivered" removeBtnRow />
    </ProgressSteps>
  </View>
  )
}

export default Tracking