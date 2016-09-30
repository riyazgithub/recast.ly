var searchYouTube = (options, callback) => {
  var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet';
  url += `&key=${options.key}`;
  url += `&maxResults=${options.max}`;
  url += `&q=${options.query}`;
  url += '&videoEmbeddable=true&type=video';

  $.ajax({
    url: url,
    success: function(data) {
      callback(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;
