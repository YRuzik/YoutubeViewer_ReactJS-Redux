import {StatisticLine, StatisticsBody} from "./ChannelStatistics.style";
import React from "react";
import {viewsFormat} from "../../services/FormatService";

const ChannelStatistics = ({statistics}: any) => {

    return (
        <StatisticsBody>
            <StatisticLine>
                Статистика
            </StatisticLine>
            <StatisticLine>
                {statistics.viewCount} просмотров
            </StatisticLine>
            <StatisticLine>
                {statistics.subscriberCount} подписчиков
            </StatisticLine>
            <StatisticLine>
                {statistics.videoCount} видео
            </StatisticLine>

        </StatisticsBody>
    )
}

export default ChannelStatistics;
