// Q67
// This function adds a number and a string that represents a number
function addNumberAndString(number1, numberString) {
    // Converts the string to a number and adds it to the first number
    return number1 + Number(numberString);
}
console.log(addNumberAndString(45, "21.5")); // Shows 66.5
// The string "21.5" is turned into the number 21.5, and then added to 45.
function numberAndStringSub(number1, numberString) {
    // Converts the string to a number and subtract it to the first number
    return number1 - Number(numberString);
}
console.log(numberAndStringSub(45, "21.5"));
function numberAndStringMultiply(number1, numberString) {
    // Converts the string to a number and Multiply  it to the first number
    return number1 * Number(numberString);
}
console.log(numberAndStringMultiply(10, "9"));
