import reddit from './services/reddit';

(async () => {
    // const account = await alpaca.getAccount()
    // console.log(account)

    const posts = await reddit.subreddit('wallstreetbets', 'new', {count: 1})
    console.log(JSON.stringify(posts[0]))

})();
