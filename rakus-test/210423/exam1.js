// 1
const engineer = {
  name: 'tobita',
  gengo: ['Java', 'PHP', 'Linux', 'Javascript'],
};
console.log(`${engineer.name}さんの使用できる言語は${engineer.gengo}`);
engineer.gengo.push('QA');
console.log(`新しく${engineer.gengo[4]}を使えるようになりました。`);

// 2
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log(`${i}は15の倍数です`);
  } else if (i % 3 === 0) {
    console.log(`${i}は3の倍数です`);
  } else if (i % 5 === 0) {
    console.log(`${i}は5の倍数です`);
  } else {
    console.log(i);
  }
}

// 3
for (let i = 1; i <= 9; i++) {
  console.log(
    `${i} ${i * 2} ${i * 3} ${i * 4} ${i * 5} ${i * 5} ${i * 6} ${i * 7} ${
      i * 8
    } ${i * 9}`
  );
}

// 4
const nen = 2000;
let seiki = nen / 100;
if (seiki < 1) {
  console.log(`${nen}年は${Math.floor(seiki + 1)}世紀です`);
} else {
  console.log(`${nen}年は${Math.ceil(seiki)}世紀です`);
}

// 5
const urnen = 1600;
const hoge = (nen) => {
  if (nen % 100 === 0 && nen % 400 !== 0) {
    return false;
  } else if (nen % 4 === 0) {
    return true;
  }
};

console.log(
  `${urnen}年は${hoge(urnen) ? 'うるう年です' : 'うるう年ではありません'}`
);

// 6
const num = [1, 3, 5];
const fuga = [];
fuga.push(num);
console.log(fuga);
if (fuga[0].indexOf(num[1]) !== -1 && fuga[0].indexOf(num[2])) {
  fuga.push(num[0], num[1], num[2]);
}
console.log(fuga);
