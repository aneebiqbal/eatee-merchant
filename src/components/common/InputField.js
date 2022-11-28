import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from '../../theme';
import {HP} from '../../utils';

const InputField = ({
  leftIcon,
  rightIcon,
  placeholder,
  multiline,
  numberOfLines = 1,
  text,
  setText,
  error,
  secureTextEntry,
  heading,
  headingStyle,
  isDisabled,
}) => {
  // const [text, setText] = React.useState('');
  const left = leftIcon ? (
    <TextInput.Icon name={leftIcon} color={Colors.primary} />
  ) : null;
  const right = rightIcon ? (
    <TextInput.Icon name={rightIcon} color={Colors.primary} />
  ) : null;
  return (
    <>
      {heading && <Text style={headingStyle}>{heading}</Text>}
      <TextInput
        mode="flat"
        disabled={isDisabled}
        underlineColor={Colors.placeholder}
        activeUnderlineColor={Colors.primary}
        placeholderTextColor={Colors.placeholder}
        style={[styles.inputStyle, isDisabled && styles.disabled]}
        placeholder={placeholder}
        borderColor={Colors.primary}
        value={text}
        left={left}
        right={right}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={changed => setText(changed)}
      />
      {error && <Text style={styles.errorStyle}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: HP('1'),
    backgroundColor: '#fff',
    color: Colors.placeholder,
  },
  disabled: {
    borderBottomColor: Colors.placeholder,
    borderBottomWidth: 1,
  },
  errorStyle: {
    color: Colors.primary,
  },
});

export default InputField;
