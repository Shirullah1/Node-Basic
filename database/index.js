const MongoClient = require('mongodb').MongoClient;
const URL ="mongodb+srv://MernProject:Xe191UyF4pnFLrws@cluster0.huxccab.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(URL,(error,MyMongoClient)=>{
if (error){
    console.log('Connection fail')
}else{
    console.log('Connection success')
     //InsertDaTa(MyMongoClient)
     DeleteOneItem(MyMongoClient)
    
}
})
 function InsertDaTa(MyMongoClient){
   let myDataBase = MyMongoClient.db('school')
   let myCollection =myDataBase.collection('students')

   let myData =[{name:'Abrar',id:'01',city:'Dhaka'},
   {name:'farjaana',id:'02',city:'Gazipur'},
   {name:'Shirullah',id:'03',city:'Rangpur'}]
   
   myCollection.insertMany(myData,(error)=>{
    if(error){
        console.log('DataInsert Fail')
    }else{
        console.log('DataInsert Success')
    }
   });
 }

 function DeleteOneItem(MyMongoClient){
    let myDataBase = MyMongoClient.db('school')
   let myCollection =myDataBase.collection('students')
   let DeleteItem={id:'01'}
   myCollection.deleteOne(DeleteItem,(error)=>{
    if(error){
        console.log('Data Delete Fail')
    }else{
        console.log('Data Delete Success')
    }
   })
 }