import {useCallback} from "react";
import {useHttp} from "../hooks/http.hook";


const MainService = () => {
    const _baseUrl = 'https://youtube.googleapis.com/youtube/v3/'
    const _apiKey = /*'AIzaSyBzPaEWg4TftjQVn2g2B8nx1f38D8o3KMg'*/ 'AIzaSyDtQwWwcExWtlnMB1Qld0dy1OKh2ShZVvY'

    const {request} = useHttp()

    const getList = async (maxResults: string = '50', pageToken: string = '') => {
        return(
            await request(`${_baseUrl}videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&pageToken=${pageToken}&maxResults=${maxResults}&regionCode=RU&key=${_apiKey}`)
        )
    }

    const getChannelId = async (id: string) => {
        return(
            await request(`${_baseUrl}channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${_apiKey}`)
        )
    }

    const getVideoId = async (id: string) => {
        return (
            await request(`${_baseUrl}videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${_apiKey}`)
        )
    }

    const getAllCommentsOnVideo = async (id: string) => {
        return (
            await request(`${_baseUrl}commentThreads?key=${_apiKey}&textFormat=plainText&part=snippet&videoId=${id}&maxResults=50`)
        )
    }

    const getSearchList = async (q: string, pageToken: string = '') => {
        return (
            await request(`${_baseUrl}search?part=snippet&maxResults=50&q=${q}&pageToken=${pageToken}&regionCode=RU&key=${_apiKey}`)
        )
    }

    return {getList, getChannelId, getVideoId, getAllCommentsOnVideo, getSearchList}
}

export default MainService
