var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');
var app = express();
var Pool=require('pg').Pool;
var app=express();
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

function donor()
{
    var num=getElementById('number_recipent').value;
    window.open('/'+ num);
    
}