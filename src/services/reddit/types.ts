// https://github.com/feross/reddit

export interface ApiResult {
    kind: string;
    data: Data;
}

export interface Data {
    modhash?: any;
    dist: number;
    children: Child[];
    after: string;
    before: string;
}

export interface Child {
    kind: string;
    data: ChildData;
}

export interface ChildData {
    approved_at_utc?: any;
    subreddit: string;
    selftext: string;
    author_fullname: string;
    saved: boolean;
    mod_reason_title?: any;
    gilded: number;
    clicked: boolean;
    title: string;
    link_flair_richtext: Linkflairrichtext[];
    subreddit_name_prefixed: string;
    hidden: boolean;
    pwls: number;
    link_flair_css_class: string;
    downs: number;
    thumbnail_height?: number;
    top_awarded_type?: any;
    hide_score: boolean;
    name: string;
    quarantine: boolean;
    link_flair_text_color: string;
    upvote_ratio: number;
    author_flair_background_color?: string;
    subreddit_type: string;
    ups: number;
    total_awards_received: number;
    media_embed: Mediaembed;
    thumbnail_width?: number;
    author_flair_template_id?: any;
    is_original_content: boolean;
    user_reports: any[];
    secure_media?: Securemedia;
    is_reddit_media_domain: boolean;
    is_meta: boolean;
    category?: any;
    secure_media_embed: Mediaembed;
    link_flair_text: string;
    can_mod_post: boolean;
    score: number;
    approved_by?: any;
    author_premium: boolean;
    thumbnail: string;
    edited: boolean | number;
    author_flair_css_class?: any;
    author_flair_richtext: Linkflairrichtext[];
    gildings: Gildings;
    post_hint?: string;
    content_categories?: any;
    is_self: boolean;
    mod_note?: any;
    created: number;
    link_flair_type: string;
    wls: number;
    removed_by_category?: any;
    banned_by?: any;
    author_flair_type: string;
    domain: string;
    allow_live_comments: boolean;
    selftext_html?: string;
    likes?: any;
    suggested_sort: string;
    banned_at_utc?: any;
    url_overridden_by_dest?: string;
    view_count?: any;
    archived: boolean;
    no_follow: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    over_18: boolean;
    preview?: Preview;
    all_awardings: (Allawarding | Allawardings2 | Allawardings3 | Allawardings4)[];
    awarders: any[];
    media_only: boolean;
    link_flair_template_id: string;
    can_gild: boolean;
    spoiler: boolean;
    locked: boolean;
    author_flair_text?: string;
    treatment_tags: any[];
    visited: boolean;
    removed_by?: any;
    num_reports?: any;
    distinguished?: any;
    subreddit_id: string;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color: string;
    id: string;
    is_robot_indexable: boolean;
    report_reasons?: any;
    author: string;
    discussion_type?: any;
    num_comments: number;
    send_replies: boolean;
    whitelist_status: string;
    contest_mode: boolean;
    mod_reports: any[];
    author_patreon_flair: boolean;
    author_flair_text_color?: string;
    permalink: string;
    parent_whitelist_status: string;
    stickied: boolean;
    url: string;
    subreddit_subscribers: number;
    created_utc: number;
    num_crossposts: number;
    media?: Securemedia;
    is_video: boolean;
    is_gallery?: boolean;
    media_metadata?: Mediametadata;
    gallery_data?: Gallerydata;
}

export interface Gallerydata {
    items: Item[];
}

export interface Item {
    media_id: string;
    id: number;
}

export interface Mediametadata {
    nrgp1a3tmol61?: Nrgp1a3tmol61;
    lkpl2e3tmol61?: Nrgp1a3tmol61;
    jjuc1e3tmol61?: Nrgp1a3tmol61;
    vry5e1emmol61?: Nrgp1a3tmol61;
    bpoihfh7fol61?: Nrgp1a3tmol61;
    '9wl2va36fol61'?: Nrgp1a3tmol61;
    '7apycuf1bol61'?: Nrgp1a3tmol61;
    rok241y0col61?: Nrgp1a3tmol61;
    '6a62fykxbol61'?: Nrgp1a3tmol61;
    suzp5wi3bol61?: Nrgp1a3tmol61;
    isjkbywybol61?: Nrgp1a3tmol61;
    v8qv27jzaol61?: Nrgp1a3tmol61;
    r2vmk377bol61?: Nrgp1a3tmol61;
    bxveay8u6ol61?: Nrgp1a3tmol61;
    '7zmdn09u6ol61'?: Nrgp1a3tmol61;
    '6i71da350ol61'?: Nrgp1a3tmol61;
    gvr5liemznl61?: Nrgp1a3tmol61;
    '5zdvpdf70ol61'?: Nrgp1a3tmol61;
    '63ma59ssznl61'?: Nrgp1a3tmol61;
    '577q367oznl61'?: Nrgp1a3tmol61;
    '8kq1t3a20ol61'?: Nrgp1a3tmol61;
    p4yyuhwuznl61?: Nrgp1a3tmol61;
    ab2qrdq1eol61?: Nrgp1a3tmol61;
    '6jy8rvvwznl61'?: Nrgp1a3tmol61;
    c8nc64410ol61?: Nrgp1a3tmol61;
    wt301w260ol61?: Nrgp1a3tmol61;
    '1le4m2ozznl61'?: Nrgp1a3tmol61;
    '6f7tl8ltznl61'?: Nrgp1a3tmol61;
    qdvbhcsqznl61?: Nrgp1a3tmol61;
    '5xhwiv9yznl61'?: Nrgp1a3tmol61;
    dvy0vvk30ol61?: Nrgp1a3tmol61;
}

export interface Nrgp1a3tmol61 {
    status: string;
    e: string;
    m: string;
    p: P[];
    s: P;
    id: string;
}

export interface P {
    y: number;
    x: number;
    u: string;
}

export interface Allawardings4 {
    giver_coin_reward?: number;
    subreddit_id?: any;
    is_new: boolean;
    days_of_drip_extension: number;
    coin_price: number;
    id: string;
    penny_donate?: number;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    tiers_by_required_awardings?: any;
    resized_icons: Source[];
    icon_width: number;
    static_icon_width: number;
    start_date?: any;
    is_enabled: boolean;
    awardings_required_to_grant_benefits?: any;
    description: string;
    end_date?: any;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: Source[];
    icon_format?: string;
    icon_height: number;
    penny_price?: number;
    award_type: string;
    static_icon_url: string;
}

export interface Allawardings3 {
    giver_coin_reward?: any;
    subreddit_id?: any;
    is_new: boolean;
    days_of_drip_extension: number;
    coin_price: number;
    id: string;
    penny_donate?: any;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    tiers_by_required_awardings?: any;
    resized_icons: Source[];
    icon_width: number;
    static_icon_width: number;
    start_date?: number;
    is_enabled: boolean;
    awardings_required_to_grant_benefits?: any;
    description: string;
    end_date?: any;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: Source[];
    icon_format?: any;
    icon_height: number;
    penny_price?: any;
    award_type: string;
    static_icon_url: string;
}

export interface Allawardings2 {
    giver_coin_reward?: number;
    subreddit_id?: string;
    is_new: boolean;
    days_of_drip_extension: number;
    coin_price: number;
    id: string;
    penny_donate?: number;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    tiers_by_required_awardings?: any;
    resized_icons: Source[];
    icon_width: number;
    static_icon_width: number;
    start_date?: any;
    is_enabled: boolean;
    awardings_required_to_grant_benefits?: any;
    description: string;
    end_date?: any;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: Source[];
    icon_format?: string;
    icon_height: number;
    penny_price?: number;
    award_type: string;
    static_icon_url: string;
}

export interface Allawarding {
    giver_coin_reward?: any;
    subreddit_id?: any;
    is_new: boolean;
    days_of_drip_extension: number;
    coin_price: number;
    id: string;
    penny_donate?: any;
    award_sub_type: string;
    coin_reward: number;
    icon_url: string;
    days_of_premium: number;
    tiers_by_required_awardings?: any;
    resized_icons: Source[];
    icon_width: number;
    static_icon_width: number;
    start_date?: any;
    is_enabled: boolean;
    awardings_required_to_grant_benefits?: any;
    description: string;
    end_date?: any;
    subreddit_coin_reward: number;
    count: number;
    static_icon_height: number;
    name: string;
    resized_static_icons: Source[];
    icon_format?: any;
    icon_height: number;
    penny_price?: any;
    award_type: string;
    static_icon_url: string;
}

export interface Preview {
    images: Image[];
    enabled: boolean;
}

export interface Image {
    source: Source;
    resolutions: Source[];
    variants: Mediaembed;
    id: string;
}

export interface Source {
    url: string;
    width: number;
    height: number;
}

export interface Gildings {
    gid_1?: number;
}

export interface Securemedia {
    reddit_video: Redditvideo;
}

export interface Redditvideo {
    bitrate_kbps: number;
    fallback_url: string;
    height: number;
    width: number;
    scrubber_media_url: string;
    dash_url: string;
    duration: number;
    hls_url: string;
    is_gif: boolean;
    transcoding_status: string;
}

export interface Mediaembed {
}

export interface Linkflairrichtext {
    e: string;
    t: string;
}
