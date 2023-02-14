import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Colors} from '../../theme';
import { ProgressSteps, ProgressStep, StepIndicator } from 'react-native-progress-steps';
import strings from '../../constants/strings';
import Tag from './Tag';

const Tracking = (orderDetail) => {
  debugger;
  if (orderDetail.orderDetail.orderStatusTypeId < 4) {

  return (
    <View style={styles.container}>
      <ProgressSteps
          progressBarColor={Colors.lightGra} 
          activeStepIconBorderColor={Colors.primary}
          completedProgressBarColor={Colors.lightGra}
          labelColor={Colors.primaryGrayMid}
          activeLabelColor={Colors.black}
          borderWidth={1}
          activeStep={orderDetail?.orderDetail.orderStatusTypeId}
          labelFontSize={10}
          activeLabelFontSize={14}
      >
        <ProgressStep label={strings.pending} removeBtnRow />
        <ProgressStep label={strings.preparing} removeBtnRow />
        <ProgressStep label={orderDetail?.orderDetail.orderTypeId == 0 ? strings.shipping : strings.ready} removeBtnRow/>
        <ProgressStep label={orderDetail?.orderDetail.orderTypeId == 0 ? strings.delivered : strings.pickUp} removeBtnRow/>
      </ProgressSteps>
    </View> 
  )} else{
    return(
      <></>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    flexDirection:'row', 
    width: '100%'
  },
  tagContainer: {
    flex:1, 
    flexDirection:'row', 
    width: '100%',
    alignItems:"center",
    justifyContent:'center'
  }
});

export default Tracking