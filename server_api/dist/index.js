"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
//middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false })); // para poder tener datos de un html
var cors = require('cors');
app.use(cors({ origin: '*' }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('USER_ACCESS', '*');
    res.header('PASSWORD', '*');
    next();
});
app.use(indexRoutes_1.default);
app.listen(3001, () => {
    console.log('server on port ', 3001);
});
