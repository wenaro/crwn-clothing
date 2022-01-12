import {SET_CURRENT_USER_ACTION} from './user.reducer'

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER_ACTION,
    payload: user
})