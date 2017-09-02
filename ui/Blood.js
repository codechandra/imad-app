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

function need()
{
  document.getElementById('needd').style.display='block';
    document.getElementById('donatee').style.display='none';
}
function donate()
{
  document.getElementById('donatee').style.display='block';
  document.getElementById('needd').style.display='none';
}

function search_donor()
{
    window.alert(document.getElementById('number_recipent').value);
}
function search_recipent()
{
    var recipentNumber=document.getElementById('number_recipent').value;
    pool.query('INSERT into donor (mobile) VALUES (recipentNumber)',function(err,result){
        if(err){
           res.status(500).send(err.toString());
       }
       else
       {
           res.send("success");
       }
    });
    
}