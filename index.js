import express from 'express';
import routes from './routes/route.js';
import Connection  from './db/conn.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use('/',routes);
Connection();
app.listen(8080,()=>{
    console.log("server is running on port 8080 ");
})
