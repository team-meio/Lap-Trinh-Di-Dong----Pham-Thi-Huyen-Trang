console.log("hello world")

//Coding Challenge #1
// Data 1
let markMass1 = 78; 
let markHeight1 = 1.69; 
let johnMass1 = 92; 
let johnHeight1 = 1.95; 

// Data 2
let markMass2 = 95; 
let markHeight2 = 1.88; 
let johnMass2 = 85; 
let johnHeight2 = 1.76; 

// Calculate BMI for Data 1
let markBMI1 = markMass1 / (markHeight1 * markHeight1);
let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

// Calculate BMI for Data 2
let markBMI2 = markMass2 / (markHeight2 * markHeight2);
let johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

// Compare BMI for Data 1
let markHigherBMI1 = markBMI1 > johnBMI1;

// Compare BMI for Data 2
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(`Data 1: Mark's BMI: ${markBMI1.toFixed(2)}, John's BMI: ${johnBMI1.toFixed(2)}, Mark has a higher BMI: ${markHigherBMI1}`);
console.log(`Data 2: Mark's BMI: ${markBMI2.toFixed(2)}, John's BMI: ${johnBMI2.toFixed(2)}, Mark has a higher BMI: ${markHigherBMI2}`);


//Coding Challenge #2

function compareBMI(markBMI, johnBMI) {
    if (markBMI > johnBMI) {
        console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`);
    } else if (markBMI < johnBMI) {
        console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`);
    } else {
        console.log(`Mark and John have the same BMI (${markBMI.toFixed(2)})!`);
    }
}

compareBMI(markBMI1, johnBMI1);

compareBMI(markBMI2, johnBMI2);

//Coding Challenge #3
// Test Data 1
let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

// Bonus Data 1
let dolphinsScores2 = [97, 112, 101];
let koalasScores2 = [109, 95, 123];

// Bonus Data 2
let dolphinsScores3 = [97, 112, 101];
let koalasScores3 = [109, 95, 106];

// Function to calculate the average score
function calculateAverage(scores) {
    let total = scores.reduce((a, b) => a + b, 0);
    return total / scores.length;
}

function determineWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        console.log(`Dolphins win with an average score of ${dolphinsAvg.toFixed(2)}!`);
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        console.log(`Koalas win with an average score of ${koalasAvg.toFixed(2)}!`);
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
        console.log(`It's a draw with both teams scoring ${dolphinsAvg.toFixed(2)}!`);
    } else {
        console.log(`No team wins the trophy as no team met the minimum score requirement.`);
    }
}

let dolphinsAvg1 = calculateAverage(dolphinsScores1);
let koalasAvg1 = calculateAverage(koalasScores1);
determineWinner(dolphinsAvg1, koalasAvg1);

let dolphinsAvg2 = calculateAverage(dolphinsScores2);
let koalasAvg2 = calculateAverage(koalasScores2);
determineWinner(dolphinsAvg2, koalasAvg2);

let dolphinsAvg3 = calculateAverage(dolphinsScores3);
let koalasAvg3 = calculateAverage(koalasScores3);
determineWinner(dolphinsAvg3, koalasAvg3);


//Coding Challenge #4
// Test Data
let bill1 = 275;
let bill2 = 40;
let bill3 = 430;


function calculateTipAndTotal(bill) {
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    let total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value is ${total.toFixed(2)}`);
}

calculateTipAndTotal(bill1); 
calculateTipAndTotal(bill2); 
calculateTipAndTotal(bill3); 
//Coding Challenge #2.1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins.`);
    }
};


checkWinner(avgDolphins1, avgKoalas1); // For Data 1
checkWinner(avgDolphins2, avgKoalas2); // For Data 2
//Coding Challenge #2.2
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100)); 
const bills = [125, 555, 44];

const tips = bills.map(bill => calcTip(bill));

// Bonus: Create an array 'total' containing the total values (bill + tip)
const total = bills.map((bill, index) => bill + tips[index]);

console.log('Bills:', bills);   // [125, 555, 44]
console.log('Tips:', tips);     // [18.75, 111, 8.8]
console.log('Total:', total);   // [143.75, 666, 52.8]
//Coding Challenge #2.3
const mark = {
    fullName: 'Mark Miller',
    mass: 78, // in kg
    height: 1.69, // in meters

    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92, 
    height: 1.95, 

    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
}
//2.4

const totals = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

// Bonus Task 4: Write a function 'calcAverage'
// const calcAverage = function(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };

console.log('Average Total:', calcAverage(totals));

//Developer Skills & Editor Setup
//3.1

const printForecast = function(arr) {
    let forecastString = '... ';
    for (let i = 0; i < arr.length; i++) {
        forecastString += `${arr[i]}ºC in ${i + 1} days ... `;
    }
    console.log(forecastString);
};

const data1 = [17, 21, 23];
printForecast(data1); // Output: "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Test data 2
const data2 = [12, 5, -5, 0, 4];
printForecast(data2); // Output: "... 12ºC in 1 days ... 5ºC in 2 days ... -5ºC in 3 days ... 0ºC in 4 days ... 4ºC in 5 days ..."

//JavaScript in the Browser: DOM and Events

