const express = require('express')

const app = express()
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.get('/',function(req,res){
	res.send('<h1>Hello world</h1>')
})	
app.get('/data',function(req,res){
    const user = "xiaoming"
    res.json({user});
})

app.get('/jsonp',function(req,res){
    const user = "xiaoming"
    const data = {user}
    res.send('callback('+JSON.stringify(data)+')');
})
// app.get('/delete',function(){

// })
app.listen(9093,function(){
	console.log('Node app start at port 9093')
})