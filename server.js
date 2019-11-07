const express=require('express');
const app=express();
const path =require('path');
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"/dist/upapp/index.html"));
});
app.use(express.static(__dirname+ "/dist/upapp"));
app.listen(process.env.PORT || 3000,()=>{console.log('server on')});
