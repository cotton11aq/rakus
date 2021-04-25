// // // class Car {
// // //   constructor(name, color, speed) {
// // //     this.name = name;
// // //     this.color = color;
// // //     this.speed = speed;
// // //   }

// // //   say() {
// // //     console.log(`${this.name}が走る、${this.name}が止まる`);
// // //   }
// // // }

// // // const gtr = new Car('GT-R', '赤', '280');
// // // const nsx = new Car('NSX', '黄', '300');
// // // const mini = new Car('mini', '緑', '220');

// // // const cars = [gtr, nsx, mini];
// // // console.log(cars);

// // // // 2
// // // class Animal {
// // //   constructor(name, birthplace) {
// // //     this.name = name;
// // //     this.birthplace = birthplace;
// // //   }
// // // }

// // // const dog = new Animal('Pochi', 'Ehime');
// // // const cat = new Animal('Tama', 'Tokyo');

// // // // 3
// // // class Character {
// // //   constructor(age, height, birthplace) {
// // //     this.age = age;
// // //     this.height = height;
// // //     this.birthplace = birthplace;
// // //   }

// // //   introduce(name) {
// // //     console.log(`${name}の出身は${this.birthplace}です`);
// // //   }
// // // }

// // // const me = new Character(26, 180, 'Ehime');
// // // me.introduce('me');

// // 4
// class GameCharacter {
//   constructor(name, hp, ko, bo, un) {
//     this.name = name;
//     this.hp = hp;
//     this.ko = ko;
//     this.bo = bo;
//     this.un = un;
//   }

//   kogeki(obj) {
//     let pasent = Math.floor(Math.random() * this.un);
//     if (this.un === pasent) {
//       obj.hp = obj.hp - (this.ko * 2 - obj.bo);
//       console.log(
//         `${this.name}は${obj.name}に${this.ko * 2 - obj.bo}のダメージを与えた！`
//       );
//     } else {
//       if (obj.bo > this.ko) {
//         obj.hp--;
//         console.log(obj.hp);

//         `${this.name}は${obj.name}に1のダメージを与えた！`;
//       } else {
//         obj.hp = obj.hp - (this.ko - obj.bo);
//         console.log(
//           `${this.name}は${obj.name}に${this.ko - obj.bo}のダメージを与えた！`
//         );
//       }
//     }
//     if (obj.hp < 0) {
//       console.log(`${obj.name}のHP:0`);
//       console.log(`${obj.name}は死んだ`);
//     } else {
//       console.log(`${obj.name}のHP:${obj.hp}`);
//     }
//   }
// }

// const one = new GameCharacter('wataru', 2000, 300, 200, 2);
// const two = new GameCharacter('dragon', 1000, 400, 100, 1);

// while (one.hp > 0 && two.hp > 0) {
//   if (one.hp > 0 && two.hp > 0) {
//     one.kogeki(two);
//   }
//   if (one.hp > 0 && two.hp > 0) {
//     two.kogeki(one);
//   }
// }

// // 5
// class Human {
//   constructor(id, info) {
//     this.id = id;
//     this.info = info;
//   }

//   say(word) {
//     console.log(word);
//   }
// }

// class Shobo extends Human {
//   constructor(id, info) {
//     super(id, info);
//   }

//   // say() {
//   //   console.log('レスキュー');
//   // }
// }

// const wataru = new Shobo(1, '愛媛県出身');
// console.log(wataru);
// wataru.say('レスキュー');

// // 6
// class Animal {
//   constructor(name, age, height) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//   }

//   introduce() {
//     console.log(`この動物の名前は${this.name}です`);
//   }
// }

// class Person extends Animal {
//   constructor(name, age, height, skill) {
//     super(name, age, height);
//     this.skill = skill;
//   }

//   programing() {
//     console.log(`${this.name}はプログラミングができます`);
//   }
// }

// const wataru2 = new Person('wataru', 26, 180, 'プログラミング');
// console.log(wataru2);
// wataru2.introduce();
// wataru2.programing();

// class Monkey extends Animal {
//   constructor(name, age, height) {}
// }

// class Member {
//   constructor(name, age, address, sex, rank) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.sex = sex;
//     this.rank = rank;
//   }

//   out() {
//     console.log(this.name, this.age, this.address, this.sex);
//   }
// }

// class Bronz extends Member {
//   constructor(name, age, address, sex, rank) {
//     super(name, age, address, sex, rank);
//   }
// }

// const bronz = new Bronz('bronz', 20, '東京', '男');

// class Silver extends Member {
//   constructor(name, age, address, sex, rank) {
//     super(name, age, address, sex, rank);
//   }

//   tamaru5000() {}
// }

// const silver = new Silver('silver', 30, '愛知', '女');

// class Gold extends Member {
//   constructor(name, age, address, sex, rank, consu) {
//     super(name, age, address, sex, rank);
//     this.consu = consu;
//   }

//   tamaru10000() {
//     console.log('10000ポイントまで溜まります');
//   }
// }

// const gold = new Gold(
//   'gold',
//   40,
//   '愛媛',
//   'オカマ',
//   'めっちゃいいコンシェルジュ'
// );

// class Platinum extends Member {
//   constructor(name, age, address, sex, rank) {
//     super(name, age, address, sex, rank);
//   }
// }

// const platinum = new Platinum('platinum', 50, '福岡', '女');

// console.log(document);
// console.log(typeof document);

// const $title = document.getElementById('title');
// console.log($title);

// const $subtitles = document.getElementsByClassName('sub');
// console.log($subtitles);

// const $listitems = document.getElementsByTagName('li');
// console.log($listitems);

// $currentitem = document.querySelector('ul li.current');

// $divs = document.querySelectorAll('body > div');

// console.log($currentitem);
// console.log($divs);

// const $today = document.getElementById('today');

// console.log($today.parentNode);
// console.log($today.firstElementChild);
// console.log($today.lastElementChild);
// console.log($today.children);
// console.log($today.previousElementSibling);

// const $today = document.getElementById('today');

// // 1
// const $p = document.createElement('p');
// $p.innerText = 'pタグだよ！';
// $today.prepend($p);

// // 2
// const $div = document.createElement('div');
// $div.innerText = 'divタグだよ！';
// const $body = document.body;
// $body.appendChild($div);

// // 3
// const $a = document.createElement('a');
// $a.href = 'https://www.google.co.jp';
// $a.innerText = 'Google.com';
// $body.prepend($a);

// ex1
const $div = document.createElement('div');
$div.id = 'kadai1';

$span = [];
for (let i = 0; i < 5; i++) {
  $span[i] = document.createElement('span');
  $span[i].innerText = i;
}

$span.forEach((span) => $div.appendChild(span));
$span[2].style = 'color: red';

$body = document.body;
$h1 = document.getElementsByTagName('h1');
console.log($1);



// $span1.innerText = '1';
// $span2.innerText = '2';
// $span3.innerText = '3';
// $span4.innerText = '4';
// $span5.innerText = '5';

// $div.appendChild($span1);
// $div.appendChild($span2);
// $div.appendChild($span3);
// $div.appendChild($span4);
// $div.appendChild($span5);

// $body = document.body;
// $body.appendChild($div);

// $kadai1 = document.getElementById('kadai1');
// $kadai1.children[2].style = 'color: red';

// // ex2
// for (let i = 1; i < $kadai1.children.length; i += 2) {
//   $kadai1.children[i].style = 'color: blue';
// }

// // ex3
// $textArea = document.createElement('textarea');
// $body.appendChild($textArea);

// // ex4
// $form = document.createElement('form');
// $body.appendChild($form);

// $text = document.createElement('input');
// $text.setAttribute('type', 'text');
// $text.setAttribute('name', 'name');
// $form.appendChild($text);

// $mail = document.createElement('input');
// $mail.setAttribute('type', 'text');
// $mail.setAttribute('name', 'email');
// $form.appendChild($mail);

// $male = document.createElement('input');
// $male.setAttribute('type', 'radio');
// $male.setAttribute('name', 'sex');
// $male.setAttribute('value', 'male');
// $form.appendChild($male);

// $female = document.createElement('input');
// $female.setAttribute('type', 'radio');
// $female.setAttribute('name', 'sex');
// $female.setAttribute('value', 'female');
// $form.appendChild($female);
