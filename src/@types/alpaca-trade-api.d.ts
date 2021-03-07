declare module '@alpacahq/alpaca-trade-api' {
    export default class Alpaca  {
        constructor(config: any);

        addToWatchlist(id: any, symbol: any): any;

        addWatchlist(name: any, symbols: any): any;

        cancelAllOrders(): any;

        cancelOrder(id: any): any;

        closeAllPositions(): any;

        closePosition(symbol: any): any;

        createOrder(order: any): any;

        dataHttpRequest(endpoint: any, queryParams: any, body: any, method: any): any;

        deleteFromWatchlist(id: any, symbol: any): any;

        deleteWatchlist(id: any): any;

        getAccount(): any;

        getAccountActivities({
                                 activityTypes, until, after, direction,
                                 date, pageSize, pageToken
                             }: any): any;

        getAccountConfigurations(): any;

        getAggregates(symbol: any, timespan: any, from: any, to: any): any;

        getAnalysts(symbol: any): any;

        getAsset(symbol: any): any;

        getAssets(options: any): any;

        getBars(timeframe: any, symbols: any, options: any): any;

        getCalendar({start, end}: any): any;

        getClock(): any;

        getCompany(symbol: any): any;

        getConditionMap(ticktype: any): any;

        getDividends(symbol: any): any;

        getEarnings(symbol: any): any;

        getExchanges(): any;

        getFinancials(symbol: any): any;

        getHistoricAggregatesV2(symbol: any, multiplier: any, size: any, from: any, to: any, options: any): any;

        getHistoricQuotesV2(symbol: any, date: any, options: any): any;

        getHistoricTradesV2(symbol: any, date: any, options: any): any;

        getLastQuote(symbol: any): any;

        getLastTrade(symbol: any): any;

        getNews(symbol: any): any;

        getOrder(id: any): any;

        getOrderByClientId(clientOrderId: any): any;

        getOrders({status, until, after, limit, direction, nested}: any): any;

        getPortfolioHistory({date_start, date_end, period, timeframe, extended_hours}: any): any;

        getPosition(symbol: any): any;

        getPositions(): any;

        getSplits(symbol: any): any;

        getSymbol(symbol: any): any;

        getSymbolTypeMap(): any;

        getWatchlist(id: any): any;

        getWatchlists(): any;

        httpRequest(endpoint: any, queryParams: any, body: any, method: any): any;

        lastQuote(symbol: any): any;

        lastTrade(symbol: any): any;

        polygonHttpRequest(endpoint: any, queryParams: any, body: any, method: any, apiVersion: any): any;

        replaceOrder(id: any, newOrder: any): any;

        updateAccountConfigurations(configs: any): any;

        updateWatchlist(id: any, newWatchList: any): any;

    }

}
