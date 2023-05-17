import React from 'react';
import {View, Text} from 'react-native';

const Demo = ({customStyle = {}}) => {
  console.log('Re render');
  return (
    <View style={customStyle}>
      <Text>This is the component</Text>
    </View>
  );
};

export default React.memo(Demo);
