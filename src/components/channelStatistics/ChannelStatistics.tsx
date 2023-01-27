import {StatisticLine, StatisticsBody} from "./ChannelStatistics.style";
import React from "react";
import {viewsFormat} from "../../services/FormatService";

const ChannelStatistics = ({statistics}: any) => {
    const formatter = new Intl.NumberFormat("eu", {style: "decimal"})

    return (
        <StatisticsBody>
            <StatisticLine>
                Статистика
            </StatisticLine>
            <StatisticLine>
                {formatter.format(statistics.viewCount) } просмотров
            </StatisticLine>
            <StatisticLine>
                {formatter.format(statistics.subscriberCount)} подписчиков
            </StatisticLine>
            <StatisticLine>
                {formatter.format(statistics.videoCount)} видео
            </StatisticLine>

        </StatisticsBody>
    )
}

export default ChannelStatistics;
