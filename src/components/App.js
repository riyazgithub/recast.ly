import Nav from './Nav';
import React from 'react';
import searchYouTube from '../lib/searchYouTube';
import _ from 'lodash';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';



import YOUTUBE_API_KEY from '../config/youtube';
// pull Nav from this folder

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      videos: [{
        kind: 'youtube#searchResult',
        etag: 'abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY',
        id: {
          kind: 'youtube#video',
          videoId: '4ZAEBxGipoA'
        },
        snippet: {
          publishedAt: '2015-08-02T20:52:58.000Z',
          channelId: 'UCJbPGzawDH1njbqV-D5HqKw',
          title: 'React JS Tutorial for Beginners - 1 - Introduction',
          description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg',
              width: 480,
              height: 360
            }
          },
          channelTitle: 'thenewboston',
          liveBroadcastContent: 'none'
        }
      }]
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    var options = {
      max: 5,
      key: YOUTUBE_API_KEY,
      query: 'react'
    };

    searchYouTube(options, videos => {
      var activeIndex;

      if (this.props.params.videoIndex < videos.length) {
        activeIndex = this.props.params.videoIndex;
      } else {
        activeIndex = 0;
      }

      this.setState({
        videos,
        activeIndex
      });
    });

  }

  handleClick(index) {
    this.setState({
      activeIndex: index
    });
  }

  handleChange(event) {
    var val = event.target.value;

    var options = {
      max: 5,
      key: YOUTUBE_API_KEY,
      query: val
    };

    var debouncedSearch = _.debounce(searchYouTube, 1, { leading: true });

    debouncedSearch(options, videos => {
      this.setState({
        videos
      });
    });
  }

  render() {
    if (this.state.videos.length > 0) {
      return (
        <div>
          <Nav handleChange={this.handleChange} />
          <div className="col-md-7">
            <VideoPlayer video={this.state.videos[this.state.activeIndex]} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleClick={this.handleClick} />
          </div>
        </div>
      );        
    } else {
      console.log('Loading phase');
      return (
        <div> Loading .... </div>
        );
    }
  }
  
}

App.propTypes = {
  // searchYouTube: React.PropTypes.func.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
