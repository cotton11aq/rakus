// // 10-01
// const num1 = 3;
// const num2 = 4;
// console.log(num1 * num2);

// // 10-02
// let num3 = 100;
// console.log(num3 / 4 + 30);

// // boolean
// let a = true;
// const result = typeof a;
// console.log(result);

// // number
// let a = 1;
// console.log(result);

// const car = {
//   name: "mini",
//   flag: false,
//   color: "yello",
// };

// car.color = "blue";

// car.oil = 20;

// car.economy = 20;
// car.oil = 40;
// console.log(car.oil * car.economy);

// // 27-01
// const age = 22;
// console.log(age >= 18 && age <= 22);

// // 27-02
// console.log(age <= 18 || age >= 65);

// // 27-03
// console.log(age >= 18 && !(age <= 22));

// // 27-04
// console.log(age % 3 === 0);

// // 27-05
// console.log(age % 3 === 0 || age % 5 === 0);

// // 30-01
// let a = 10;
// if (a === 10) console.log('変数が10です');

// // 30-02
// if (a === 7) {
//   console.log('7の倍数です');
// } else {
//   console.log('7の倍数ではありません');
// }

// // 30-03
// let age = 20;
// if (age >= 13 && age <= 15) {
//   console.log('中学生');
// } else if (age >= 16 && age <= 18) {
//   console.log('高校生');
// } else {
//   console.log('その他');
// }

// // 30-04
// let time = 6;

// if (time >= 6 && time <= 11) {
//   console.log('朝');
// } else if (time >= 16 && time <= 14) {
//   console.log('昼');
// } else if (time >= 15 && time <= 19) {
//   console.log('夕方');
// } else if ((time >= 20 && time <= 24) || (time >= 1 && time <= 5)) {
//   console.log('夜');
// }

// // 30-05
// if (a % 3 === 0 && a % 5 === 0) {
//   console.log('3、5の倍数です');
// } else if (a % 3 === 0) {
//   console.log('3の倍数です');
// } else if (a % 5 === 0) {
//   console.log('5の倍数です');
// }

// const a = 'cat';

// switch (a) {
//   case 'cat':
//     console.log('cat');
//   case 'dog':
//     console.log('dog');
//   case 'human':
//     console.log('human');
//   default:
//     console.log('fa');
// }

// 39-01
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 39-02
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 39-03
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// 39-04
for (let i = 0; i < 100; i++) {
  if (i !== 0) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}は3と5の倍数です`);
    } else if (i % 3 === 0) {
      console.log(`${i}は3の倍数です`);
    } else if (i % 5 === 0) {
      console.log(`${i}は5の倍数です`);
    }
  }
}

// 39-05
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i}×${j}=${i * j}`);
    // console.log(i + '×' + j + '=' + i * j);
  }
}

// 39-06-01
const animals = ['dog', 'cat', 'dog', 'dog', 'cat', 'human', 'dog'];

let count = 0;
for (let i = 0; i < animals.length; i++) {
  if (animals[i] === 'dog') {
    count++;
  }
}
console.log(count);

// 39-06-02
console.log(animals.filter((animal) => animal === 'dog').length);
