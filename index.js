var NumOfStacks;
var Rest;

function submit() {
NumOfStacks = document.getElementByID("stack-of-64").value;
Rest = documemt.getElementByID("partial-stack").value;
document.getElementByID("total-items").value = NumOfStacks * 64 + Rest;
};