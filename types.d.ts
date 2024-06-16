interface Video {
    type: string,
    id: `sm${number}`,
    title: string,     
    registeredAt: string,  
    count: {
        view: number,
        comment: number,
        mylist: number,
        like: number
    },
    thumbnail: {
        url: string
        middleUrl: unknown,
        largeUrl: unknown,
        listingUrl: string,
        nHdUrl: string
    },
    duration: number,
    shortDescription: string,
    latestCommentSummary: string,
    isChannelVideo: boolean,
    isPaymentRequired: boolean,
    playbackPosition: unknown,
    owner: {
        ownerType: string,
        type: string,
        visibility: string,
        id: unknown,
        name: unknown
        iconUrl: unknown
    },
    requireSensitiveMasking: boolean,
    videoLive: unknown,
    isMuted: boolean,
    "9d091f87": boolean,
    acf68865: boolean
  }