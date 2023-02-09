import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import {HP, WP} from '../../../utils';

export const styles = StyleSheet.create({
    container: {
        margin: 20,
        paddingHorizontal: 28,
        borderRadius: 9
    },
    childContainer: {
        paddingVertical: 24,
        borderBottomColor: Colors.blackCoral,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightGra,
    },
    orderIdStyles: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    pr10: {
        paddingRight: 10
    },
    fdRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardStyle: {
        paddingVertical: 28,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    CardTextStyle: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgStyle: {
        width: WP(6),
        height: HP(4),
        marginRight: 16,
        borderRadius: 50
    },
    
});
