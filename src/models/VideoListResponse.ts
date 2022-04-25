import GenreModel from './GenreModel';
import VideoModel from './VideoModel';

export default interface VideoListResponse {
  genres: GenreModel[];
  videos: VideoModel[];
}
