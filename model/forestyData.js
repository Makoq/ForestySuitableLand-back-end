const mongoose=require('../lib/mongodb')


//定义schema,相当于定义表结构
var forestySChema = new mongoose.Schema({
    //  Ke:String,
	//  Shu:String,
	//  SpecieName:String,
	//  LatinName:String  ,
	//  OtherName:  String  ,
	//  Distribute:  String  ,
	//  FirstForestyArea: String  ,
	//  SecondForestyArea:  String  ,
	//  ThirdForestyArea:  String  ,
	//  ForthForestyArea:  String  ,
	//  FifthForestyArea:  String  ,
	//  Link: String ,
	//  Description:  String  ,
	//  SuitableSoil:  String  ,
	//  SuitableSoilPH: String ,
	//  SuitableSoilSalt: String   ,
	//  LowestTemp: String ,
	//  SuitableAltitude:  String  ,
	//  FirstUsage1:  String  ,
	//  FirstUsage2:  String  ,
	//  SecondUsage1:  String  ,
	//  SecondUsage2: String   ,
	//  ThirdUsage1:  String  ,
	//  ThirdUsage2: String   ,
	//  ForthUsage1: String   ,
	//  ForthUsage2: String   ,
	//  FifthUsage1: String   ,
	//  FifthUsage2: String   ,
	//  SinglePic: String   ,
	//  LocalPic: String   ,
	//  AreaPic: String   ,
	//  Id: Number 
	Family:String,
	Genus:  String,
	SpecimenID:String,
	Ke:String,
	Shu:String,
	ScientificName: String,
	CHN_Name:  String,
	Collector:  String,
	CollectorAge:  Number,
	CollectorDay:  String,
	CollectCountry: String,
	CollectProvince:  String,
	CollectCounty:  String,
	Altitude: Number,
	Appraiser: String   ,
	AppraiserAge: Number ,
	AppraiserDay:  String  


  });

// var test = new mongoose.Schema({
//     name: String ,
//     age: String
// })
//创建model
var foresty=mongoose.model('forest',forestySChema,'plants')
// var test2=mongoose.model('tes',test)


module.exports={

    searchByKeyWord:function(par){
         
        const query={}
        query.采集地(县)=new RegExp(par)
		console.log(query)
        return foresty
        .find(query)
        .exec()//使得异步

        // foresty.find( {Ke:'豆科'},function (err, kittens) {
        //     if (err) return console.error(err);
        //     console.log(kittens);
        //   })
    },
    insert:function(){

        var t=new test2({name:'ttt'})
        t.save(function (err, fluffy) {
            if (err) return console.error(err);
             
          });
    }

} 