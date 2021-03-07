import {config} from "dotenv";
import {ApiResult} from "./types";

const RedditApi = require('reddit')

config();

type SORTBY = "new" | "popular" | "rising";
type FILTER = {
    after?: string;
    before?: string;
    limit?: number;
    count?: number;
    show?: string;
}

class RedditClient {
    private reddit = new RedditApi({
        username: process.env.REDDIT_USER_NAME,
        password: process.env.REDDIT_USER_PASSWORD,
        appId: process.env.REDDIT_APP_ID,
        appSecret: process.env.REDDIT_APP_SECRET,
        userAgent: `"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"')`
    })

    me = () =>
        this.reddit.get('/api/v1/me');

    subreddit = async (subreddit: string, sortby: SORTBY = "new", opts?: FILTER) => {
        const res: ApiResult = await this.reddit.get(`/r/${subreddit}/${sortby}`, opts);
        return res.data.children.map(({data}) => data)
    }

}

export default new RedditClient();
