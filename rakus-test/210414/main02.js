let human1 = {
  name: 'tobita',
  age: 45,
  address: 'tokyo',
};

let human2 = {
  name: 'suzuki',
  age: 30,
  address: 'chiba',
};

let human3 = {
  name: 'honda',
  age: 22,
  address: 'chiba',
};

const humans = [human1, human2, human3];

for (const human in humans) {
  console.log(
    `${Number(human) + 1}人目は${humans[human].name}さん、年齢は${
      humans[human].age
    }歳、住所は${humans[human].address}`
  );
}
