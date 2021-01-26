import axios from 'axios'
import {
  SET_COURSE_TOPIC,
  SET_COURSE_DRILLS,
  SET_PROGRESS,
  SET_VID_STATUS,
  SET_COURSE_ID,
  LOADING_UI,
  SET_UPLOAD_SUCCESS,
  LOADING_COURSES,
  STOP_LOADING_COURSES,
  STOP_LOADING_UI,
  SET_COURSES,
  SET_COURSE_INFO
} from '../types'


export const getCourses = () => (dispatch) => {
  dispatch({
    type: LOADING_COURSES
  });
  axios
    .get('/courses')
    .then((res) => {

      dispatch({
        type: SET_COURSES,
        payload: res.data
      });
      console.log(res.data)
    })
    .catch((err) => {
      dispatch({
        type: SET_COURSES,
        payload: []
      });
    });
};

export const getCourseData = (courseId) => (dispatch) => {
  dispatch({
    type: LOADING_COURSES
  });
  axios
    .get(`/courses/${courseId}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_COURSE_INFO,
        payload: res.data
      });
    })
    .catch(() => {
      dispatch({
        type: SET_COURSE_INFO,
        payload: null
      });
    });
};

export const addCourseToLibrary = (courseInfo) => (dispatch) => {
  dispatch({
    type: LOADING_COURSES
  })
  const newRequest = {
    drillInfo: courseInfo.drillInfo,
    drillVideos: courseInfo.drillVideos,
    instructor: courseInfo.userHandle,
    courseId: courseInfo.courseId,

  }
  console.log(newRequest)
  axios
    .post('/courses/add', newRequest)
    .then((res) => {
      console.log(res);
      dispatch({
        type: STOP_LOADING_COURSES
      })
    })
    .catch((err) => {
      console.log(err);
    })
}