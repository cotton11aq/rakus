// ex.1
class Character {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const suzuki = new Character('suzuki', 30);
console.log(`${suzuki.name}さんは${suzuki.age}歳`);

const tobita = new Character('tobita', 50);
console.log(`${tobita.name}さんは${tobita.age}歳`);

const ebata = new Character('ebata', 40);
console.log(`${ebata.name}さんは${ebata.age}歳`);

// ex.2
class Engineer extends Character {
  constructor(name, age, useGengo, pmFlg) {
    super(name, age);
    this.useGengo = useGengo;
    this.pmFlg = pmFlg;
  }
}

const newsuzuki = new Engineer('suzuki', 30, ['Python', 'Java', 'TS'], true);
console.log(
  `${newsuzuki.name}さんは${newsuzuki.age}歳、使える言語は${
    newsuzuki.useGengo
  }、${newsuzuki.pmFlg ? 'あり' : 'なし'}`
);
