const mongoose = require('mongoose');
const URL = process.env.DATABASE_URL || "mongodb+srv://root:root123@cluster0.hzhvoqr.mongodb.net/Management?retryWrites=true&w=majority"
const app = require("./app")
const port = 5000
async function main(){
     await mongoose.connect(URL)
     console.log("connectd to database")
     app.listen(5000,()=>{console.log('connected to port')})
}
main();