const time = 20;

if (time >= 6 && time <= 11) {
  console.log('朝');
} else if (time >= 12 && time <= 14) {
  console.log('昼');
} else if (time >= 15 && time <= 19) {
  console.log('夕方');
} else if ((time >= 20 && time <= 24) || (time >= 1 && time <= 5)) {
  console.log('夜');
}
