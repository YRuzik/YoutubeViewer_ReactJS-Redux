export interface initialStates {
    list: object[];
    listStatus: string;
    currentVideo: object[];
    currentChannel: {};
    currentComments: {};
    videoID: string;
    searchList: object[];

    watchLater: object[];
    favorites: [];
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

export interface channel {
    etag: string;
    id: string;
    kind: string;
    snippet: {
        title: string;
        description: string;
        customUrl: string;
        publishedAt: string;
        thumbnails: {
            default: {
                url: string;
                width: number;
                height: number;
            };
            medium: {
                url: string;
                width: number;
                height: number;
            };
            high: {
                url: string;
                width: number;
                height: number;
            }
        };
        localized: {
            title: string;
            description: string;
        };
        country: string;
    };
    contentDetails: {
        relatedPlaylists: {
            likes: string;
            uploads: string;
        }
    };
    statistics: {
        viewCount: string;
        subscriberCount: string;
        hiddenSubscriberCount: boolean;
        videoCount: string;
    }
}

