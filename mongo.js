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
//server.js
const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res) =>
{
    res.send("welcome to the page")
});
app.use(express.json());
app.get('/home/:id',(req,res)=>
{
    const userId=req.params.id;
    res.send(`userid is :${userId}`)

})
app.get('/search',(req,res)=>
{
    const query=req.query.q;
    const page=req.query.page||1;
    res.send(`search query is :${query} and page number is ${page}`);

})
app.get('/name',(req,res)=>
{
    const name="sample";
    res.status(201).send(` name sent was :${name}`);
})
app.get('/info',(req,res)=>
{
    const fullurl=`${req.protocol}://${req.get('host')}${req.originalUrl}`;
    res.send(`the full url is :${fullurl}`);
})

app.listen(port,()=>
{
    console.log(`server is running at  https://localhost:${port}`)
});
