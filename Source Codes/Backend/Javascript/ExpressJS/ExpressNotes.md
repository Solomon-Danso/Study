Welcome to my advance Express js tutorial, This tutorial is straight to the point  

[**********Setup**********]

npm init -y 
npm install express

# Package.json setup 
{
  "name": "expressjs",
  "version": "1.0.0",
  "description": "",
  "main": "index.mjs",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"nodemon ./src/index.mjs"
  
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  },
  "type":"module"
}

[**********Index.mjs Setup**********]
import express from "express"


const app = express()

const PORT = process.env.PORT|| 3000;


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

[---------Route------]

#GET Route 

import express from "express"


const app = express()

const PORT = process.env.PORT|| 3000;





app.get("/",(req,res)=>{
res.status(200).send({msg:"Kofi Money"})
})

const users = [
    {
        "id":1,
        "fname":"Solo",
    },

    {
        "id":2,
        "fname":"Danso",
    },

    {
        "id":3,
        "fname":"Kofi",
    },







]
app.get("/api/users",(req,res)=>{
    res.status(200).send({users})
})



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

# Route Parameters 

The parameters are the values we additional parameters we add to the url 
for Example 
http://localhost:3000/api/users/2
2 is a parameter


import express from "express"


const app = express()

const PORT = process.env.PORT|| 3000;





app.get("/",(req,res)=>{
res.status(200).send({msg:"Kofi Money"})
})

const mockUsers = [
    {
        "id":1,
        "fname":"Solo",
    },

    {
        "id":2,
        "fname":"Danso",
    },

    {
        "id":3,
        "fname":"Kofi",
    },

]


app.get("/api/users",(req,res)=>{
    res.status(200).send({msg:mockUsers})
})

app.get("/api/users/:id",(req, res)=>{
const parsedId = parseInt(req.params.id)

if(isNaN(parsedId)){
    return res.status(400).send("Bad Request ")
}


const findUser = mockUsers.find((user)=>user.id==parsedId)
if(findUser ==null){
    return res.status(400).send({msg:"User not found"})
}
else{
    return res.status(200).send(findUser);
}






})



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

# Query Selectors 
Query parameters are the additional parameters added to the URL. They exist after the question mark (?)

For example 
http://localhost:3000/api/users?search=Solo
{ search: 'Solo' } is the query parameters 

For this 
http://localhost:3000/api/users?filter=fname&value=Solo
from this Data 
const mockUsers = [
    {
        "id":1,
        "fname":"Solo",
    },

    {
        "id":2,
        "fname":"Danso",
    },

    {
        "id":3,
        "fname":"Kofi",
    },

]

This code will filter the fname field for the value provided 

app.get("/api/users",(req,res)=>{
    
    //Deconstructing query from request object 
    const {query:{filter, value}} = req;
    
    if(!filter && !value){
        return res.send({mockUsers})
    }
    
    if(filter && value){
      return res.send(
         
        mockUsers.filter((data)=>data[filter].includes(value))
         
         )
    }
    

    return res.send({mockUsers})

    
})


Install Thunder Client extension for vscode

# Post Request 
First, register your middleware, right at the top after the app constant is assigned to express

app.use(express.json());

Create a small post method 

app.post("/api/users",(req,res)=>{
    
    //Capture all the body from req
    const {body} = req;

    //Create a newUser Object 
    //id: get the index of the last object in the mockUser array 
    //Get the id and auto increase by 1

    //...body means pass all the body defined in the frontend into it
    const newUser = {
        id: mockUsers[mockUsers.length-1].id+1,
        ...body
    }

    mockUsers.push(newUser)

    res.status(201).send(mockUsers)
})

# Put Request 
 The key difference between a PUT and a PATCH request is, 
 PUT update the entire record, every single field  
 PATCH update just a portion of the record 

app.put("/api/users/:id",(req,res)=>{

    const {body, params:{id}, } = req;

    const Id = parseInt(id)
    
    if(isNaN(id)){
      return res.status(400).send("Id is not a number")
    }

    //This will find the index of the object in the array where it id is equal to the id provided
    const findUserIndex = mockUsers.findIndex( (data)=>data.id===Id)

        if(findUserIndex === -1){
      return  res.status(404).send({msg:"User not found"})
    }
/*
localhost:3001/api/users/2
return res.send(findUserIndex.toString())
the index is 1

return res.send(mockUsers[findUserIndex])
the result is 
{
  "id": 2,
  "fname": "Danso"
}



 */

const old = mockUsers[findUserIndex]
mockUsers[findUserIndex] = {id:Id, ...body}

const wow = [{
    "Old":old
},{"New":mockUsers[findUserIndex]}]


return res.send(wow)

    

})

The update data is 
{
  "username":"Solomon 1",
  "displayName":"Solomon The CTO"
}

The Result 
[
  {
    "Old": {
      "id": 2,
      "fname": "Danso"
    }
  },
  {
    "New": {
      "id": 2,
      "username": "Solomon 1",
      "displayName": "Solomon The CTO"
    }
  }
]


# Patch Request 









































































