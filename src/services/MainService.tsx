import {useCallback} from "react";
import {useHttp} from "../hooks/http.hook";


const MainService = () => {
    const _baseUrl = 'https://youtube.googleapis.com/youtube/v3/'
    const _apiKey = 'AIzaSyBzPaEWg4TftjQVn2g2B8nx1f38D8o3KMg'

    const {request} = useHttp()

    const getList = async () => {
        return(
            await request(`${_baseUrl}videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=RU&key=${_apiKey}`)
        )
    }

    const getChannelId = async (id: string) => {
        return(
            await request(`${_baseUrl}channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${_apiKey}`)
        )
    }

    return {getList, getChannelId}
}

export default MainService
