
import {AvatarSkeleton} from "../listItem/ListItem.style";
import {CommentContainer} from "./CommentsItem.style";


const CommentsItem = ({props, snippet}: any) => {
    return (
        <CommentContainer>
            <span>
                <AvatarSkeleton></AvatarSkeleton>
                <div style={{paddingLeft: '3rem', height: '2.5rem'}}>
                    <h4>{snippet.topLevelComment.snippet.authorDisplayName}</h4>
                    {snippet.topLevelComment.snippet.textDisplay}
                </div>
            </span>
        </CommentContainer>
    )
}

export default CommentsItem;
