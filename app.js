const express=require('express');
const fs=require('fs');
const app = express()
 
app.get('/', function (req, res) {
res.writeHead(200, {"Content-Type":"video/mp4"});
  var rs=fs.createReadStream("82Y1ivwtME.mp4");
  rs.pipe(res);
})
 
app.listen(3000)