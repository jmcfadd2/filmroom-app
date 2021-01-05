import {
  SET_POSTS,
  LOADING_DATA,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST,
  SET_ERRORS,
  CREATE_POST,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_POST,
  STOP_LOADING_UI,
  SUBMIT_COMMENT,
  SET_PROGRESS,
  SET_VID_STATUS
} from '../types';
import axios from 'axios';


export const getPosts = () => (dispatch) => {
  dispatch({
    type: LOADING_DATA
  });
  axios

    .get('/posts')
    .then((res) => {

      dispatch({
        type: SET_POSTS,
        payload: res.data
      });
      console.log(res.data)
    })
    .catch((err) => {
      dispatch({
        type: SET_POSTS,
        payload: []
      });
    });
};

export const getUserData = (userHandle) => (dispatch) => {
  dispatch({
    type: LOADING_DATA
  });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_POSTS,
        payload: res.data.posts
      });
    })
    .catch(() => {
      dispatch({
        type: SET_POSTS,
        payload: null
      });
    });
};

export const likePost = (postId) => (dispatch) => {
  axios
    .get(`/post/${postId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_POST,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};

export const unlikePost = (postId) => (dispatch) => {
  axios
    .get(`/post/${postId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_POST,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
}