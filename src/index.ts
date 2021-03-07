import alpaca from './services/alpaca';

(async () => {
    const account = await alpaca.getAccount()
    console.log(account)
})();
