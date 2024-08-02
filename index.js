const express = require("express");
const xlsx= require("xlsx");
const cors = require("cors");
const app = express();
app.use(cors())

//require('dotenv').config()
const PORT = process.env.PORT || 3030;
//console.log(process.env.ali);
let wb=xlsx.readFile("data.xlsx");
let ws=wb.Sheets["Sheet1"];
let data=xlsx.utils.sheet_to_json(ws);
console.log(data);


// your code

app.get('/', function (req, res) {
    res.send('Hello World')
  })

 app.get('/students', function (req, res) {
  // var data=[{id:1,name:"ali"},{id:2,name:"mhmd"},
  //   {id:3,name:"dania"},{id:4,name:"kristina"}
  // ]
  
    res.send(data);
  })

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});