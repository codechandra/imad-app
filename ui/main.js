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
    var d;
    var num=document.getElementById('number_donor').value;
    var group=document.getElementById('donor_group');
    var opt = group.options[group.selectedIndex].text;
    var donor_name=document.getElementById('name_donor').value;
    var s='donor/'+num+'$'+opt+'$'+donor_name;
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        d=JSON.stringify(this.responseText);
    document.getElementById("main").style.display = 'none';
      document.getElementById("demo").innerHTML = d[0].donor_mobile;
    }
  };
  xhttp.open("GET", "/"+s, true);
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
       // d=JSON.parse(this.responseText);
    
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
          //document.getElementByid('nexttt').innerHTML="No more donors";
         //document.getElementByid('nexttt').disabled=true;
          
      }
      else
      {
       document.getElementById("1").innerHTML = d[i]["donor_name"];
    document.getElementById("2").innerHTML = d[i]["donor_mobile"];
    document.getElementById("3").innerHTML = d[i]["donor_group"];
      }
  }
/*var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.nam = f;*/

/*function geet(){
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("/hai")
    .then(function(response) {
        $scope.myWelcome = response.data;
        
    });
});
}*/
 function end()
 {
     document.getElementById('id01').style.display='none';
     window.open('/');
     window.close();
 }
    