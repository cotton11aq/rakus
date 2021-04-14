// let num = 10;
// let mozi = '';
// let space = '';
// let max_num = 2 * num + 1; // num行目の*の数
// let max_hoshi = ' ';

// for (let row = num; row > 0; row--) {
//   mozi = '';
//   if (row !== 1) {
//     for (let i = 0; i < row; i++) {
//       mozi += ' ';
//     }

//     mozi += '*' + space;
//     space += ' ';

//     if (row !== num) {
//       space += ' ';
//     }

//     if (row !== num) {
//       mozi += '*';
//     }

//     console.log(mozi);
//   } else {
//     for (let j = 0; j < max_num - 2; j++) {
//       max_hoshi += '*';
//     }
//     console.log(max_hoshi);
//   }
// }

// // 1
// const dog = () => {
//   console.log('犬です');
// };

// // 2
// const searchword = (word) => {
//   console.log(word);
// };

// // 3
// const tax = (money) => {
//   return money * 1.08;
// };
// console.log(tax(1000));

// // 4
// const animals = ['dog', 'cat', 'dog', 'dog', 'cat', '100', 'dog'];
// for (let i = 0; i < animals.length; i++) {
//   if (animals[i] === 'dog') {
//     dog();
//   } else if (animals[i] === 'cat') {
//     searchword(animals[i]);
//   } else if (animals[i] === '100') {
//     console.log(tax(Number(animals[i])));
//   }
// }

// 1
const cat = {
  name: 'tama',
  age: 10,
  eat() {
    console.log('むしゃむしゃ');
  },
  naku() {
    console.log('にゃ〜');
  },
};

// 2
const robot = {
  name: 'R2-D2',
  repeat(word) {
    console.log(`${word}でしょうか？`);
  },
};

// 58;
const now = new Date(); //今の日付
const sampleDay = new Date('1994-04-07'); //自分の誕生日

const nowYear = now.getFullYear(); // 今の年
const nowMonth = now.getMonth() + 1; // 今の月
const nowDate = now.getDate(); // 今の日付

const myYear = sampleDay.getFullYear(); // 誕生年
const myMonth = sampleDay.getMonth() + 1; // 誕生月
const myDate = sampleDay.getDate(); // 誕生日

if (nowMonth > myMonth) {
  console.log(nowYear - myYear);
} else if (nowDate >= myDate) {
  console.log(nowYear - myYear);
} else {
  console.log(nowYear - myYear - 1);
}

// じゃんけん
const myHand = ['パー'];

const godHand = Math.floor(Math.random() * 3);
if (myHand[0] === 'グー' || myHand[0] === 'チョキ' || myHand[0] === 'パー') {
  if (godHand === 0) {
    console.log(`自分：${myHand[0]} コンピューター：グー`);
  } else if (godHand === 1) {
    console.log(`自分：${myHand[0]} コンピューター：チョキ`);
  } else {
    console.log(`自分：${myHand[0]} コンピューター：パー`);
  }
}

// 故障中の車

let car = {
  name: 'beetle',
  color: 'green',
  run() {
    return '故障中';
  },
};
let car1 = {
  name: 'copen',
  color: 'blue',
  run() {
    return '動きます';
  },
};
let car2 = {
  name: 'mini',
  color: 'red',
  run() {
    return '故障中';
  },
};
let car3 = {
  name: 'ford',
  color: 'red',
  run() {
    return '故障中';
  },
};
let car4 = {
  name: 'GT-R',
  color: 'red',
  run() {
    return '動きます';
  },
};

let cars = [
  (car0 = {
    name: 'beetle',
    color: 'green',
    run() {
      return '故障中';
    },
  }),
  (car1 = {
    name: 'copen',
    color: 'blue',
    run() {
      return '動きます';
    },
  }),
  (car2 = {
    name: 'mini',
    color: 'red',
    run() {
      return '故障中';
    },
  }),
  (car3 = {
    name: 'ford',
    color: 'red',
    run() {
      return '故障中';
    },
  }),
  (car4 = {
    name: 'GT-R',
    color: 'red',
    run() {
      return '動きます';
    },
  }),
];

// Object.values(cars).forEach((car) => {
// console.log(car);
// })

// const cars = [car, car1, car2, car3, car4];

// const a = [];
// const b = [];

// cars.forEach((car) => {
//   if (car.run() === '故障中') {
//     a.push(car);
//   } else {
//     b.push(car);
//   }
// });

//車両の作成
//上記の車両データから「動く車両」と「動かない車両」にデータを分けてください
//方法は配列でもオブジェクトでも構いません。
//動く車両はrunをすると「動きます」、動かない車両は「故障中」です

// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].run() === '故障中') {
//     a.push(cars[i]);
//   } else {
//     b.push(cars[i]);
//   }
// }
