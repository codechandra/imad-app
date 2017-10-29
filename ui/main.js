function login_fun()
{
    document.getElementById('login').style.display="block";
     document.getElementById('register').style.display="none";
}
function register_fun()
{
     document.getElementById('login').style.display="none";
      document.getElementById('register').style.display="block";
}
function register_buyer()
{
    document.getElementById('buyer_register').style.display="none";
     document.getElementById('seller_register').style.display="block";
}
function register_seller()
{
    document.getElementById('buyer_register').style.display="block";
     document.getElementById('seller_register').style.display="none";
}
function home_fun()
{
    document.getElementById('login').style.display="none";
     document.getElementById('register').style.display="none";
     document.getElementById('home').style.display="block";
}