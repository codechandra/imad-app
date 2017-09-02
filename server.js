var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');
var app = express();
var Pool=require('pg').Pool;

app.use(morgan('combined'));
var config={
    user:'codechandra',
    database:'codechandra',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var pool=new Pool(config);
pool.connect();
app.get('/test-db',function(req,res){
   pool.query('SELECT *FROM article',function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           res.send(JSON.stringify(result.rows));
       }
   }) ;
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input,salt){
    var hashed=crypto.pbkdf2Sync(input,salt,10000,512, 'sha512');
    return hashed.toString('hex');    
    
}


app.get('/hash/:input', function (req, res) {
    var hashedString=hash(req.params.input,'this-is-some-random-string');
  res.send(hashedString);
});

app.get('/donor/:id',function(req,res){
    var value=req.params.id;
    var m=value.split('$');
    var one=(m[0]);
    var two=(m[1]);
    var three=m[2];
    pool.query('INSERT INTO donor(donor_mobile,donor_group,donor_name) VALUES ($1,$2,$3)',[one,two,three],function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           res.send('success');
       }
   }) ;
    
});
app.get('/recipent/:id',function(req,res){
    var value=req.params.id;
    var m=value.split('$');
    var one=(m[0]);
    var two=(m[1]);
    var three=m[2];
    console.log(two);
    pool.query('SELECT donor_name,donor_mobile FROM donor WHERE donor_group=$1 ',[two],function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           var data=result.rows[0];
           res.send(Object.values(data));
       }
          
       
       
   }) ;
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
