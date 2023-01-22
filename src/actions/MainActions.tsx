import {listItem} from "../interfaces/interfaces";

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
