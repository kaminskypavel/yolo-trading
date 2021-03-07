// https://github.com/alpacahq/alpaca-trade-api-js
import {config} from "dotenv";
const Alpaca = require('@alpacahq/alpaca-trade-api');
config();

console.log(Alpaca);

const alpacaInstance = new Alpaca({
    keyId: process.env.APCA_KEY_ID,
    secretKey: process.env.APCA_SECRET_KEY,
    paper: true,
    usePolygon: false
})

export default alpacaInstance;
