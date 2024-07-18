function greet() {
  console.log("Hello User");
  console.log("Have a nice day");
}
greet();

const namesArray = ["rajesh", "suresh", "ganesh", "dinesh", "naveen"];

function greet2(userNames) {
  for (const name of userNames) {
    if (name) {
      console.log(`Welcome ${name}`);
      console.log(`Have a wonderfull day${name}`);
    } else console.log("Welcome User");
  }
}

greet2(namesArray);
