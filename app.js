const express = require('express') ;
const app   = express()
const bodyparser = require("body-parser");
var cors = require("cors")

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.post("/products" , (req,res,next)=> {
 res.json("stt");
})

app.get("/products" , (req,res,next) =>{
    res.json("ss")
})
const mysql=require('mysql2');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:'node-complete',
    password: "nishu123"
  })

  app.post('/cartitems',(req,res,next)=>{
    console.log(req.body);
  
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = `INSERT INTO ecommerce (productid,name,price,quantity,img_src) VALUES ('${req.body.productid}','${req.body.name}','${req.body.price}','${req.body.quantity}','${req.body.img_src}')`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted",result);
      });
    });
  res.status(200).send();
  })





app.listen(9000)