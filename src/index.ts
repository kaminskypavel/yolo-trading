import alpaca from './services/alpaca';
import reddit from './services/reddit';

(async () => {
    // const account = await alpaca.getAccount()
    // console.log(account)

    const account = await reddit.me()
    console.log(account)

})();
