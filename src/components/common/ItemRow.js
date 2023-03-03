import React from 'react';
import {View, Text} from 'react-native';

export const ItemRow = ({left, right}) => {
  console.log(left, right);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        {left}
        <View
          style={{
            paddingLeft: 30,
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          {right}
        </View>
      </View>
    </>
  );
};
