import {
  LOADING_SESSION,
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
} from '../types';

const initialState = {
  drills: [],
  drillResults: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_SESSION:
      return {
        ...state,
        loading: true
      };
    case GET_TOPICS:
      return {
        ...state,
        topics: action.payload,
        loading: false
      }
    case SET_TOPIC:
      return {
        ...state,
        topic: action.payload
      };
    case SET_TYPE:
      return {
        ...state,

        type: action.payload
      };
    case ADD_NEW_DRILL:
      return {
        ...state,
        drills: [...state.session.drills, action.payload],
        loading: false
      }

    case SET_DRILLS:
      return {
        ...state,
        yourDrills: action.payload,

      };
    case ADD_DRILL:
      let drillIndex = state.yourDrills.findIndex(
        (drill) => drill.name === action.payload

      );

      return {
        ...state,
          drills: [...state.drills, state.yourDrills[drillIndex]]
        
      }
    case UPDATE_RESULTS:
      return {
        ...state,
        session: {
          ...state.session,
          drillResults: [...state.session.drillResults, action.payload]
        },
        loading: false
      };
    case SET_SESSION:
      return {
        ...state,
        session: action.payload,
        loading: false
      };
    default:
      return state;
  }
}