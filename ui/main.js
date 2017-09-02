

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
    var num=document.getElementById('number_recipent').value;
    var group=document.getElementById('h');
    var opt = group.options[group.selectedIndex];
    window.alert(group.text);
    
   // var s='/'+num;
//    window.open(s);
    
}