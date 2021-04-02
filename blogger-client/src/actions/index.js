export const getBlogs = () => {
  return dispatch => {
    dispatch({ type: "LOADING" })
    fetch("http://localhost:3001/blogs")
      .then(resp => resp.json())
      .then(blogs => dispatch({ type: "SET_BLOGS", blogs }))
  }
}

export const addBlog = (blog, history) => {
  return dispatch => {
    fetch('http://localhost:3001/blogs', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ blog })
    })
      .then(resp => resp.json())
      .then(blog => {
        dispatch({ type: "ADD_BLOG", blog })
        history.push("/blogs")
      })
  }
}