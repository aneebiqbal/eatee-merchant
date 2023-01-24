import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Colors} from '../../theme';
import {Icon} from 'react-native-elements';

const propTypes = {};

const defaultProps = {};

const ButtonIconOrText = ({
  label,
  onPress,
  style,
  iconName,
  color = 'white',
  iconSize = 20,
  iconType,
  buttonVariant, // circle or default
  iconDirection = 'left',
  backgroundColor
}) => {
  const iconStyle = label && iconDirection === 'left' ? { marginRight: 16 } : { marginLeft: 16 }
  const icon = (
    iconName && iconType && (
      <Icon name={iconName} type={iconType} color={color} size={iconSize} style={iconStyle}/>
    )
  )

  return (
    <TouchableOpacity onPress={onPress} 
      style={[
        styles.container, 
        style, 
        buttonVariant === 'circle' ? styles.circle : {}, 
        backgroundColor ? { backgroundColor: backgroundColor } : {}]
      }>
      {iconDirection === 'left' && icon}
      {label && <Text style={styles.labelText}>{label}</Text>}
      {iconDirection === 'right' && icon} 
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: Colors.primary,
    padding: 16,
  },
  labelText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  circle: {
    borderRadius: 20,
    padding: 10
  }
});

ButtonIconOrText.propTypes = propTypes;

ButtonIconOrText.defaultProps = defaultProps;

export default ButtonIconOrText;
