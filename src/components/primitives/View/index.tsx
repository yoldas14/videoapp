import React from 'react';
import {ScrollView, StyleProp, View, ViewStyle} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Shadow, ShadowProps} from 'react-native-shadow-2';

interface ViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  animation?: string;
}

const ViewComponent = ({children, style}: ViewProps) => {
  return <View style={style}>{children}</View>;
};

ViewComponent.Animated = ({
  children,
  style,
  animation = 'zoomIn',
}: ViewProps) => {
  return (
    <Animatable.View style={style} animation={animation}>
      {children}
    </Animatable.View>
  );
};

ViewComponent.Scroll = ({children, style}: ViewProps) => {
  return <ScrollView style={style}>{children}</ScrollView>;
};

ViewComponent.Shadow = ({
  children,
  containerViewStyle,
  viewStyle,
}: ShadowProps) => {
  return (
    <Shadow
      viewStyle={viewStyle}
      containerViewStyle={containerViewStyle}
      distance={1}
      radius={2}>
      <View>{children}</View>
    </Shadow>
  );
};

export default ViewComponent;
