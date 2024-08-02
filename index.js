const express = require("express");
const app = express();
//require('dotenv').config()
const PORT = process.env.PORT || 3030;
//console.log(process.env.ali);

// your code

app.get('/', function (req, res) {
    res.send('Hello World')
  })

 app.get('/students', function (req, res) {
  var data=[{id:1,name:"ali"},{id:2,name:"mhmd"},
    {id:3,name:"dania"},{id:4,name:"kristina"}
  ]
    res.send(data);
  })

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});