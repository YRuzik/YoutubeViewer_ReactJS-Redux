import {initialStates} from "../interfaces/interfaces";

const initialState: initialStates = {
    listStatus: 'loading',
    list: [],
    currentVideo: [],
    currentChannel: {},
    currentComments: [],
    videoID: '',
    searchList: []
}


const mainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LIST_FETCHING':
            return {
                ...state,
                listStatus: 'loading'
            }
        case 'LIST_FETCHED':
            return {
                ...state,
                list: action.payload,
                listStatus: 'idle'
            }
        case 'LIST_FETCHING_ERROR':
            return {
                ...state,
                listStatus: 'error'
            }
        case 'CURRENT_VIDEO_FETCHED':
            return {
                ...state,
                currentVideo: action.payload,
                listStatus: 'idle'
            }
        case 'CURRENT_CHANNEL_FETCHED':
            return {
                ...state,
                currentChannel: action.payload,
                listStatus: 'idle'
            }
        case 'CURRENT_COMMENTS_FETCHED':
            return {
                ...state,
                currentComments: action.payload,
                listStatus: 'idle'
            }
        case 'VIDEO_ID_FETCHED':
            return {
                ...state,
                videoID: action.payload,
                listStatus: 'idle'
            }
        case 'SEARCH_LIST_FETCHED':
            return {
                ...state,
                searchList: action.payload,
                listStatus: 'idle'
            }
        default: return state
    }
}

export default mainReducer
