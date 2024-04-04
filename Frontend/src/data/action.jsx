import axios from 'axios';

export const addPostSuccess = (post) => ({
  type: 'ADD_POST_SUCCESS',
  payload: post,
});

export const addPostFailure = (error) => ({
  type: 'ADD_POST_FAILURE',
  payload: error,
});

export const addPost = (post) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5000/api/posts', post);
      dispatch(addPostSuccess(response.data));
    } catch (error) {
      dispatch(addPostFailure(error.message));
    }
  };
};
