function submit() {
   var NumOfStacks = document.getElementById("stacks-of-64").value;
   var Rest = document.getElementById("partial-stack").value;
   document.getElementById("total-items").innerText = +NumOfStacks * 64 + +Rest;
}
