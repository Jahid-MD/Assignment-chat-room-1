const express = require("express");

const router = express.Router();

router.get("/users" , (req,res) => {
    res.json([ {name : "Mohammed Zahid"} , {  name : "Vikas M" },{name:"Avayananda K"}   ]  )
} );

router.get("/products",(req,res)=>{
    res.json([{name:"HP Laptop"},{name:"Lenevo Laptop"},{name:"Ipad"}])
})

module.exports = router
