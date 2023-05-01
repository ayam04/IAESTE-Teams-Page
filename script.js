function GetHeads(Department) {
  var DepartmentHeads = document.getElementById('department-heads');
  var AllHeads = document.getElementById('all-heads');

  const children = DepartmentHeads.children;
  Array.from(children).forEach(Head => {
      AllHeads.appendChild(Head);
  });

  document.getElementById('department-name').innerHTML = Department;
  document.getElementById('selected-department').style.display = "block";
  var Heads = document.getElementsByClassName(Department.split(" ").join(""));
  for (var Index = 0; Index < Heads.length; Index++) {
      DepartmentHeads.appendChild(Heads.item(Index));
  };
}
