const MongoClient = require('mongodb');
const config = require('./config/config.json');
const { db: { host, port, name } } = config;
const url = `mongodb://${host}:${port}`;
const dbname=name;
const state={
    db:null
}
MongoClient.connect(url, (err,data)=>{
    if(!err){
        console.log("database connected");
        state.db=data.db(dbname)
    }
        else
        console.log("error"+err);
    
});

module.exports.get=function(){
    return state.db ;
};