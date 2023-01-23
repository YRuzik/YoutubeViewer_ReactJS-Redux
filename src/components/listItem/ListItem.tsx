import {
    AdditionalText,
    AvatarSkeleton,
    ChannelTitle,
    InformationContainer,
    ItemContainer,
    MainText, ToVideo
} from "./ListItem.style";
import {publishedFormat, viewsFormat} from "../../services/FormatService";

const ListItem = ({props, snippet, statistics, id}: any) => {
    if (snippet.title.length > 41) snippet.title = snippet.title.slice(0, 41) + '...'

    return (
        <ItemContainer>
            <ToVideo>
                <img alt={'thumbnail'} src={snippet.thumbnails.medium.url} style={{borderRadius: '10px'}}/>
                <InformationContainer>
                    <AvatarSkeleton></AvatarSkeleton>
                    <MainText>
                        {snippet.title}
                    </MainText>
                    <AdditionalText>
                        <ChannelTitle to={`channels/${snippet.channelId}`}>{snippet.channelTitle}</ChannelTitle>
                        <span style={{opacity: 0.5}}>{viewsFormat(statistics.viewCount)} просмотров | {publishedFormat(snippet.publishedAt)}</span>
                    </AdditionalText>
                </InformationContainer>
            </ToVideo>
        </ItemContainer>
    )
}

export default ListItem;
