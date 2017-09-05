var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');
var app = express();
var Pool=require('pg').Pool;
app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'views'));

app.use(morgan('combined'));
//app.use('/views/ui',express.static());
var config={
    user:'codechandra',
    database:'codechandra',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};
app.get('/renderr',function(req,res){
    res.render('donor',{title:'mouli'});
});
app.get('/haiii',function(req,res){
    res.send("hello");
});

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
app.get('/hai', function (req, res) {
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
            var value=req.params.id;
            var three=m[2];
           res.send("<center><body style='background-color:green;margin-top:20%'><h1 >Thank you "+three+" for being kind we'll inform you in need. </h1></body></center>");
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
         
          /* var data=result.rows;
           var s=[];
           var mobileNumber=[];
           var name_list=[];
           var i=0;
           s=data;
          s.forEach(function (arrayElem){ 
            mobileNumber[++i]=arrayElem.donor_mobile;
            name_list[++j]=arrayElem.donor_name;
    });*/
        if(result.rows.length===0)
        {
            res.send("<body style='background-color:green'><h1 >Sorry we couldn't help you at this time.Hoping that everything goes well.</h1></body>");
            
        }
        else
        res.send((result.rows));
        /*  res.send("<body ng-controller='CountryCtrl'><h2>Donor list</h2> <table><tr><th>Mobile number</th><th>Blood group</th><th>Name</th></tr><tr ng-repeat='country in data '><td>{{JSON.stringify(result.rows).donor_mobile}}</td><td>{{JSON.stringify(result.rows).donor_name}}</td><td>{{JSON.stringify(result.rows).donor_group}}</td></tr> </table></body>")
          */
        
       
       }
          /*var data=[];
          data=(result.rows);
          var i, item;
for (i = 0; i < data.length; i++) {
    for (item in data[i]) {
        res.send(item + ": " + data[i][item] + "<br>");
    }
}
    */
         
       
       
   }) ;
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('ui/2017_5$largeimg04_May_2017_174117811.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '2017_5$largeimg04_May_2017_174117811.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
