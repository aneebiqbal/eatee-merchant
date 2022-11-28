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
  name,
  color = 'white',
  size = 20,
  type,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {name && type && !label ? (
        <Icon name={name} type={type} color={color} size={size} />
      ) : (
        <Text style={styles.labelText}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: Colors.primary,
    paddingVertical: 20,
  },
  labelText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

ButtonIconOrText.propTypes = propTypes;

ButtonIconOrText.defaultProps = defaultProps;

export default ButtonIconOrText;
