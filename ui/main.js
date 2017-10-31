function login_fun()
{
    document.getElementById('login').style.display="block";
     document.getElementById('register').style.display="none";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="none";
     document.getElementById('an').style.display="none";
     
}
function register_fun()
{
     document.getElementById('login').style.display="none";
     document.getElementById('register').style.display="block";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="none";
     document.getElementById('an').style.display="none";
}
function register_buyer()
{
    /*document.getElementById('login').style.display="none";
     document.getElementById('register').style.display="block";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="none";
     document.getElementById('achievements').style.display="none";*/
      document.getElementById('buyer_register').style.display="block";
       document.getElementById('seller_register').style.display="none";
}
function register_seller()
{
    /*document.getElementById('login').style.display="none";
    document.getElementById('register').style.display="block";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="none";
     document.getElementById('achievements').style.display="none";*/
      document.getElementById('buyer_register').style.display="none";
       document.getElementById('seller_register').style.display="block";
}
function home_fun()
{
   document.getElementById('login').style.display="none";
     document.getElementById('register').style.display="none";
     document.getElementById('home').style.display="block";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="none";
     document.getElementById('an').style.display="none";
}
function aboutus_fun()
{
 document.getElementById('login').style.display="none";
     document.getElementById('register').style.display="none";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="block";
     document.getElementById('contact').style.display="none";
     document.getElementById('a').style.display="none";   
}
function achievements_fun()
{
    document.getElementById('login').style.display="none";
     document.getElementById('register').style.display="none";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="none";
     document.getElementById('an').style.display="block";   
}
function contact_fun()
{
    document.getElementById('login').style.display="none";
     document.getElementById('register').style.display="none";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="block";
     document.getElementById('an').style.display="none";
}
function s()
{
     document.getElementById('register').style.display="block";
     document.getElementById('home').style.display="none";
      document.getElementById('buyer_register').style.display="none";
      document.getElementById('seller_register').style.display="block";
}
function b()
{
     document.getElementById('register').style.display="block";
     document.getElementById('home').style.display="none";
      document.getElementById('buyer_register').style.display="block";
       document.getElementById('seller_register').style.display="none";
}
var s;
function buyerregister_form()
{
    var name,contact,email,password;
    name=document.getElementById('buyer_name').value;
    contact=document.getElementById('buyer_contact').value;
    email=document.getElementById('buyer_email').value;
    password=document.getElementById('buyer_password').value;
   // window.alert(name+contact+email+password);
    s="/buyerregister/";
     var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     d=(JSON.parse(this.responseText));
     l=d.length;
    }
  };
  xhttp.open("GET", s, true);
  xhttp.send();
   window.alert(d);
    
    
}
