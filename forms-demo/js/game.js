//This is for my truths and lie game

//global variable
let fname = "";
//mygreet function
function greet() {
    let greetParagraph = document.getElementById("greet");

    //get values from te form

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("Age").value;

    //show the results 
    greetParagraph.innerHTML = "Greetings " + age + " year old" + fname + " " + lname + "!";
}
function trivia() {
    let triviaAnswer = document.getElementById("trivia-answer");
    //get results
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;
    //process answers
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong stupid beta";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong stupid beta";
    } else {
        triviaAnswer.innerHTML = fname + ", correct! you are a genius!";
    }
}
