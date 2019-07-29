const forestyData=require('../model/forestyData')

exports.keyword=function(req,res,next){
   
   //  console.log(req.query.keyWord);
    let params=req.query.keyWord
    forestyData.searchByKeyWord(params)
    .then((result)=>{
       if(result){

         //过滤只用于前端显示的数据
          let data=[]
          result.map((v)=>{
             let obj={}
             obj.Ke=v.Ke
             obj.Shu=v.Shu
             obj.SpecieName=v.SpecieName
             obj.Distribute=v.Distribute
             obj.FirstForestyArea=v.FirstForestyArea
             obj.Link=v.Link
             obj.Description=v.Description
             obj.SuitableSoil=v.SuitableSoil
             obj.SuitableAltitude=v.SuitableAltitude
             obj.FirstUsage1=v.FirstUsage1
             obj.SinglePic=v.SinglePic
             obj.LocalPic=v.LocalPic
             obj.AreaPic=v.AreaPic

            data.push(obj)
          })
        res.send(data)
       }
    })
     
 
     //  forestyData.insert()

      
}


 
 