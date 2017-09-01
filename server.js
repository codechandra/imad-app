var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');
var app = express();
var Pool=require('pg').Pool;

app.use(morgan('combined'));
var config={
    user:'codechandra',
    database:'http://db.imad.hasura-app.io',
    host:'5432',
    password:'db-codechandra-48847'
};
var pool=new Pool(config);

app.get('/test-db',function(req,res){
   pool.query('select *from user',function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           res.send(JSON.stringify(result));
       }
   }) ;
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'evm.html'));
});
app.get('/thankyou.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'thankyou.html'));
});
app.get('/signup.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'signup.html'));
});
function hash(input,salt){
    var hashed=crypto.pbkdf2Sync(input,salt,10000,512, 'sha512');
    return hashed.toString('hex');    
    
}
app.get('/vote.html',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'vote.html'));
})

app.get('/hash/:input', function (req, res) {
    var hashedString=hash(req.params.input,'this-is-some-random-string');
  res.send(hashedString);
});
app.get('/forgot.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'forgot.html'));
});
app.get('/article', function (req, res) {
  res.send('Hi');
});
var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
