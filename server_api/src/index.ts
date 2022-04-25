import express from 'express';
const app = express();

import indexRoutes from './routes/indexRoutes'

//middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); // para poder tener datos de un html
var cors = require('cors')

app.use(cors({origin: '*'}));

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

app.use(indexRoutes);

app.listen(3001, () => {
    console.log('server on port ', 3001)
})