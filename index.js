function submit1() {
   var NumOfStacks = document.getElementById("stacks-of-64").value;
   var Rest = document.getElementById("partial-stack").value;
   document.getElementById("total-items").innerText = +NumOfStacks * 64 + +Rest;
}

function submit2() {
   var totalItems = document.getElementById("total-items-input").value;
   var stackCount = Math.floor(+totalItems/64);
   var remaining = +totalItems % 64;
   document.getElementById("stacks").innerText = `${stackCount} stacks and ${remaining}`;
}
