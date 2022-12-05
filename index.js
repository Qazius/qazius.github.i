function submit() {
var NumOfStacks = document.getElementByID("stack-of-64").value;
var Rest = document.getElementByID("partial-stack").value;
document.getElementByID("total-items").innerText = +NumOfStacks * 64 + +Rest;
};
