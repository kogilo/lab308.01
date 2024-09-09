
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Part 1: Math Problems

console.log("Part 1: Math Problems");

// console.log(length("Part 1: Math Problems")*"=")
// Implement the following:
    // Check if all numbers are divisible by 5. Cache the result in a variable.
let isDivbyFive = n1%5 ==0 && n2%5==0 && n3%5==0 && n4%5==0;
if (isDivbyFive == true){
    console.log(`Q#1 Is: ${isDivbyFive}, because all the numbers are divisible by five`)

} else {
    console.log(`Q#1 Is: ${isDivbyFive} because one or more of these numbers is not divisible by 5`)
}
    // Check if the first number is larger than the last. Cache the result in a variable.
let isn1lgthenn4 = n1 > n4;
if (isn1lgthenn4 == true) {
    console.log(`Q#2: Is  ${isn1lgthenn4} n1: ${n1}, IS larger  then n4: ${n4}`)
} else {
    console.log(`Q#2: Is  ${isn1lgthenn4} n1: ${n1}, IS NOT larger then n4: ${n4}`)
} 

    // Accomplish the following arithmetic chain:
    // Subtract the first number from the second number.
    let firstminussecond = n1 - n2;
console.log(`Q#3: ${n1} minus ${n2} is equal to ${firstminussecond}.`)
    // Multiply the result by the third number.
console.log(`Q#4: First number minus the second number, ${firstminussecond}, times the third number, ${n3} is equal to`, firstminussecond * n3)
    // Find the remainder of dividing the result by the fourth number.
let remainder = firstminussecond%n4
console.log(`Q#5: The remainder of dividing the result by the fourth number.`, remainder)
// Change the way that isOver25 calculates so that we do not need to use 
// the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
let is25LessThenN = 25<n1 || 25 < n2 || 25 < n3 || 25 < n4 
if (is25LessThenN == true) {
    console.log(`Q#6: There is at least one number which is over 25`)
}  else {
    console.log("Q#6: No larger than 25")
}

// Part 2: Practical Math
// Let’s look at a more practical scenario.
// You are planning a cross-country road trip!
// =====================================
// The distance of the trip, in total, is 1,500 miles.
let totalDistance = 1500; //in miles
let fuelBudget = 175; // $
let averageCostFuelPerGallon = 3 // $



// Your car’s fuel efficiency is as follows:
// First scenario
// ..01.. At 55 miles per hour, you get 30 miles per gallon.
let fuel55mph = 30;// miles per gallon.
let fuel60mph = 28; // miles per gallon.
let fuel75mph = 23; // miles per gallon.
console.log("==================PART-2========================================")
// ==========================================================
// Question:
// Q1 How many gallons of fuel will you need for the entire trip?
let gallonWith55mph = totalDistance / fuel55mph
let gallonWith60mph = totalDistance / fuel60mph
let gallonWith75mph = totalDistance / fuel75mph
console.log(`${gallonWith55mph} gallons of fuel will be needed for the entire trip while driving 55mph`)
console.log(`${gallonWith60mph} gallons of fuel will be needed for the entire trip while driving 60mph`)
console.log(`${gallonWith75mph} gallons of fuel will be needed for the entire trip while driving 75mph`)
// Q2. Will your budget be enough to cover the fuel expense?
// Q3. How long will the trip take, in hours?
// =============================================

// Calculate fuel expense for each speed
let fuelExpense55 = gallonWith55mph * averageCostFuelPerGallon;
let fuelExpense60 = gallonWith60mph * averageCostFuelPerGallon;
let fuelExpense75 = gallonWith75mph * averageCostFuelPerGallon;
// # Calculate the time taken for the trip at each speed
let time55 = totalDistance / 55;  // in hours
let time60 = totalDistance / 60;  // in hours
let time75 = totalDistance / 75;  // in hours
// Check if the budget is enough for each speed
let isbudgetEnough55 = fuelExpense55 <= fuelBudget;
let isbudgetEnough60 = fuelExpense60 <= fuelBudget;
let isbudgetEnough75 = fuelExpense75 <= fuelBudget;

// Print the results
console.log("For 55 MPH:");
console.log("Gallons Needed: " + gallonWith55mph.toFixed(2));
console.log("Fuel Expense: $" + fuelExpense55.toFixed(2));
console.log("Time: " + time55.toFixed(2) + " hours");
console.log("Is Budget Enough: " + (isbudgetEnough55 ? "Yes" : "No"));
console.log("======================================================")


// Print the results
console.log("For 60 MPH:");
console.log("Gallons Needed: " + gallonWith60mph.toFixed(2));
console.log("Fuel Expense: $" + fuelExpense55.toFixed(2));
console.log("Time: " + time60.toFixed(2) + " hours");
console.log("Is Budget Enough: " + (isbudgetEnough60 ? "Yes" : "No"));
console.log("======================================================")

// Print the results
console.log("For 75 MPH:");
console.log("Gallons Needed: " + gallonWith75mph.toFixed(2));
console.log("Fuel Expense: $" + fuelExpense75.toFixed(2));
console.log("Time: " + time75.toFixed(2) + " hours");
console.log("Is Budget Enough: " + (isbudgetEnough75 ? "Yes" : "No"));
console.log("======================================================")