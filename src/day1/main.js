const express = require("express");
const app = express();
const port = 3100;
var username = "Srinidhi";

// get api 
app.get('/', (req, res) => {
    if(username == null){
        res.send('Hello World!')
    } else{
        res.send(`hello ${username}`)
    }
  });

// post api
  app.post('/',function(req,res){
    var htmlData = `Hello ${username}`;
    // returns error message when username is null
    if(username == null){
        res
          .status(400)
          .json({ message: "no data provided" })
      }else{          
        // else returns the data passed 
        res.send(htmlData);
        console.log(htmlData);
      }
 });

  app.listen(port)