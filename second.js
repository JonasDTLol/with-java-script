

// this is just to test console log //

let username = "Alice";    
let userAge = 24;          
let userIsBlocked = false; 

let userIsLoggedIn = false;
let goToPage = "";

if (username !== "" && userAge >= 18 && !userIsBlocked) {
    userIsLoggedIn = true;
    goToPage = "/home";
    console.log("Welcome!");
} else {
    console.log("Error: Unable to log in. Please check your credentials and status.");
}

console.log(`User is logged in: ${userIsLoggedIn}`);
console.log(`Redirect to: ${goToPage}`);




