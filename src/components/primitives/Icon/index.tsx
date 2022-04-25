import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {SvgXml} from 'react-native-svg';

const Icon: React.FC<{
  svgpath: string;
  text?: string;
  onClick?: () => void;
  style?: ViewStyle;
  height?: number;
}> = ({svgpath, onClick, style, text, height = 16}) => {
  return (
    <TouchableOpacity onPress={onClick} style={style}>
      <SvgXml height={height} xml={svgpath} />
      {text && <Text>{text}</Text>}
    </TouchableOpacity>
  );
};

export default Icon;
