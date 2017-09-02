

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
    var s='/'+num+'$'+opt+'$'+donor_name;
   window.open(s);
    
}