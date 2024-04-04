import { combineReducers } from 'redux';

const initialState = {
  posts: [],
  error: null,
};

const postsReducer = (state = initialState.posts, action) => {
  switch (action.type) {
    case 'ADD_POST_SUCCESS':
      return [...state, action.payload];
    default:
      return state;
  }
};

const errorReducer = (state = initialState.error, action) => {
  switch (action.type) {
    case 'ADD_POST_FAILURE':
      return action.payload;
    case 'ADD_POST_SUCCESS':
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  posts: postsReducer,
  error: errorReducer,
});
