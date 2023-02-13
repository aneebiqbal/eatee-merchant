import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Colors} from '../../theme';
import { ProgressSteps, ProgressStep, StepIndicator } from 'react-native-progress-steps';
import strings from '../../constants/strings';

const Tracking = (orderDetail) => {
  const getStepNumber = () => {
    switch (orderDetail?.orderDetail.orderTypeId) {
      case 0:
          switch (orderDetail?.orderDetail.orderStatus) {
            case "Pending":
              return 1
            case "Preparing":
              return 2;
            case "Shipping":
              return 3;
            case "Delivered":
              return 4;
        } 
      case 1:
        switch (orderDetail?.orderDetail.orderStatus) {
          case "Pending":
            return 1
          case "Preparing":
            return 2;
          case "Shipping":
            return 3;
          case "Delivered":
            return 4;
        } 
        break;
      }
  }

  return (
    <View style={styles.container}>
      <ProgressSteps 
          progressBarColor={Colors.lightGra} 
          activeStepIconBorderColor={Colors.primary}
          completedProgressBarColor={Colors.lightGra}
          labelColor={Colors.primaryGrayMid}
          activeLabelColor={Colors.black}
          borderWidth={1}
          activeStep={getStepNumber()}
          labelFontSize={10}
          activeLabelFontSize={14}
      >
        <ProgressStep label={strings.pending} removeBtnRow />
        <ProgressStep label={strings.preparing} removeBtnRow />
        <ProgressStep label={orderDetail?.orderDetail.orderTypeId == 0 ? strings.shipping : strings.ready} removeBtnRow/>
        <ProgressStep label={orderDetail?.orderDetail.orderTypeId == 0 ? strings.delivered : strings.pickUp} removeBtnRow/>
      </ProgressSteps>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    flexDirection:'row', 
    width: '100%'
  }
});

export default Tracking