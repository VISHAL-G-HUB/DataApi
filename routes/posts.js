const express= require('express');

const router=express.Router();
const Post=require('../models/Post');
//get all data
router.get('/',async (req,res)=>{
    try{
        const posts=await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({message:err});
    }
}); 

router.post('/send',async(req,res)=>{
    console.log(req.body)
  const post= new Post({
    Location:req.body.Location,
    Date:req.body.Date,
    w2al:req.body.w2al,
    w3al:req.body.w3al,
    lcval:req.body.lcval,
    busal:req.body.busal,
    w2ar:req.body.w2ar,
    w3ar:req.body.w3ar,
    lcvar:req.body.lcvar,
    busar:req.body.busar,
    w2bl:req.body.w2bl,
    w3bl:req.body.w3bl,
    lcvbl:req.body.lcvbl,
    busbl:req.body.busbl,
    w2br:req.body.w2br,
    w3br:req.body.w3br,
    lcvbr:req.body.lcvbr,
    busbr:req.body.busbr,
    w2cu:req.body.w2cu,
    w3cu:req.body.w3cu,
    lcvcu:req.body.lcvcu,
    buscu:req.body.buscu,
    w2cd:req.body.w2cd,
    w3cd:req.body.w3cd,
    lcvcd:req.body.lcvcd,
    buscd:req.body.buscd,
    w2du:req.body.w2du,
    w3du:req.body.w3du,
    lcvdu:req.body.lcvdu,
    busdu:req.body.busdu,
    w2dd:req.body.w2dd,
    w3dd:req.body.w3dd,
    lcvdd:req.body.lcvdd,
    busdd:req.body.busdd,
  });
  try{
      const savedPost=await post.save();
      res.json(savedPost);
  }
  catch (err){
    res.json({message:err});
  }
});
module.exports =router;