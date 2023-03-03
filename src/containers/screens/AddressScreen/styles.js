import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {HP, WP} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerBelowHeader: {
    paddingTop: HP(3),
    paddingHorizontal: WP('3'),
    // borderWidth: 2,
    // borderColor: 'green',
  },
  dFlex: {
    flex: 1,
  },
  mapContainer: {
    borderColor: Colors.secGrayLight,
    borderWidth: 1,
    height: HP('30'),
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
  },
  addressTypesContainer: {
    flexDirection: 'row',
    marginTop: HP('2'),
    justifyContent: 'space-between',
  },
  addressTypesBtns: {
    backgroundColor: Colors.lightGray,
    paddingHorizontal: HP('3'),
    paddingVertical: HP('1'),
    borderRadius: 10,
  },
  addressTypesText: {
    color: Colors.white,
  },
  savebtn: {
    position: 'absolute',
    bottom: HP('3'),
    left: 0,
    right: 0,
  },
  autocompleteContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 444,
    padding: 10,
  },
  mapsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -23,
    position: 'absolute',
    top: '48%',
  },
  currentLocationFixed: {
    marginLeft: -24,
    position: 'absolute',
    right: 0,
    top: '15%',
    marginTop: 15,
  },
  marker: {
    height: 50,
    width: 50,
    marginTop: -60,
  },
  loc: {
    height: 30,
    width: 30,
  },
  overlayMessage: {
    top: 0,
    left: 0,
    flex: 1,
    right: 0,
    padding: 4,
    position: 'absolute',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20,
  },
  ph: {
    paddingHorizontal: 20,
  },
});
