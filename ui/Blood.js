
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

function search_donor()
{
    window.alert(document.getElementById('number_recipent').value);
}
function search_recipent()
{
    var recipentNumber=document.getElementById('number_recipent').value;
    
}