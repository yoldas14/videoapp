import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import VideoListPage from '../../src/pages/VideoListPage';
import {ErrorUtils} from '../utils';

const App = () => {
  useEffect(() => {
    ErrorUtils.init();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{display: 'flex', flexDirection: 'column', flex: 1}}>
        <VideoListPage />
      </View>
    </SafeAreaView>
  );
};

export default App;
