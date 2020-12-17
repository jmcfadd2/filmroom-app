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
  GET_TOPICS,
  SET_TOPIC,
  SET_TYPE,
  SET_SESSION,
  ADD_NEW_DRILL,
  SET_DRILLS,
  ADD_DRILL,
  UPDATE_RESULTS,
  SET_TITLE,
  SET_DESCRIPT,
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