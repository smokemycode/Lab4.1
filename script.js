function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        return "Invalid name input.";
    }
    let fName - firstName[0.toUpperCase() + firstName.slice(1).toLowerCase()]
}

console.log(formatFullName("newman", "jamie"));

function calculateTotalCost(price, quantity, taxRate) {
    let totalCost = (price * quantity) * (1+taxRate);
    if (typeof price === "number") {
        console.log("Valid Input.")
    } else {
        console.log("Invalid Input.")
        return "Invalid Input.";
    }
}