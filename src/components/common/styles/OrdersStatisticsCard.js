import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {height, highResolutionHeight, width} from '../../../theme/Metrics';
import {HP, WP} from '../../../utils';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
      },
      innerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
      },
      textMainStyle: {
        alignItems:'center',
        justifyContent:'center'
      },
      headingTextStyle : {
          color: Colors.textGray,
          marginLeft: 2
      },
      labelTextStyle: {
        color: Colors.black,
        marginLeft: 2,
        fontSize: 40
      },
      imgStyle: {
        height: 120,
        width: 120,
        position: 'absolute',
        left: -60
      }

});
