import {
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
  LOADING_SESSION,
  } from '../types';
import { firebase } from '../../config/firebase'
import axios from 'axios';


export const getTopicData = () => (dispatch) => {
  dispatch({
    type: LOADING_SESSION
  });
  firebase
    .firestore()
    .collection("topics")
    .get()
    .then((data) => {
      let topics = []
      data.forEach((doc) => {
        topics.push({
          name: doc.data().name,
          sessionTypes: doc.data().sessionTypes,
          metrics: doc.data().metrics,
          subActivity: doc.data().subActivity

        })

      })
      dispatch({
        type: GET_TOPICS,
        payload: topics
      })
    })
};

export const setTopic = (newTopic) => (dispatch) => {
  dispatch({
    type: SET_TOPIC,
    payload: newTopic
  })
}
export const setType = (newType) => (dispatch) => {
  dispatch({
    type: SET_TYPE,
    payload: newType
  })
}


export const setSession = (sessionData) => (dispatch) => {
  dispatch({
    type: LOADING_SESSION
  });
  const session = {
    session: sessionData
  }
  axios
    .post('/session', session)
    .then((res) => {
      console.log(res)
      dispatch({
        type: SET_SESSION,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const stageSession = (sessionData) => (dispatch) => {
  dispatch({
    type: LOADING_SESSION
  });
  const session = {
    drillResults: sessionData
  }
  axios
    .post('/session/stage', session)
    .then((res) => {
      console.log(res)
      dispatch({
        type: SET_SESSION,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

export const addNewDrill = (newDrill, video) => (dispatch) => {
  dispatch({
    type: LOADING_SESSION
  });
  axios
    .post('/drill', newDrill)
    .then(async (res) => {

      const upload = typeof video !== undefined && await UpChunk.createUpload({
        endpoint: res.data.uploadUrl,
        file: video,
        chunkSize: 20971520,
      })
      upload.on('progress', progress => {
        console.log(`So far we've uploaded ${progress.detail}% of this file.`);
      })
      dispatch({
        type: ADD_NEW_DRILL,
        payload: res.data
      });
      dispatch(clearErrors());
    })

};

export const getUserDrills = (userHandle, topic, type) => (dispatch) => {
  console.log(userHandle, topic, type);
  axios
    .get(`/drills/${userHandle}/${topic}/${type}`)
    .then((res) => {
      console.log(res)
      dispatch({
        type: SET_DRILLS,
        payload: res.data
      })
    })
    .catch(() => {
      dispatch({
        type: SET_DRILLS,
        payload: ["No drills available"]
      })
    })
}

export const getGenericDrills = (topic, type) => (dispatch) => {

  axios
    .get(`/drills/${topic}/${type}`)
    .then((res) => {
      console.log(res)
      dispatch({
        type: SET_DRILLS,
        payload: res.data
      })
    })
    .catch(() => {
      dispatch({
        type: SET_DRILLS,
        payload: ["No drills available"]
      })
    })
}

export const addDrillToSession = (drillName) => (dispatch) => {
  dispatch({
    type: ADD_DRILL,
    payload: drillName
  })
}