import {SET_CURRENT_SONG} from './types'

export const setCurrentSong = (track) => {
    console.log('actions', track)
    return { type: SET_CURRENT_SONG, payload: track }
}