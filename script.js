// Create a empty array to store the names here 
let names = [];

// create a function that can add names to the array and print it in the list here 
function addName(){
let name = document.getElementById("name").value;
names.push(name);
console.log(names);
let ul = document.getElementById("namesList");
ul.innerHTML += "<li>" + name + "</li>";
}


// create a function that can remove the last name from the array and print it in the list here 
function removeName(){
names.pop();
let namesList = document.getElementById("namesList");
namesList.removeChild(namesList.lastChild);
console.log(names);
}





