
import {
  SET_POSTS,
  LIKE_POST,
  UNLIKE_POST,
  LOADING_DATA,
  DELETE_POST,
  CREATE_POST,
  SET_POST,
  SUBMIT_COMMENT,
  INCREMENT_LIKE,
  SET_USER_POSTS,
  SET_TOPIC,
  SET_TYPE,
  SET_SESSION,
  ADD_NEW_DRILL,
  SET_DRILLS,
  ADD_DRILL,
  UPDATE_RESULTS,
  GET_TOPICS
} from '../types';

const initialState = {
  posts: [],
  post: {},
  
  topics: [],
  yourDrills: [],
  loading: false
};


export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case SET_POST:
      return {
        ...state,
        post: action.payload
      };
    case SET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
        loading: false
      };
    case LIKE_POST:
    case UNLIKE_POST:
      let index = state.posts.findIndex(
        (post) => post.postId === action.payload.postId
      );
      state.posts[index] = action.payload;
      if (state.post.postId === action.payload.postId) {
        state.post = action.payload;
      }
      return {
        ...state
      };
    case INCREMENT_LIKE: {
      let index = state.posts.findIndex(
        (post) => post.postId === action.payload.postId
      );
      return {
        ...state,

      }
    }
    case DELETE_POST:
      index = state.posts.findIndex(
        (post) => post.postId === action.payload
      );
      state.posts.splice(index, 1);
      return {
        ...state
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [action.payload, ...state.post.comments]
        }
      };
    default:
      return state;
  }
}