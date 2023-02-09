import {StyleSheet} from 'react-native';
import { Colors } from '../../../theme';

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
    margin: 20,
    width: '30%',
    height: '80%',
    borderRadius: 40
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
    width: '65%',
    height: '100%',
    alignSelf: 'flex-end'
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
  height: '100%',
  width: '49%',
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
}

});