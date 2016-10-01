import Search from './Search';
import React from 'react';

var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleChange={props.handleChange}/>
    </div>
  </nav>
);

Nav.propTypes = {
  handleChange: React.PropTypes.func.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default Nav;