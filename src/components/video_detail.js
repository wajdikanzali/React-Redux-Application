import React from 'react';
import Loading from './laoding';

const configLoading = {
  type: 'spin',
  color: 'red',
  height: '2%',
  width: '2%'
};

const VideoDetail = ({video}) => {
  if(!video){
    return <Loading config={configLoading} />;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;