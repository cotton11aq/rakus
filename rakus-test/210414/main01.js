const engineer = {
  name: 'suzuki',
  gengo: ['Java', 'Python', 'Go', 'Ruby'],
};

console.log(`${engineer.name}さんの使用できる言語は${engineer.gengo}`);
engineer.gengo.push('Scala');
console.log(`新しく${engineer.gengo[4]}を使えるようになりました。`);
