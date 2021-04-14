// let rows = 10; /*10行*/
// let max_num = (rows - 1) * 2 + 1; /*rows行目の時のアスタリスクの個数*/

// for (let i = 0; i < rows; i++) {
//   let num = i * 2 + 1; /*アスタリスクの個数*/

//   let foo = [];
//   /*左側のスペース*/
//   for (let j = 0; j < (max_num - num) / 2; j++) {
//     // document.write('&nbsp');
//     foo.push(' ');
//   }
//   /*アスタリスク*/
//   for (j = 0; j < num; j++) {
//     // document.write('*');
//     foo.push('*');
//   }
//   /*右側のスペース（省略可能）*/
//   // for (j = 0; j < (max_num - num) / 2; j++) {
//   //   document.write('&nbsp');
//   // }
//   console.log(foo.join(''));
//   // document.write('<br>');
// }

// const sports = [
//   'nike',
//   'puma',
//   'adidas',
//   'nike',
//   'nike',
//   'puma',
//   'asics',
//   'adidas',
//   'nike',
//   'puma',
//   'nike',
// ];

// const sportsCount = {
//   nike: '',
//   adidas: '',
//   puma: '',
//   others: '',
// };

// // 1
// // sportsCount.nike = sports.filter((sport) => sport === 'nike').length;

// // 2
// for (let i = 0; i < sports.length; i++) {
//   if (sports[i] === 'nike') {
//     sportsCount.nike++;
//   } else if (sports[i] === 'adidas') {
//     sportsCount.adidas++;
//   } else if (sports[i] === 'puma') {
//     sportsCount.puma++;
//   } else {
//     sportsCount.others++;
//   }
// }

// // 3
// const nike = [];
// for (let i = 0; i < sports.length; i++) {
//   if (sports[i] === 'nike') {
//     nike.push(sports[i]);
//   }
// }

// // もしくは
// // console.log(sports.filter((sport) => sport === 'nike'));

// // 4-1
// const notNike = [];
// for (let i = 0; i < sports.length; i++) {
//   if (sports[i] !== 'nike') {
//     notNike.push(sports[i]);
//   }
// }
// console.log(notNike);

// // もしくは
// // console.log(sports.filter((sport) => sport !== 'nike'));

// // 4-2
// const hoge = [];

// for (let i = 0; i < notNike.length; i++) {
//   if (notNike.indexOf(notNike[i]) === i) {
//     hoge.push(notNike[i]);
//   }
// }
// console.log(hoge);

// // もしくは
// // console.log(notNike.filter((n, i) => notNike.indexOf(n) === i));

// // 5
// let human1 = { name: 'tobita', age: 45, address: 'tokyo' };
// let human2 = { name: 'suzuki', age: 30, address: 'chiba' };
// let human3 = { name: 'honda', age: 22, address: 'chiba' };
// let human4 = { name: 'tanaka', age: 21, address: 'saitama' };
// let human5 = { name: 'sato', age: 33, address: 'saitama' };
// let human6 = { name: 'moriya', age: 37, address: 'tokyo' };
// let human7 = { name: 'shimizu', age: 50, address: 'tokyo' };
// let human8 = { name: 'date', age: 39, address: 'chiba' };
// human9 = { name: 'oda', age: 28, address: 'tokyo' };

// const humans = [
//   human1,
//   human2,
//   human3,
//   human4,
//   human5,
//   human6,
//   human7,
//   human8,
//   human9,
// ];

// // console.log(
// //   humans.filter((human) => human.age >= 30 && human.address !== 'saitama')
// // );

// // もしくは

// let fuga = [];
// for (let i = 0; i < humans.length; i++) {
//   if (humans[i].age >= 30 && humans[i].address !== 'saitama') {
//     fuga.push(humans[i]);
//   }
// }

// console.log(fuga);

// let mozi = ''; //表示するものを入れる変数
// let hosi = 1; //アスタリスクを表示する個数（アスタリスクを追加するforの回数）
// for (let tate = 5; tate > 0; tate--) {
//   //段落のfor デクリメントで 1づつ減らす。[4,3,2,1,0]になったら終わり
//   //空にする。
//   mozi = '';
//   //スペースを入れるfor文　段落のループをデクリメントしているので、そのままスペースの数になる
//   for (let yoko = 0; yoko < tate; yoko++) {
//     //スペースを追加
//     mozi = mozi + ' ';
//   }
//   //アスタリスクの数、アスタリスクの最大数は hosi の値(最後に+=2で２つづつ増やす)
//   for (let hosiCount = 0; hosiCount < hosi; hosiCount++) {
//     //アスタリスクを追加
//     mozi = mozi + '*';
//   }
//   //表示
//   console.log(mozi);
//   //アスタリスクの数は2づつ増えるので、アスタリスクのforの最大回数を増やす。
//   hosi += 2;
// }

// let mozi = '';
// let hoshi = 1;

// for (let tate = 5; tate > 0; tate--) {
//   mozi = '';
//   // スペースの数
//   for (let yoko = 0; yoko < tate; yoko++) {
//     mozi += ' ';
//   }

//   for (let hoshiCount = 0; hoshiCount < hoshi; hoshiCount++) {
//     mozi += '*';
//   }

//   console.log(mozi);
//   hoshi += 2;
// }

let num = 10;
let mozi = '';
let a = '';
let max_num = 2 * num + 1; // num行目の*の数
let max_hoshi = '';

for (let tate = num; tate > 0; tate--) {
  mozi = '';
  for (let i = 0; i < tate; i++) {
    mozi += ' ';
  }

  mozi += '*' + a;
  a += ' ';

  if (tate !== num) {
    a += ' ';
  }

  if (tate !== num) {
    mozi += '*';
  }

  console.log(mozi);
  if (tate === 1) {
    for (let j = 0; j < max_num; j++) {
      max_hoshi += '*';
    }
    console.log(max_hoshi);
  }
}
