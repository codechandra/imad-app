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
     size=document.getElementById('property_size').value;
     parea=document.getElementById('property_city').value;
      des=document.getElementById('pdesc').value;
        ptype=document.getElementById('property_type');
    var choice = ptype.options[ptype.selectedIndex].text;
    var s="/hello1/"+choice+"$"+area+"$"+size+"$"+des;
    
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
         document.getElementById('set').innerHTML=xhttp.responseText+" You've successfully registered as a seller on E-estate";
    }
};
xhttp.open("GET", s, true);
xhttp.send();
    
    
}
function sellerregister_form()
{
     var name,contact,email,password,ptype,parea,city,size,des;
    name=document.getElementById('seller_name').value;
    contact=document.getElementById('seller_contact').value;
    email=document.getElementById('seller_email').value;
    password=document.getElementById('seller_password').value;
     
    
    //window.alert(name+contact+email+password);
     var s="/hello/"+name+"$"+email+"$"+password+"$"+contact;
    
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
      // alert("Thank you "+xhttp.responseText+" You've successfullly registered as a seller on E-estate.please login to see your profile");
          //  login_fun();
          document.getElementById('seller_register').style.display="none";
          document.getElementById('property_register').style.display="block";
          
         //document.getElementById('id01').style.display='block';
         //document.getElementById('set').innerHTML=xhttp.responseText+" You've successfully registered as a seller on E-estate";
    }
};
xhttp.open("GET", s, true);
xhttp.send();
}