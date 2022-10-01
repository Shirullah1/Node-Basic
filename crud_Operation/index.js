 // require mongobd
 const dotenv = require('dotenv')
 dotenv.config()
 const  MongoClient = require('mongodb').MongoClient

 MongoClient.connect(process.env.CONNECTIONSTRING, async function(err,client){

  try {const db = client.db('CarList')

  const Collection = db.collection('Cars')

  const findData =  await Collection.find().toArray()
  console.log (findData)
  //const createDocument =await Collection.insertOne({name:'new model',price:'5600000',code:12})
  //console.log('Added new Document')
//   const filter = { name: "new model" };
//         const options = { upsert: true };
//         const updateDoc = {
//             $set: {
//                 name: ["old model"]
//             },
//         };
//         const upDatedocument = await Collection.updateOne(filter, updateDoc, options);
  
//   console.log('Updated document')


// let DeleteItem={price:'5600000'}
//    const deleteDocument = await Collection.deleteOne(DeleteItem,function (error) {
//         if(error){
//             console.log("Data Delete Fail");
//         }
//         else{
//             console.log("Data Delete Success");
//         }
//     });

//     console.log('Document Deleted')
  client.close()



 } catch(err){
    console.log('can not find')
 }
 })