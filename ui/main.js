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
    var d,error="";
    var num=document.getElementById('number_donor').value;
    
    var group=document.getElementById('donor_group');
    var opt = group.options[group.selectedIndex].text;
    var donor_name=document.getElementById('name_donor').value;
    var s='/donor/'+num+'$'+opt+'$'+donor_name;
    if(num.length<10)
    {
       error+="Please enter a valid mobile number\n";
       
    }
    if(donor_name==="")
    {
        error+="please enter your name";
    }
    if(error!=="")
    {
        document.getElementById('id03').style.display="block";
       document.getElementById('msg').innerHTML=error;
       return false;
    }
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   
   document.getElementById('id02').style.display="block";
   document.getElementById('m').innerHTML=donor_name;
    document.getElementById("name_donor").value = "";
   document.getElementById("number_donor").value= "";
    }
  };
  xhttp.open("GET", s, true);
  xhttp.send();
}
var i=0,l=0;
function recipent()
{
   
    var num=document.getElementById('number_recipent').value;
    var group=document.getElementById('recipent_group');
    var opt = group.options[group.selectedIndex].text;
    var recipent_name=document.getElementById('name_recipent').value;
    var s="/recipent/"+num+"$"+opt+"$"+recipent_name;
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementById("main").style.display = 'none';
    document.getElementById("demo").style.display = 'block';
     d=(JSON.parse(this.responseText));
     l=d.length;
     document.getElementById("1").innerHTML = d[i]["donor_name"];
    document.getElementById("2").innerHTML = d[i]["donor_mobile"];
    document.getElementById("3").innerHTML = d[i]["donor_group"];
    }
  };
  xhttp.open("GET", s, true);
  xhttp.send();
  }
  function nextt(){
      i++;
      if(i==l)
      {
          document.getElementById('id01').style.display="block";
          
          
      }
      else
      {
       document.getElementById("1").innerHTML = d[i]["donor_name"];
    document.getElementById("2").innerHTML = d[i]["donor_mobile"];
    document.getElementById("3").innerHTML = d[i]["donor_group"];
      }
  }
 function end()
 {
     document.getElementById('id01').style.display='none';
     window.open('/');
     window.close();
 }
    