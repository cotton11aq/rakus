const car = {
  color: 'Red',
  gasMileage: 40,
  gas: 20,
};

console.log(`車両の色は${car.color}`);
console.log(
  `gasを5L使用した場合の走行距離は${car.gasMileage * 5}km、残りのgas容量は${
    car.gas - 5
  }Lです。`
);
