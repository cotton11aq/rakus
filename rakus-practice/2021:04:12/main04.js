// 4
// const $name = document.getElementById('name');

// const $namevalue = $name.value;
// console.log($namevalue);

// const $button2 = document.getElementById('button');
// $button2.addEventListener('click', () => {
//   alert($namevalue);
// });

const button = document.getElementById('button');
button.addEventListener('click', () => {
  const name = document.getElementById('text').value;
  const email = document.getElementById('email').value;
  // const form = document.getElementsByTagName('li')[2];
  // console.log(form);
  // const radioNodeList = form.gender;
  // console.log(radioNodeList);
  // const genderValue = radioNodeList.value;
  const year = document.getElementById('year').value;
  const month = document.getElementById('month').value;
  const day = document.getElementById('day').value;
  const hoge = `名前：${name}
    メールアドレス：${email}
    生年月日：${year}年${month}月${day}日`;
  // hoge.push(name, email, year, month, day);

  // valueはコールバック関数の中に入れないとダメ
  alert(hoge);
});
