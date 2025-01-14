
const User =require('../../Schema/UserSchema/CommonSchema/Userschema');

const History = require('../../Schema/UserSchema/HistorySchema/History');
const bcrypt = require('bcrypt')

const jwt      = require('jsonwebtoken')



exports.userResister= async (req,res) =>{

     const {name,phone,email,password} = req.body.data;
     
   

    if(!name||!phone||!email||!password)    
    {
       return res.status(400).send("enter the data first ");
    }

    const obj = await User.findOne({email});
            
    if(obj)
    {
      
       return res.status(409).send("already resgistrerd"); 

    }

    const newUser =  await new User({name,email,phone,password});
 
   
   
  
     await newUser.save()
     .then(async(use)=>{
   
            const userId = use._id;
 
      
     const nH = await new History({userId,cropPredicted:[],MarketVisited:[],NurseryVisited:[],LaboratoryVisited:[]});
      nH.save()
      .then(()=>{
       console.log("history is created"); 
     })
      .catch((er)=>{
       console.log(er);
     })
      

        
       res.status(200).send("user rigistered successfully");
     })
     .catch((err)=>{
        console.log(err);
        res.status(500).send("internal server error");
     })


}





exports.userLogin = async (req,res) =>{

    const {email,password} = req.body.data;

    console.log(req.body
        )

    if(!email||!password)
    {
        return res.status(400).json({message:"enter the data first "});
    }
    const us = await User.findOne({email})
    
    if(us)
    {

    
     const isMatch = await bcrypt.compare(password,us.password);
 
        if(!isMatch)
        {
            return res.status(401).send("incorrect password")
        }



     const token= await us.generateAuthToken() 

 

    res.cookie("jwtoken",token,{
      
        expires:new Date(Date.now()+25892000000),
        httpOnly:true   
    }); 

   
     
      
    (token)?res.status(200).send({
   
              message:"login success" 
    }).status(200):res.status(500).json({message:"internal server error"});


    
    }else{
     res.status(404).send({message:"user not found please register first"})
 
    }
  
}




exports.userLogout = async (req,res)=>{
    try{

        res.cookie('jwtoken','', {maxAge: 1});
        res.status(200).json({message:"token deleted"});
    }
    catch(err)
    {
        res.status(500).json({mess:"internal server error"})
    }
}


exports.getUser = async(req,res)=>{
    res.status(200).send(req.rootuser);
}


// done
exports.adddp = async (req,res)=>{
    const userId = req.rootuser._id;
    console.log(req.body); 

    const profilpic =req.file.filename;


    User.findOneAndUpdate({_id:userId},{$set:{profilpic}})
    .then((resp)=>{
        res.status(200).send("profile picture uploaded successfully");

    })
    .catch((e)=>{ 
        res.status(500).send("internal server error");
    })


}

//done
exports.userProfileUpdate = async (req,res)=>{
    const userId = req.rootuser._id;

    const {name,email,phone}= req.body;
    await User.findOneAndUpdate({_id:userId},{$set:{name,email,phone,created_at:new Date()}})
    .then((user)=>{
        console.log(user);
        res.status(200).send(user);
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send("internal server error");
        
    })
}