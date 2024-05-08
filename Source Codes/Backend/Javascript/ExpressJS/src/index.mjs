import express, { response } from "express"


const app = express()
app.use(express.json());


const resolveIndexByUserId = (req, res, next) =>{

    const {params:{id}, } = req;

    const Id = parseInt(id)
    
    if(isNaN(id)){
      return res.status(400).send("Id is not a number")
    }

    const findUserIndex = mockUsers.findIndex( (data)=>data.id===Id)

        if(findUserIndex === -1){
      return  res.status(404).send({msg:"User not found"})
    }

    //We can dynamically assign values to the req object, since we cannot pass data from one middleware to the other

    req.findUserIndex = findUserIndex;
    req.Id = Id;
    next();

}

























const PORT = process.env.PORT|| 3001;





app.get("/",
(req,res)=>{
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


app.put("/api/users/:id",resolveIndexByUserId,(req,res)=>{
//Destructure the findUserIndex and Id from the request
const {body,findUserIndex,Id} = req;

const old = mockUsers[findUserIndex]
mockUsers[findUserIndex] = {id:Id, ...body}

const wow = [{
    "Old":old
},{"New":mockUsers[findUserIndex]}]


return res.send(wow)

    

})


app.patch("/api/users/:id",resolveIndexByUserId ,(req,res)=>{

    const {body,findUserIndex} = req;

    mockUsers[findUserIndex] = {...mockUsers[findUserIndex], ...body};

 
    return res.send( mockUsers[findUserIndex] )


})


app.delete("/api/users/:id",(req, res)=>{

    const {params:{id} } = req;
    const Id = parseInt(id)
    const uIndex = mockUsers.findIndex((data)=>data.id===Id);

    if(uIndex<0){
        return res.send({msg:"User not found"})
    }

    if(isNaN(Id)){
        return res.send({msg:"Imvalid Id"})
    } 
/*
Find the array of the element you want to delete
const uIndex = mockUsers.findIndex((data)=>data.id===Id);

Delete the array and make the count 1, otherwise it will delete all the 
    mockUsers.splice(uIndex,1)



*/
    mockUsers.splice(uIndex,1)



    return res.send(mockUsers)

})













app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})



