import {
    AdditionalText,
    AvatarSkeleton,
    ChannelTitle,
    InformationContainer,
    ItemContainer,
    MainText
} from "./ListItem.style";

const ListItem = ({props, snippet, statistics}: any) => {
    if (snippet.title.length > 41) snippet.title = snippet.title.slice(0, 41) + '...'

    function viewsFormat(labelValue: string)
    {
        return Math.abs(Number(labelValue)) >= 1.0e+9

            ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
            : Math.abs(Number(labelValue)) >= 1.0e+6

                ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + " млн"
                : Math.abs(Number(labelValue)) >= 1.0e+3

                    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(0) + " тыс"
                    : Math.abs(Number(labelValue));
    }

    function publishedFormat(data: string) {
        const now = new Date()
        const published = new Date(data)

        const diff = Math.round(Math.abs(+now - +published) / 60000)
        if (diff < 60) {
            return diff + ' мин.'
        } else if (diff < 1440) {
            return Math.round(1440 / diff) + ' ч. назад'
        } else if (diff < 43200) {
            return Math.round(43200 / diff) + ' д. назад'
        } else if (diff < 525600) {
            return Math.round(525600 / diff) + ' г. назад'
        }
    }

    return (
        <ItemContainer>
            <img alt={'thumbnail'} src={snippet.thumbnails.medium.url} style={{borderRadius: '10px'}}/>
            <InformationContainer>
                <AvatarSkeleton></AvatarSkeleton>
                <MainText>
                    {snippet.title}
                </MainText>
                <AdditionalText>
                    <ChannelTitle>{snippet.channelTitle}</ChannelTitle>
                    {viewsFormat(statistics.viewCount)} просмотров | {publishedFormat(snippet.publishedAt)}
                </AdditionalText>
            </InformationContainer>
        </ItemContainer>
    )
}

export default ListItem;
