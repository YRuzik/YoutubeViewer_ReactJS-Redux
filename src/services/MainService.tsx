import {useHttp} from "../hooks/http.hook";
import {_apiKey, _baseUrl} from "../environment";


const MainService = () => {

    const {request} = useHttp()

    const getList = async (maxResults = '50', pageToken = '') => {
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

    const getSearchList = async (q: string, pageToken = '') => {
        return (
            await request(`${_baseUrl}search?part=snippet&maxResults=50&q=${q}&pageToken=${pageToken}&regionCode=RU&key=${_apiKey}`)
        )
    }

    const getVideosChannel = async (channelID: string) => {
        return (
            await request(`${_baseUrl}search?key=${_apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=50`)
        )
    }

    return {getList, getChannelId, getVideoId, getAllCommentsOnVideo, getSearchList, getVideosChannel}
}

export default MainService
