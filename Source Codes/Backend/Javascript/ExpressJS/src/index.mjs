import express from "express"


const app = express()
app.use(express.json());


const PORT = process.env.PORT|| 3001;





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




app.get("/api/users/:id",(req, res)=>{
const parsedId = parseInt(req.params.id)

if(isNaN(parsedId)){
    return res.status(400).send("Bad Request ")
}


const findUser = mockUsers.find((data)=>data.id==parsedId)
if(findUser ==null){
    return res.status(400).send({msg:"User not found"})
}
else{
    return res.status(200).send(findUser);
}






})


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










app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})



