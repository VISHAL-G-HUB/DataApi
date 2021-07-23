const express =require('express');
const app=express();
const mongoose=require('mongoose');
//route
const cors=require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))
let PORT= process.env.PORT||3000;
const postsRoute=require('./routes/posts');

app.use('/posts',postsRoute);



//mongo
mongoose.connect('mongodb+srv://vishal:vishal@30@cluster0.iae4l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true },
 ()=>(console.log('connected'))
 );
 app.get('/',(req,res)=>{
    res.send('we');
})
app.listen(PORT);