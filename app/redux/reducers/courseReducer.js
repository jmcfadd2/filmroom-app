import axios from 'axios'
import {
  SET_COURSE_TOPIC,
  SET_COURSE_DRILLS,
  LOADING_DATA,
  SET_PROGRESS,
  SET_VID_STATUS,
  SET_COURSE_ID,
  LOADING_UI,
  SET_UPLOAD_SUCCESS,
  LOADING_COURSES,
  STOP_LOADING_UI,
  SET_COURSES,
  SET_COURSE_INFO
} from '../types'

const initialState = {
  drills: [],
  topic: 0,
  loading: false,
  courses: [],
  info: ""
}

export default function (state = initialState, action) {
  switch (action.type) {

    case LOADING_COURSES:
      return {
        ...state,
        loading: true
      }
    case SET_COURSES:
      return {
        ...state,
        courses: action.payload
      }
    case SET_COURSE_INFO:
      return {
        ...state,
        info: action.payload
      }
    case SET_COURSE_TOPIC:
      return {
        ...state,
        topic: action.payload
      }
    case SET_COURSE_DRILLS:
      return {
        ...state,
        drills: [...state.drills, action.payload],
        loading: false
      }
    case SET_COURSE_ID:
      return {
        ...state,
        courseId: action.payload,
        loading: false
      }
    case SET_UPLOAD_SUCCESS:
      return {
        ...state,
        uploadSuccess: action.payload,
        loading: false
      }
    default:
      return state;
  }
}

