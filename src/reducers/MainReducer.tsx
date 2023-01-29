import {channel, initialStates} from "../interfaces/interfaces";
import {loadState} from "../store/BrowserStorage";

const initialState: initialStates = {
    listStatus: 'loading',
    list: [],
    currentVideo: [],
    currentChannel: {},
    currentComments: [],
    videoID: '',
    searchList: [],
    videosChannel: [],

    watchLater: loadState('watchLater') || [],
    favorites: loadState('favorites') || [],
    subscribes: loadState('subscribers') || [],
    liked: loadState('liked') || [],

    toasterState: {
        label: '',
        sub: false
    }
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
        case 'ADD_WATCH_LATER_CONTENT': {
            const {id} = action.payload[0]
            const dup = state.watchLater.find((obj: any) => obj.id === id)
            return dup ? {
                ...state,
                watchLater: state.watchLater,
                listStatus: 'idle',
            } : {
                ...state,
                watchLater: [...state.watchLater, ...action.payload],
                listStatus: 'idle',
            }
        }
        case 'REMOVE_ADD_WATCH_LATER_VIDEO': {
            const newID = action.payload;
            return {
                ...state,
                watchLater: state.watchLater.filter((item, id) => id !== newID)
            }
        }
        case 'ADD_FAVORITES': {
            const myID = action.payload[0].id
            const dups = state.favorites.find((obj: any) => obj.id === myID)
            return dups ? {
                ...state,
                favorites: state.favorites,
                listStatus: 'idle',
            } : {
                ...state,
                favorites: [...state.favorites, ...action.payload],
                listStatus: 'idle',
            }
        }
        case 'REMOVE_FAVORITES': {
            const newIDFavorites = action.payload;
            return {
                ...state,
                favorites: state.favorites.filter((item, id) => id !== newIDFavorites)
                }
        }
        case 'ADD_LIKED': {
            const {id} = action.payload[0]
            const dup = state.liked.find((obj: any) => obj.id === id)
            return dup ? {
                ...state,
                liked: state.liked,
                listStatus: 'idle',
            } : {
                ...state,
                liked: [...state.liked, ...action.payload],
                listStatus: 'idle',
            }
        }
        case 'REMOVE_LIKED': {
            const newIDLiked = action.payload;
            return {
                ...state,
                liked: state.liked.filter((item, id) => id !== newIDLiked)
            }
        }
        case 'ADD_SUBSCRIBERS': {
            const {id} = action.payload[0]
            const dup = state.subscribes.find((obj: any) => obj.id === id)
            return dup ? {
                ...state,
                subscribes: state.subscribes,
                listStatus: 'idle',
            } : {
                ...state,
                subscribes: [...state.subscribes, ...action.payload],
                listStatus: 'idle',
            }
        }
        case 'REMOVE_SUBSCRIBERS': {
            const dup = state.subscribes.find((obj: any) => obj.id === action.payload)
            return {
                ...state,
                subscribes: state.subscribes.filter((item) => item !== dup)
            }
        }
        case 'SET_TOASTER': {
            return {
                ...state,
                toasterState: {
                    label: action.payload.label,
                    sub: action.payload.sub
                }
            }
        }
        case 'VIDEOS_CHANNEL_FETCHED': {
            return {
                ...state,
                videosChannel: action.payload
            }
        }
        default: return state
    }
}

export default mainReducer
