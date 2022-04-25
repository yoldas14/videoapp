import React, {ReactElement} from 'react';
import {StyleProp, Text, TextStyle, ViewStyle} from 'react-native';

const TextComponent: React.FC<{
  value: string;
  style?: StyleProp<TextStyle>;
}> = ({value, style}): ReactElement => {
  return <Text style={style}>{value}</Text>;
};

export default TextComponent;
