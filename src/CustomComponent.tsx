import React from 'react';

import {View, Text} from 'react-native';

const CustomComponent = (props: any) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default CustomComponent;
