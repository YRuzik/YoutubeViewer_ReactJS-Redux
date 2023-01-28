export interface initialStates {
    list: object[];
    listStatus: string;
    currentVideo: object[];
    currentChannel: {};
    currentComments: {};
    videoID: string;
    searchList: object[];
    videosChannel: object[];

    watchLater: object[];
    favorites: object[];
    subscribes: object[];
    liked: object[];

    toasterState: {
        label: string;
    }
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

export interface comment {
    kind: string;
    etag: string;
    id: string;
    snippet: {
        authorDisplayName: string;
        authorProfileImageUrl: string;
        authorChannelUrl: string;
        authorChannelId: {
            value: string;
        },
        channelId: string;
        videoId: string;
        textDisplay: string;
        textOriginal: string;
        parentId: string;
        canRate: boolean;
        viewerRating: string;
        likeCount: number;
        moderationStatus: string;
        publishedAt: string;
        updatedAt: string;
    }
}

export interface video {
    contentDetails: {
        caption: string
        contentRating?: {}
        definition: string
        dimension: string
        duration: string
        licensedContent: true
        projection: string
    }
    etag: string
    id: string
    kind: string
    snippet: {
        categoryId: string
        channelId: string
        channelTitle: string
        defaultAudioLanguage: string
        description: string
        liveBroadcastContent: string
        localized: {
            description: string
            title: string
        }
        publishedAt: string
        tags: string[]
        thumbnails: {
            default?: {
                url: string,
                width: number,
                height: number
            }
            high?: {
                url: string,
                width: number,
                height: number
            }
            maxres?: {
                url: string,
                width: number,
                height: number
            }
            medium?: {
                url: string,
                width: number,
                height: number
            }
            standard?: {
                url: string,
                width: number,
                height: number
            }
        }
        title: string
    }
    statistics?: {
        viewCount?: string,
        likeCount?: string,
        favoriteCount?: string,
        commentCount?: string
    }
}

