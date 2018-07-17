import React from 'react';
import VideoListItem from './video_list_item';
import { map } from 'lodash';

const VideoList = (props) => {
 const videoItems = map(props.videos, video => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
    {videoItems}
    </ul>
  );
};

export default VideoList;