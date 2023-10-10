import { connect } from 'mongoose';
import { config } from 'dotenv';
config();

const username=process.env.USER_ID;
const password=process.env.PASSWORD;
const Connection=async()=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.1jtdgur.mongodb.net/?retryWrites=true`;
   try {
    await connect(URL,{
        useunifiedTopology:true,
        useNewUrlParser:true
    })
    console.log('sucessfully connect to database');
   } catch (error) {
    console.log("error occured while connecting"+error)
   }
}
export default Connection;