// https://github.com/feross/reddit
declare module 'reddit' {

    export default class reddit {
        constructor(...args: any[]);

        delete(...args: any[]): void;

        get(...args: any[]): void;

        patch(...args: any[]): void;

        post(...args: any[]): void;

        put(...args: any[]): void;

    }
}
