import express from 'express';
import routes from './routes/route.js';
import Connection  from './db/conn.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const port=process.env.PORT || 8080;
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use('/',routes);
Connection();
app.listen(port,()=>{
    console.log("server is running on port 8080 ");
})
