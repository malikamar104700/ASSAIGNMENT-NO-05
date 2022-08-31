// Program # 1: Write a ts program to find maximum between two numbers
var num1 = 27;
var num2 = 25;
if (num1 > num2) {
    console.log("number one is maximum number");
}
else {
    console.log("number two is maximum number");
}
// Program # 2: Write a ts program to find maximum between three numbers
var no1 = 5;
var no2 = 50;
var no3 = 30;
if (no1 > no2 && no1 > no3) {
    console.log("number one is most maximum number");
}
else if (no2 > no1 && no2 > no3) {
    console.log("number two is most maximum number");
}
else {
    console.log("number three is most maximum number");
}
// Program # 3: Write a ts program to check whether a number is negative, positive or zero.
var n1 = 6;
if (n1 > 0) {
    console.log("this number is positive");
}
else if (n1 == 0) {
    console.log("this number is zero");
}
else {
    console.log("this number is negative");
}
// Program # 4: Write a ts program to check whether a number is divisible by 5 and 11 or not
var value = 47;
if (value % 5 == 0) {
    console.log("This value is divided by 5");
}
else if (value % 11 == 0) {
    console.log("This value is divided by 11");
}
else {
    console.log("This value is not divided by 5 and 11");
}
// Program # 5: Write a ts program to check whether a number is even or odd
var number = 39;
if (number % 2 == 0) {
    console.log("this number is even");
}
else {
    console.log("this number is odd");
}
//program # 6: Write a ts program to check whether a year is leap year or not.
var year = prompt("Enter Year");
if (year % 4 == 0) {
    console.log("this is a leap year =", year);
}
else {
    console.log("this is not leap year =", year);
}
//program # 7: Write a ts program to check whether a character is alphabet or not.
var char = prompt("enter any character ");
if ((char >= 'a' && char <= "z") || (char >= "A" && char <= "Z")) {
    console.log(char, "is an alphabet");
}
else if (char >= "0" && char <= "9") {
    console.log(char, "is a number");
}
else {
    console.log(char, "is not alphabet");
}
// Program # 8: Write a ts program to input any alphabet and check whether it is vowel or consonant.
var alphabet = prompt("Enter alphabet");
if (alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u" || alphabet == "A" || alphabet == "E" || alphabet == "I" || alphabet == "O" || alphabet == "U") {
    console.log(alphabet, "is a vowel");
}
else {
    console.log(alphabet, "is a consonent");
}
//Program # 9: Write a ts program to input any character and check whether it is alphabet, digit or special character.
var input = prompt("enter any alpha, number or char");
if ((input >= "a" && input <= "z") || (input >= "A" && input <= "Z")) {
    console.log(input, "is alphabet");
}
else if (input >= "0" && input <= "9") {
    console.log(input, "is digit");
}
else {
    console.log(input, "is special character");
}
// Program # 10: Write a ts program to check whether a character is uppercase or lowercase alphabet.
var a1 = prompt("Enter Alphabet and check letter is uppercase or lowercase");
if (a1 >= "a" && a1 <= "z") {
    console.log(a1, "is lowercase");
}
else {
    console.log(a1, "is uppercase alphabet");
}
//Program # 11: Write a ts program to input week number and print week day
var day = prompt("enter a day number");
if (day == "1") {
    console.log("Monday");
}
else if (day == "2") {
    console.log("Tuesday");
}
else if (day == "3") {
    console.log("Wednesday");
}
else if (day == "4") {
    console.log("Thursday");
}
else if (day == "5") {
    console.log("Friday");
}
else if (day == "6") {
    console.log("Saturday");
}
else {
    console.log("sunday");
}
//Program # 12:Write a ts program to input month number and print number of days in that month
var month = prompt("Enter month number");
if (month == "1" || month == "3" || month == "5" || month == "7" || month == "8" || month == "10" || month == "12") {
    console.log("31 days in month");
}
else if (month == "2") {
    console.log("28 days in month");
}
else {
    console.log("30 days in month");
}
//Program # 13: Write a ts program to input angles of a triangle and check whether triangle is valid or not
var angle1 = parseInt(prompt("Enter Angle A"));
var angle2 = parseInt(prompt("Enter Angle B"));
var angle3 = parseInt(prompt("Enter Angle C"));
var result = parseInt(angle1 + angle2 + angle3);
if (result == 180) {
    console.log("Angle is valid");
}
else {
    console.log("Angle is not valid");
}
// Program # 14: Write a ts program to input all sides of a triangle and check whether triangle is valid or not
var side1 = parseInt(prompt("side A"));
var side2 = parseInt(prompt("side B"));
var side3 = parseInt(prompt("side C"));
var allsides = Number(side1 + side2 + side3);
if (allsides == 180) {
    console.log("Angle is valid");
}
else {
    console.log("Angle is not valid");
}
// program # 15: Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle
var a = prompt("Angle A");
var b = prompt("Angle B");
var c = prompt("Angle C");
if (a == b && b == c) {
    console.log("Equilateral Triangle");
}
else if (a == b || b == c || c == a) {
    console.log("Isosceles Triangle");
}
else {
    console.log("Scalene Triangle");
}
//Program # 16: Write a ts program to calculate profit or loss
var cost = prompt("Enter Cost price");
var sell = prompt("Enter Sell Amount");
if (sell > cost) {
    var profit = sell - cost;
    console.log("Profit", +profit);
}
else if (sell < cost) {
    var loss = cost - sell;
    console.log("Loss", +loss);
}
else {
    console.log("NO profit No Loss");
}
//Program # 17:  Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
var math = prompt("Enter MATH MArks");
var Physics = prompt("Enter Physics Marks");
var Chemistry = prompt("Enter Chemistry Marks");
var Biology = prompt("Enter Biology Marks");
var Computer = prompt("Enter Computer Marks");
var obt = math + Physics + Chemistry + Biology + Computer;
var percent = (obt * 100) / 500;
if (percent >= 90) {
    console.log("Grade A");
}
else if (percent >= 80) {
    console.log("Grade B");
}
else if (percent >= 70) {
    console.log("Grade C");
}
else if (percent >= 60) {
    console.log("Grade D");
}
else if (percent >= 40) {
    console.log("Grade E");
}
else {
    console.log("Grade F");
}
//program # 18: Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var basicSal = prompt("Enter Salary");
if (basicSal <= 10000) {
    var grossSal = basicSal + (basicSal * 0.20) / 100 + (0.80 * basicSal) / 100;
    console.log(grossSal);
}
else if (basicSal <= 20000) {
    var grossSal = basicSal + (basicSal * 0.25) / 100 + (0.90 * basicSal) / 100;
    console.log(grossSal);
}
else if (basicSal > 20000) {
    var grossSal = basicSal + (basicSal * 0.30) / 100 + (0.80 * basicSal) / 100;
    console.log(grossSal);
}
//Program # 19:  Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
var units = prompt("Enter Electricity Units");
if (units <= 50) {
    var bill = units * 0.50;
    var add = bill + (bill * (0.20 / 100));
    console.log(add);
}
else if (units <= 150) {
    var bill = (50 * 0.50) + (units - 50) * 0.75;
    var add = bill + (bill * (0.20 / 100));
    console.log(add);
}
else if (units <= 250) {
    var bill = (50 * 0.50) + (100 * 0.75) + (units - 150) * 1.20;
    var add = bill + (bill * (0.20 / 100));
    console.log(add);
}
else if (units > 250) {
    var bill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + (units - 250) * 1.50;
    var add = bill + (bill * (0.20 / 100));
    console.log(add);
}
