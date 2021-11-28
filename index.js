const express = require("express");
const app = express();
const port = 8080;
const user_Product_Routes = require("./router.js")
const isAdmin=true;
const isdminMiddleware=(req,res,next)=>{
    if(isAdmin==true){
        next()
    }else{
        res.status(401).send("Unauthorised")
    }
}
app.use(isdminMiddleware)
app.use(express.json());

app.use(user_Product_Routes );

app.get("/" , (req,res) => {
    res.send("server started")
});



app.use( "*" , (req,res) => {
res.status(404).send("404 not found")
} )


app.listen(port , () => {
    console.log(`server starting running on port ${port}`)
}   )