import React, {memo} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import View from '../../primitives/View';

const List: React.FC<{
  data: any;
  numColumns: number;
  renderListitem: any;
}> = ({data, numColumns, renderListitem}) => {
  return (
    <View style={{zIndex: 1}}>
      <FlatList
        key={numColumns}
        keyExtractor={item => item?.id}
        initialNumToRender={12}
        data={data}
        numColumns={numColumns}
        renderItem={renderListitem}
      />
    </View>
  );
};

export default React.memo(List);
