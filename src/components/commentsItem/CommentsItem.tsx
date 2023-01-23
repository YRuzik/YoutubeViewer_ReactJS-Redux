
import {AvatarSkeleton, ChannelTitle} from "../listItem/ListItem.style";
import {
    AuthorThumbnail,
    CommentContainer,
    CommentContent,
    CommentHeader, CommentsLikeButton,
    CommentText,
    LikeCounter
} from "./CommentsItem.style";
import {publishedFormat} from "../../services/FormatService";


const CommentsItem = ({props, snippet}: any) => {
    return (
        <CommentContainer>
            <AuthorThumbnail>
                <AvatarSkeleton></AvatarSkeleton>
            </AuthorThumbnail>
            <CommentContent>
                <CommentHeader>
                    <ChannelTitle style={{opacity: 1}} to={`/channels/${snippet.topLevelComment.snippet.authorChannelId.value}`}>
                        <h4>{snippet.topLevelComment.snippet.authorDisplayName}</h4>
                    </ChannelTitle>
                    <span style={{paddingLeft: '1rem', fontSize: '0.9rem', opacity: 0.5}}>{publishedFormat(snippet.topLevelComment.snippet.publishedAt)}</span>
                </CommentHeader>
                <CommentText>
                    {snippet.topLevelComment.snippet.textDisplay}
                </CommentText>
                <LikeCounter>
                    <CommentsLikeButton>
                        <i className={'fa-regular fa-heart fa-xl'}></i> {snippet.topLevelComment.snippet.likeCount > 0 ? snippet.topLevelComment.snippet.likeCount : null}
                    </CommentsLikeButton>
                    <CommentsLikeButton>
                        <i className={'fa-solid fa-heart-crack fa-xl'}></i>
                    </CommentsLikeButton>
                </LikeCounter>
            </CommentContent>
        </CommentContainer>
    )
}

export default CommentsItem;
