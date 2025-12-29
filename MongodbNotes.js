//Mongodb --> it is a popular open source No sql database . instead of using  tables and rows like traditional database,it uses JSON like object to stroe data

// Database --> collection --> document(data)


// Commands -->

//1) TO view all database --> show dbs
//2) create a new Database or use any existing Database --> use DatabaseName
//3) create a collection --> db.createCollection('collectionName)

// Insert Data inside collection --> 
    // a) insert single Data --> db.collectionName.insertOne({key:value})
    // example --> db.users.insertOne({name:"one",email:"one@gmail.com"})

    //b) insert multiple Data --> db.collectionName.insertMany( [ {} , {}] )

    

// 4) find all data present inside a collection --> db.collectionName.find()
// 4) find a particular single data present inside a collection --> db.collectionName.findOne({key:value})