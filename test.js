'use strict';

// const str=prompt(`What would you like to know about Yuval?`);
// if(Yuval[str]) {
//     alert(Yuval[str]);
// }
// else {
//     alert(`not found`);
// }

// console.log(`${Yuval.first} has ${Yuval.friends.length}
// and his best friend is ${Yuval.friends[0]}`);

// const Yuval={
//     first:'Yuval',
//     last:'Abargil',
//     Age:23,
//     job:'Student',
//     friends:[`Allen`,`Steve`,`Joshua`],
//     license:false,
//     myAge:function() {
//         return 2021-this.Age;
//     },
//     whos2: function() {
//         return this.friends[this.friends.length-1];
//     }
// };

// console.log(Yuval.whos2());
// Yuval.friends.push('Nissim');
// console.log(Yuval.whos2());
// console.log(`Yuval's ${Yuval.Age}yo and he ${Yuval.license?'has':'has not'}  license`);

// const Mark ={
//     name: `Mark Zov`,
//     mass:600000,
//     height:180,
//     calcBMI: function() {
//         this.bmi=this.mass/(this.height**2);
//         return this.bmi;
//     }
//     };

// const John ={
//     name: `John Ken`,
//     mass:67,
//     height:177,
//     calcBMI: function() {
//         this.bmi=this.mass/(this.height*2);
//         return this.bmi;
//     }
//   };

//   John.calcBMI();
//   Mark.calcBMI();

// console.log(`${John.bmi>Mark.bmi?
//     `${John.name} has higherBMI with ${John.bmi}`:
// `${Mark.name} has higherBMI with ${Mark.bmi}`}`);

// let dice;
// dice=Math.trunc((Math.random() * 6  ));
// while(dice!=5) {
//     console.log(`You rolled a ${dice}`);
//     dice=Math.trunc((Math.random() * 6  )+ 1);
// }
// console.log(`You finally rolled a ${dice}`);

// function calcAvg(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     sum += arr[i];
//   }
//   return sum / (arr.length - 1);
// }

// const calcTip = function (bill) {
//   if (bill > 100) return bill * 0.15;
//   return bill * 0.3;
// };
// const bill = [22, 101, 195, 88, 199, 146, 900, 11];
// const tips = [];
// const total = [];

// for (let i = 0; i < bill.length; i++) {
//   tips.push(calcTip(bill[i]));
//   total.push(tips[i] + bill[i]);
// }
// console.log(bill);
// console.log(tips);
// console.log(total);
// console.log(calcAvg(bill));
// console.log(calcAvg(tips));
// console.log(calcAvg(total));

// const arr = [19, 16, 27, 37, 'error', 50, 10];
// const arr2 = [15, 16, 27, 37, 'error', 34, 11];

// const minMax = function (arr) {
//   let min, max;
//   min = max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] === 'error') continue;
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }
//   return max - min;
// };
// const theDiff = function (arr1, arr2) {
//   let gap1, gap2;
//   gap1 = minMax(arr1);
//   gap2 = minMax(arr2);

//   return gap1 > gap2 ? gap1 : gap2;
// };

// console.log(theDiff(arr, arr2));

// const myTemp = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str = `${arr[i]}C in ${i + 1} days . `;
//     console.log(str);
//   }
// };

// const arr = [21, 23, 25];
// myTemp(arr);

// //document.querySelector('.message').textContent = 'hello';
// document.querySelector('.score').textContent = 500;

// let myScore = 100;
// let highScore = 0;
// let secretNumber = Math.floor(Math.random() * 20 + 1);
// document.querySelector('.secretNumber').textContent = secretNumber;
// document.querySelector('.score').textContent = myScore;
// document.querySelector('.check').addEventListener('click', function () {
//   if (
//     document.querySelector('.guess').value ===
//     document.querySelector('.secretNumber').textContent
//   ) {
//     document.querySelector('.message').textContent = 'WINNER❤❤';
//     document.querySelector('.highscore').textContent = myScore;
//     highScore = 1;
//   } else if (
//     document.querySelector('.guess').value >
//     document.querySelector('.secretNumber').textContent
//   ) {
//     document.querySelector('.message').textContent = 'TOO HIGH😒';
//     myScore -= 10;
//     document.querySelector('.score').textContent = myScore;
//   } else {
//     myScore -= 10;
//     document.querySelector('.score').textContent = myScore;

//     document.querySelector('.message').textContent = 'TOO LOW😒';
//   }
// });

// if (highScore) {
//   document.querySelector('.highscore').textContent = myScore;
//   highScore = 0;
// }

let myScore = 100,
  highScore = 0;
let secretNumber = Math.floor(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (myScore > 10) {
    if (guess === secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('WINNER! 🔥🔥');
      // document.querySelector('.message').textContent = 'WINNER! 🔥🔥';
      document.querySelector('body').style.backgroundColor = '#7CFC00';
      if (myScore > highScore) {
        document.querySelector('.highscore').textContent = myScore;
      }
    } else if (guess < 21 && guess) {
      myScore -= 10;
      document.querySelector('.score').textContent = myScore;
      if (guess > secretNumber) displayMessage('TOO HIGH! 🤔');
      // document.querySelector('.message').textContent = 'TOO HIGH! 🤔';
      else displayMessage('TOO LOW!😑');
      //document.querySelector('.message').textContent = 'TOO LOW!😑';
    } else {
      displayMessage('CHOOSE NUMBER BETWEEN 1~20!😒');
      // document.querySelector('.message').textContent ='CHOOSE NUMBER BETWEEN 1~20!😒';
    }
  } else {
    document.querySelector('.score').textContent = 0;
    displayMessage('YOU LOST! 👎👎👎');
    //document.querySelector('.message').textContent = 'YOU LOST! 👎👎👎';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  myScore = 100;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = myScore;
  document.querySelector('.guess').value = '';
  displayMessage('Start Guessing!');
  // document.querySelector('.message').textContent = 'Start Guessing!';
  document.querySelector('body').style.backgroundColor = '#222';
});
