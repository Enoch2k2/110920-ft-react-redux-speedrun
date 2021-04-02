const initialState = {
  blogs: [],
  loading: true
}

const blogsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      }
    case "SET_BLOGS":
      return {
        ...state,
        loading: false,
        blogs: action.blogs
      }
    case "ADD_BLOG":
      return {
        ...state,
        blogs: [...state.blogs, action.blog]
      }
    default:
      return state;
  }
}

export default blogsReducer;