for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}は15の倍数です`);
  } else if (i % 3 === 0) {
    console.log(`${i}は3の倍数です`);
  } else if (i % 5 === 0) {
    console.log(`${i}は5の倍数です`);
  } else {
    console.log(i);
  }
}
