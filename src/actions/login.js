/* eslint-disable no-undef */
// import { useDispatch } from 'react-redux'
// import axios from '../services/axios'

import axios from 'axios'

// import request from '../services/requests'

export const POST_LOGIN = 'POST_LOGIN'

export const displayLogin = response => ({
  type: POST_LOGIN,
  payload: response
})

export const postLogin = userObj => dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:5000/api/login/', userObj)
      .then(response => {
        dispatch(displayLogin(response.data))
        resolve(response)
      })
      .catch(error => {
        reject(error.message)
      })
  })
}
