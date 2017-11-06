function login_fun()
{
    document.getElementById('login').style.display="block";
     document.getElementById('register').style.display="none";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="none";
     document.getElementById('an').style.display="none";
     document.getElementById('footer').style.display="none";
     
}
function login_form()
{
    var uname=document.getElementById('username').value;
     var pwd=document.getElementById('password').value;
    var login_type;
    if(document.getElementById('buyer').checked)
    login_type=1;
    else if(document.getElementById('seller').checked)
    login_type=2;
     else if(document.getElementById('admin').checked)
     login_type=3;
     //alert(uname+pwd+login_type);
     var s="/hai1/"+uname+"$"+pwd+"$"+login_type;
    if(login_type==1)
    {
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
       //var r=xhttp.responseText;
     // alert("Thank you "+r+"You've successfully registered as a buyer");
   // alert("Thank you "+xhttp.responseText+" You've successfullly registered as a buyer on E-estate.please login to see your profile");
    //  login_fun();
     /*document.getElementById('id01').style.display='block';
         document.getElementById('set').innerHTML=xhttp.responseText[0]+" You've successfully registered as a seller on E-estate";*/
         var d=(JSON.parse(xhttp.responseText));
         afterlogin_action(d);
         /* document.getElementById('login').style.display="none";
    document.getElementById('loginpage').style.display="block";
    document.getElementById('login_name').innerHTML=d[0]["cname"];
     document.getElementById('login_email').innerHTML=d[0]["cmail"];
      document.getElementById('login_number').innerHTML=d[0]["cmobile"];*/
    }
};
xhttp.open("GET", s, true);
xhttp.send();
}
    
    
    
}
function afterlogin_action(d)
{
    //document.getElementById('login').style.display="none";
     //document.getElementById('register').style.display="none";
     //document.getElementById('home').style.display="none";
      //document.getElementById('aboutus').style.display="none";
     //document.getElementById('contact').style.display="none";
     //document.getElementById('an').style.display="none";
     document.getElementById('title').style.display="none";
     document.getElementById('navigation_bar').style.display="none";
     
    document.getElementById('login').style.display="none";
    document.getElementById('loginpage').style.display="block";
    document.getElementById('login_name').innerHTML="HI, "+d[0]["cname"];
     document.getElementById('login_email').innerHTML=d[0]["cmail"];
      document.getElementById('login_number').innerHTML=d[0]["cmobile"];
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
function propertyregister_fun()
{
   /* document.getElementById('login').style.display="none";
     document.getElementById('register').style.display="block";
     document.getElementById('home').style.display="none";
      document.getElementById('aboutus').style.display="none";
     document.getElementById('contact').style.display="none";
     document.getElementById('an').style.display="none";
      document.getElementById('property_register').style.display="block";
      
     */
     var name=document.getElementById('plld').value;
     var size=document.getElementById('property_size').value;
    var  parea=document.getElementById('property_city').value;
     var des=document.getElementById('pdesc').value;
       var ptype=document.getElementById('property_type');
    var choice = ptype.options[ptype.selectedIndex].text;
    var s="/hello1/"+name+"$"+choice+"$"+parea+"$"+size+"$"+des;
    
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
       //var r=xhttp.responseText;
     // alert("Thank you "+r+"You've successfully registered as a buyer");
   // alert("Thank you "+xhttp.responseText+" You've successfullly registered as a buyer on E-estate.please login to see your profile");
    //  login_fun();
     document.getElementById('id01').style.display='block';
         document.getElementById('set').innerHTML=xhttp.responseText+" You've successfully registered as a seller on E-estate";
    }
};
    
     
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
  var s="/hai/"+name+"$"+email+"$"+contact+"$"+password;
    
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
       //var r=xhttp.responseText;
     // alert("Thank you "+r+"You've successfully registered as a buyer");
   // alert("Thank you "+xhttp.responseText+" You've successfullly registered as a buyer on E-estate.please login to see your profile");
    //  login_fun();
     document.getElementById('id01').style.display='block';
         document.getElementById('set').innerHTML=xhttp.responseText+" You've successfully registered as a buyer on E-estate";
    }
};
xhttp.open("GET", s, true);
xhttp.send();
    
    
}
function sellerregister_form()
{
     var namex,contact,email,password,ptype,parea,city,size,des;
    namex=document.getElementById('seller_name').value;
    contact=document.getElementById('seller_contact').value;
    email=document.getElementById('seller_email').value;
    password=document.getElementById('seller_password').value;
     
    
    //window.alert(name+contact+email+password);
     var s="/hello/"+namex+"$"+email+"$"+password+"$"+contact;
    
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
      // alert("Thank you "+xhttp.responseText+" You've successfullly registered as a seller on E-estate.please login to see your profile");
       //     login_fun();
        //  document.getElementById('seller_register').style.display="none";
          //document.getElementById('property_register').style.display="block";
          
         document.getElementById('id01').style.display='block';
         document.getElementById('set').innerHTML=xhttp.responseText+" You've successfully registered as a seller on E-estate";
    }
};
xhttp.open("GET", s, true);
xhttp.send();
}
function customer_update()
{
    document.getElementById('customerupdate').style.display='block';
    document.getElementById('customerbook').style.display='none';
    document.getElementById('cancelproperty').style.display='none';
    document.getElementById('login_main_display').style.display='none';
    
}
function customer_bookproperty()
{
     document.getElementById('login_main_display').style.display='none';
    document.getElementById('login_main_display').style.display='block';
     document.getElementById('customerupdate').style.display='none';
    document.getElementById('customerbook').style.display='block';
    document.getElementById('cancelproperty').style.display='none';
}
function customer_cancelproperty()
{
    document.getElementById('login_main_display').style.display='block';
    document.getElementById('customerupdate').style.display='none';
    document.getElementById('customerbook').style.display='none';
    document.getElementById('cancelproperty').style.display='block'; 
    if(confirm("Do you want to cancel booked property??")==true)
    window.alert("Booked property has been cancelled");
    
}
function customer_logout()
{
    if(confirm("Are you sure?? Do you want to logout??")==true)
      {
           document.getElementById('customerupdate').style.display='none';
    document.getElementById('customerbook').style.display='none';
    document.getElementById('cancelproperty').style.display='none'; 
      document.getElementById('loginpage').style.display='none'; 
      document.getElementById('title').style.display="block";
     document.getElementById('navigation_bar').style.display="block";
         home_fun(); 
      }
   
      //window.alert("you've successfully logged out");
      
      
       
     // alert("You've successfully logged out");
}
function oncustomer_profile_update()
{
    var name=document.getElementById('updated_customer_name').value;
    var mobile=document.getElementById('updated_customer_mobile').value;
    var email=document.getElementById('updated_customer_email').value;
    var password=document.getElementById('updated_customer_password').value;
    window.alert(name+mobile+email+password);
    
}