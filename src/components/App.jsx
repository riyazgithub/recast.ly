class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  handleClick(index) {
    this.setState({
      activeIndex: index
    });
  }  

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={exampleVideoData[this.state.activeIndex]} />
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} handleClick={this.handleClick} />
        </div>
      </div>
    );  
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
