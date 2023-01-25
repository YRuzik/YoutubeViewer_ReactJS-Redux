import {channel, listItem} from "../interfaces/interfaces";

export const listFetched = (list: listItem[]) => {
    return {
        type: 'LIST_FETCHED',
        payload: list
    }
}

export const listFetching = () => {
    return {
        type: 'LIST_FETCHING'
    }
}

export const listFetchingError = () => {
    return {
        type: 'LIST_FETCHING_ERROR'
    }
}

export const currentVideoFetched = (currentVideo: listItem[]) => {
    return {
        type: 'CURRENT_VIDEO_FETCHED',
        payload: currentVideo
    }
}

export const currentChannelFetched = (currentChannel: channel) => {
    return {
        type: 'CURRENT_CHANNEL_FETCHED',
        payload: currentChannel
    }
}

export const currentCommentsFetched = (currentComments: any) => {
    return {
        type: 'CURRENT_COMMENTS_FETCHED',
        payload: currentComments
    }
}

export const videoIDFetched = (videoID: string) => {
    return {
        type: 'VIDEO_ID_FETCHED',
        payload: videoID
    }
}

export const searchListFetched = (searchList: any) => {
    return {
        type: 'SEARCH_LIST_FETCHED',
        payload: searchList
    }
}

export const addWatchLaterVideo = (watchLaterVideo: any) => {
    return {
        type: 'ADD_WATCH_LATER_CONTENT',
        payload: watchLaterVideo
    }
}

export const removeWatchLaterVideo = (watchLaterID: any) => {
    return {
        type: 'REMOVE_ADD_WATCH_LATER_VIDEO',
        payload: watchLaterID
    }
}

export const addFavorites = (favoriteVideo: any) => {
    return {
        type: 'ADD_FAVORITES',
        payload: favoriteVideo
    }
}

export const removeFavorites = (favoritesID: any) => {
    return {
        type: 'REMOVE_FAVORITES',
        payload: favoritesID
    }
}
