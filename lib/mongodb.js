const config=require("../config/default")
const mongoose=require("mongoose");
//连接
mongoose.connect(config.mongodb,{useNewUrlParser: true})

var db = mongoose.connection;

//连接异常报错
db.on('error', console.error.bind(console, 'connection error:'));


//能打开表示连接成功了
db.once('open', function() {
  // we're connected!
  console.log("connected");
  
});

module.exports=mongoose;
