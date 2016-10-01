import React from 'react';
import VideoListEntry from './VideoListEntry';

var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map( (video, index) => (
      <VideoListEntry video={video} handleClick={props.handleClick.bind(this, index)} key={video.id.videoId} />
    ))}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.

export default VideoList;