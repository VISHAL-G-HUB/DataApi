const express =require('express');
const app=express();
const mongoose=require('mongoose');
//route
const cors=require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))

const postsRoute=require('./routes/posts');

app.use('/posts',postsRoute);


app.get('/',(req,res)=>{
    res.send('we');
})
//mongo
mongoose.connect('mongodb+srv://vishal:vishal@30@cluster0.iae4l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true },
 ()=>(console.log('connected'))
 );
app.listen(3000);