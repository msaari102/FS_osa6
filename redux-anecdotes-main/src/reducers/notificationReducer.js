import { createSlice } from '@reduxjs/toolkit'

const initialState = 
  null


const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNoti(state, action) {
      return action.payload
    },
    removeNotification(state, action) {
      return null
    }
  },
})

export const { setNoti, removeNotification } = notificationSlice.actions

export const setNotification = (content, time) => {
  return async dispatch => {
  dispatch(setNoti(content))
  var timeoutID  = setTimeout(() => {
    dispatch(removeNotification())
  }, time*1000)
  clearTimeout(timeoutID-1)
}
}

export default notificationSlice.reducer
