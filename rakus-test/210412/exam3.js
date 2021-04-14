const result = () => {
  const shokei = 200 * 3 + 250 * 4;
  const shohizei = shokei * 0.1;
  const gokei = shokei + shohizei;
  console.log('小計');
  console.log(shokei);
  console.log('消費税');
  console.log(shohizei);
  console.log('合計金額');
  console.log(gokei);
};

result();
