import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/blogs/new">Create Blog</Link></li>
        </ul>
      </div>
    )
  }
}

export default Nav
