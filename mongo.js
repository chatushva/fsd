const {MongoClient} = require('mongodb');
const uri="mongodb+srv://immidisettichatushva:chat123@cluster0.j2ndcyu.mongodb.net/?appName=Cluster0";
const client= new MongoClient(uri);
async function run(){
    try{
        await client.connect();
        console.log("Connected to MongoDB");
        const db=client.db('schoolDB');
        const students=db.collection("students");
        await db.createCollection("teachers");
        console.log("Teachers collection created in school db");
        await students.insertOne({
            name:"kalyani",
            age:24,
            brach:"cse",
            grade:"a"
        })
        console.log("inserted one document in student collection");
        await db.collection("teachers").drop();
        console.log("techers connection is droped");
        await db.dropDatabase();
        console.log("schoolDB is dropped");
       
    }
catch(err)
{
    console.error(err);
}
finally{
    await client.close();
    console.log("Connection closed");
}

}
run();