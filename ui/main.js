

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
    var recipent_name=document.getElementById('name_donor').value;
    var s='/'+num+'$'+opt+'$'+recipent_name;
   window.open(s);
    
}