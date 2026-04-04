//Finding the Maximum Number in the array
let arrNum = [23, 12, 8, 2, 11];

//sorted the array
arrNum.sort((a, b) => a - b);
// console.log(arrNum);

console.log("The Maximum Number in the array is: " + arrNum.slice(arrNum.length - 1, arrNum.length + 1));
// console.log("The Maximum Number in the array is: " + arrNum[arrNum.length-1]);

//or in other way


// Dummy array for testing
// let arr = [23, 12, 8, 2, 11];

// 1. Find maximum number (Normal Function)
// function findMax(arr) {
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return max;
// }

// console.log("Array:", arr);
// console.log("Maximum Number:", findMax(arr));



// 2. Calculate sum (Arrow Function)
const findSum = (arrNum) => {
    let sum = 0;

    for (let num of arrNum) {
        sum += num;
    }
    return sum;

    // in tradition way
    // for (let i = 0; i < arrNum.length; i++) {
    //     sum += arrNum[i];
    // }
    // return sum;

};

console.log("Sum of Elements:", findSum(arrNum));




// 🔹 3. Count odd numbers (Anonymous Function)
let countOdd = function(arrNum) {
    let count = 0;

    for (let num of arrNum) {
        if (num % 2 !== 0) {
            count++;
        }
    }

    return count;
};

console.log("Count of Odd Numbers:", countOdd(arrNum));