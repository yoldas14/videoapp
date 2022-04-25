import React, {ReactElement, useEffect, useState, useMemo} from 'react';
import {View} from '../../components';
import {
  GenreModel,
  SearchValuesModel,
  VideoListResponse,
  VideoModel,
} from '../../models';
import {VideoService} from '../../services';
import SearchSection from './SearchSection';
import VideoSection from './VideosSection';

let filterValues: SearchValuesModel;

const VideoListPage = (): ReactElement => {
  const [videoList, setVideoList] = useState<VideoModel[]>([]);
  const [filteredVideoList, setFilteredVideoList] = useState<VideoModel[]>([]);
  const [genreList, setGenreList] = useState<GenreModel[]>([]);
  const [yearList, setYearList] = useState<number[]>([]);
  const [colNumber, setColNumber] = useState(1);
  const [valueState, setValueState] = useState(true);

  useEffect(() => {
    VideoService.fetchVideos().then((result: VideoListResponse) => {
      if (result) {
        setGenreList(result.genres);
        setVideoList(result.videos);
        setFilteredVideoList(result.videos);

        setYearList(
          [...new Set(result.videos.map(item => item.release_year))].sort(
            (a, b) => b - a,
          ),
        );
      }
    });
  }, []);

  useEffect(() => {
    if (filterValues) {
      setFilteredVideoList(
        videoList.filter(
          video =>
            String(video.title + video.artist)
              .toLowerCase()
              .includes(filterValues.title.toLowerCase()) &&
            (filterValues.release_year.length === 0 ||
              filterValues.release_year.indexOf(video.release_year) > -1) &&
            (filterValues.genre_id.length === 0 ||
              filterValues.genre_id.indexOf(video.genre_id) > -1),
        ),
      );
    }
  }, [valueState]);

  return (
    <View style={{margin: 3, flex: 1}}>
      <SearchSection
        onChange={(values: SearchValuesModel) => {
          filterValues = {...values};
          setValueState(!valueState);
        }}
        genreList={genreList}
        yearList={yearList}
        setColNumber={setColNumber}
        numColumns={colNumber}
      />
      <VideoSection
        videos={filteredVideoList}
        genres={genreList}
        numColumns={colNumber}
      />
    </View>
  );
};

export default VideoListPage;
