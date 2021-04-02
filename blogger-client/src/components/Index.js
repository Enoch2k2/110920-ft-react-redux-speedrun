import React, { Component } from 'react'
import { connect } from 'react-redux';
import Blog from './Blog';

class Index extends Component {
  render() {
    const blogs = this.props.blogs.map( (blog, i) => <Blog key={i} title={ blog.title } content={ blog.content } />)

    return (
      <div>
        { blogs }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps)(Index);
