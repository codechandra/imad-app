

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
    var num=document.getElementById('number_donor').value;
    var group=document.getElementById('donor_group');
    var opt = group.options[group.selectedIndex].text;
    var donor_name=document.getElementById('name_donor').value;
    var s='/donor/'+num+'$'+opt+'$'+donor_name;
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/donor", true);
  xhttp.send();
   
    
}
function recipent()
{
    var num=document.getElementById('number_recipent').value;
    var group=document.getElementById('recipent_group');
    var opt = group.options[group.selectedIndex].text;
    var recipent_name=document.getElementById('name_recipent').value;
    var s='/recipent/'+num+'$'+opt+'$'+recipent_name;
   var d=window.open(s);
   
    
}
