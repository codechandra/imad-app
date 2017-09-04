

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
function recipent()
{
   
    var num=document.getElementById('number_recipent').value;
    var group=document.getElementById('recipent_group');
    var opt = group.options[group.selectedIndex].text;
    var recipent_name=document.getElementById('name_recipent').value;
    var s="/recipent/"+num+"$"+opt+"$"+recipent_name;
    document.getElementById("main").style.display = 'none';
    var d=JSON.parse(this.responseText);
    var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get(s)
    .then(function (response) {$scope.names = response.data.records;});
});
     // document.getElementById("demo").innerHTML =d;
     // document.getElementById("demo").innerHTML = this.responseText;
    
 
   
   
    
}
