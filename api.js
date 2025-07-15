const express = require('express');
const mongoose = require('mongoose');

const app=express();
app.use(express.json());
//connect 
mongoose.connect("mongodb+srv://madhan:1705@cluster0.vjwltao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") .then(() => {
    console.log("database connected");
    
}).catch((err) => {
    console.log(err);
    
});

//schema
const empSchema=mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    Sal:{
        type:Number,
        required:true
    }
})
//model
const empModel=mongoose.model("api",empSchema);

//insert
app.post("/add",async (req,resp)=>{
    try {
        const data= new empModel({name: req.body.name,Sal: req.body.Sal});
    const result=await data.save();
    resp.json(result);
    } catch (error) {
        console.log(error.message);
        
    }
})
//update
app.get("/fetch",async (req,resp)=>{
   try {
     const result= await empModel.find();
    if (result) {
        resp.json(result);
    }else{
        resp.json("not found");
    }
   } catch (error) {
    console.log(error);
    
   }
})

//delete
app.delete("/remove/:id",async (req,resp)=>{
     const result=await empModel.findByIdAndDelete(req.params.id);
     if(!result){
        resp.json("not found");
     }else{
        resp.json("deleted");
     }
})

app.patch("/update/:id",async(req,resp)=>{
   try {
     const result= await empModel.findByIdAndUpdate(req.params.id,req.body);
    if (!result) {
        resp.json("not found")
    }else{
        resp.json("updated");
    }
   } catch (error) {
    console.log(error);
    
   }
})
//server
app.listen(4000,()=>{
    console.log("server running...");
    
})