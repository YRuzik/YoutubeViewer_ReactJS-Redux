export interface initialStates {
    list: object[];
    listStatus: string;
}

export interface listItem {
    etag: string;
    id: {
        kind: string;
        videoId: string;
    };
    kind: string;
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        liveBroadcastContent: string;
        publishTime: string;
        publishedAt: string;
        thumbnails: {
            default: {url: string; height: number; width: number};
            high: {url: string; height: number; width: number};
            medium: {url: string; height: number; width: number};
        };
        title: string;
    }
    statistics: {
        commentCount: string;
        favoriteCount: string;
        likeCount: string;
        viewCount: string;
    }

}

