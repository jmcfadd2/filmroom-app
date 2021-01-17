import {
  SET_USER,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  STOP_LOADING_USER,
  LIKE_POST,
  UNLIKE_POST,
  SET_AUTHENTICATED,
  MARK_NOTIFICATIONS_READ,
  SET_USER_POSTS
} from '../types';

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
  notifications: [],
  userPosts: []
}


export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      }
    case SET_UNAUTHENTICATED:
      return initialState
    case SET_USER:
      return {
        
        authenticated: true,
        ...action.payload
      }
    case LOADING_USER:
      return {
        ...state,
        loading: true
      }
    case STOP_LOADING_USER:
      return {
        ...state,
        loading: false
      }
    case LIKE_POST:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            postId: action.payload.postId
          }
        ]
      };
    case UNLIKE_POST:
      return {
        ...state,
        likes: state.likes.filter(
          (like) => like.postId !== action.payload.postId
        )
      };
    case MARK_NOTIFICATIONS_READ:
      state.notifications.forEach((not) => (not.read = true));
      return {
        ...state
      };
    
    default:
      return state
  }
}