import React from 'react';
import FastImage, {ImageStyle} from 'react-native-fast-image';

const Image: React.FC<{
  path: string;
  style?: ImageStyle;
}> = ({path, style = {height: 200}}) => {
  return (
    <FastImage
      style={style}
      source={{
        uri: path,
        priority: FastImage.priority.normal,
      }}
    />
  );
};

export default Image;
