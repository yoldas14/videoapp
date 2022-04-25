import React from 'react';
import {StyleProp, TextInput, View, ViewStyle} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

const TextInputComponent: React.FC<{
  value?: string;
  placeholder?: string;
  onChange?: (val: string) => void;
  style?: StyleProp<ViewStyle>;
}> = ({value, placeholder, onChange, style}) => {
  return (
    <Shadow
      distance={5}
      radius={7}
      containerViewStyle={{
        display: 'flex',
        flexDirection: 'row',
      }}
      viewStyle={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
      }}>
      <View>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          style={{height: 40, paddingHorizontal: 10}}
          autoCorrect={false}
        />
      </View>
    </Shadow>
  );
};

export default TextInputComponent;
