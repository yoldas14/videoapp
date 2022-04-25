import React, {ReactElement, useState, memo} from 'react';
import {GenreModel, VideoModel, SearchValuesModel} from '../../models';
import {View, Text, Card, List} from '../../components';
import {FlatList, ListRenderItem} from 'react-native';

const VideoSection: React.FC<{
  videos: VideoModel[];
  genres: GenreModel[];
  numColumns: number;
}> = ({videos, genres, numColumns}): ReactElement => {
  const renderItem = (listitem: any): ReactElement => {
    const item = listitem?.item;
    return (
      <Card
        title={item.artist}
        subTitle={item.title}
        imagePath={item.image_url}
        desc={
          item.release_year +
          (genres && genres.find((g: GenreModel) => g.id === item.genre_id)
            ? ' • ' +
              genres.find((g: GenreModel) => g.id === item.genre_id)!['name']
            : '')
        }
      />
    );
  };

  return (
    <View style={{zIndex: -1, flex: 1, marginBottom: 20}}>
      <List data={videos} numColumns={numColumns} renderListitem={renderItem} />
    </View>
  );
};

export default React.memo(VideoSection);
