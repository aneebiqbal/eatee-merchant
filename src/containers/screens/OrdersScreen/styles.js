import {StyleSheet} from 'react-native';
import { Colors } from '../../../theme';
import { HP, WP } from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDDDDD',
    height: '100%',
  },
  orderContainer: {
    backgroundColor: '#DDDDDD',
    flex: 1
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchField: {
    margin: 10,
    width: '30%',
    height: '100%',
    borderRadius: 40,
  },
  filterStyle: {
    flexDirection: 'row'
  },
  labelButtonStyle: {
    marginVertical: 28,
    marginHorizontal: 4,
    width: '15%'
  },
  modalStyle: {
    margin: 0,
    flex: 1,
    backgroundColor: 'white',
    width: WP(65),
    height: HP(100),
    alignSelf: 'flex-end'
  },
  ChangeOrderStatusModal: {
    margin: 0,
    flex: 1,
    backgroundColor: 'white',
    width: '50%',
    height: '100%',
    alignSelf: 'flex-end',
    borderRadius: 10
  },
  flex1: {
    flex: 1
  },
  modalContainer: {
    flex: 1,
    paddingHorizontal: 35,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  captionTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
fdrow: {
  flexDirection: 'row',
  height: HP(3),
  marginHorizontal: 10
},
imgStyle: {
  width: 36,
  height: 36,
  marginRight: 16,
},
headerStyle: {
  flexDirection: 'column',
  paddingLeft: 50
},
white: {
  color: 'white'
},
onMyWayButton: {
  height: 58,
  backgroundColor: '#0EBE7E'
},
trakingComponent: {
  flexDirection:'row',
  backgroundColor: Colors.white,
  margin: 16
},
mapViewHeader: {
  flexDirection: 'row',
  marginHorizontal: 16,
  justifyContent: 'space-between'
},
mapView: {
  height: HP(25),
  width: WP(47),
  backgroundColor: 'white',
  padding: 16,
  borderRadius: 8
},
orderStatisticsCard: {
  width: 300,
  paddingVertical: 10,
  borderRadius: 8
},
justifyContentC: {
  justifyContent: 'center'
},
firstTwoBox: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 60,
},
lastTwoBox: {
  flexDirection: 'row',
  justifyContent: 'space-between' ,
  alignItems: 'center',
  margin: 60,
  paddingBottom: '50%'
},
changeStatusModalContainer: {
  paddingHorizontal: 35,
  justifyContent: 'space-between',
  flexDirection: 'column',
  paddingVertical: 20,
  alignItems:'center',
  paddingVertical: 30
},
headingText: {
  fontSize: 22, 
  fontWeight: '600'
},
heading2Text: {
  fontSize: 20, 
  fontWeight: '400', 
  paddingTop: 20
},
mt20 : {
  marginTop: 20
},
buttonStyleWidth: {
  width: WP(20),
},
preparingMinutesText: {
  fontSize: 20, 
  fontWeight: '400', 
  paddingTop: 20
},
Textinput: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: 'gray',
  padding: 10,
  borderRadius: 5,
  margin: 10,
  justifyContent:"center"
},
InputStyle: {
  flex: 1,
  padding: 10,
},
StatusesBar: {
  flexDirection: 'row',
  backgroundColor: '#1A1E22',
  justifyContent: 'center',
  justifyContent: 'space-between',
  width: '100%',
},
primaryColor: {
  color: Colors.primary
},
backgroundColor: {
  backgroundColor: Colors.lightGra
},
margin16: {
  margin: 16
}
});