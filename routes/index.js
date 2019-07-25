module.exports=function(app){

//主应用程序安装定义了路由的中间件，这些中间件是由express.Router()中间件装载的模块
app.use('/search',require('./forestyData').keyword)








//404报错
app.use(function(req,res){
    if (!res.headersSent) {
	    res.status(404).render('404')
	  }
})



}