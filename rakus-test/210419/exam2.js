const items = ['human', 'car', 'human', 'dog', 'human', 'cat'];

const humans = [];

for (let i = 0; i < items.length; i++) {
  if (items[i] === 'human') {
    humans.push(items[i]);
  }

  if (items[i] === 'car') {
    console.log(`${items[i]}は生き物ではありません`);
  } else if (items[i] === 'dog' || items[i] === 'cat') {
    console.log(`${items[i]}は生物ですが人間ではありません`);
  }
}

console.log(`人間は${humans.length}個`);
