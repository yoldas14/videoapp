import React, {memo} from 'react';
import Image from '../../primitives/Image';
import Text from '../../primitives/Text';
import View from '../../primitives/View';

const Card: React.FC<{
  title: string;
  subTitle: string;
  desc: string;
  imagePath: string;
}> = ({title, subTitle, desc, imagePath}) => {
  return (
    <View.Animated
      style={{display: 'flex', flex: 1, marginHorizontal: 3, marginBottom: 10}}>
      <Image path={imagePath} />
      <View.Shadow
        containerViewStyle={{
          display: 'flex',
          flexDirection: 'row',
        }}
        viewStyle={{
          flex: 1,
          paddingVertical: 20,
        }}>
        <Text
          value={title}
          style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}
        />
        <Text
          value={subTitle}
          style={{textAlign: 'center', fontSize: 12, marginTop: 5}}
        />
        <Text
          value={desc}
          style={{textAlign: 'center', fontSize: 8, marginTop: 5}}
        />
      </View.Shadow>
    </View.Animated>
  );
};

export default memo(Card);
