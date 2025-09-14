function skillsMember()

{
{
    var skillsMember = document.getElementById("skillsMember");
    skillsMember.classList.toggle("show");
}
}

window.onclick = function(event) {
  if (!event.target.matches('.skillsMemberButton')) {

    var dropdowns = document.getElementsByClassName("skillsMemberContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}       