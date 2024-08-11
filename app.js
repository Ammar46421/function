// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     alert("Current time: " + theHr + ":" + theMin);
// }


function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    alert("current time: "+ theHr + ":" + theMin);
}

console.log(tellTime)

function greetUser() {
    alert("hello")
}

let todaysDate = new Date();
let dateInString = todaysDate.toString();

// document.write(`<div class="card">
// <h4>Printing Today's Date in Browser</h4>
// <span>${dateInString}</span>
// </div>`);

document.write(`<div class="card"> 
    <h4>Printing Today's Date in Browser</h4>
    <span>${dateInString}</span>
    </div>`);