// kadai1の子要素をクリックしたら、その子要素の中身を取得して配列に追加する。そして、その配列の中身を描画する（重複はしないように）
const $kadai1 = document.getElementById('kadai1');

const kome = $kadai1.children[0];
const pan = $kadai1.children[1];
const udon = $kadai1.children[2];
const soba = $kadai1.children[3];
const jagaimo = $kadai1.children[4];
const nan = $kadai1.children[5];

const $kadai2 = document.getElementById('kadai2');

const hoge = [];
let flag = true;

kome.addEventListener('click', (e) => {
  if (hoge[0] === '') {
    hoge.push(e.target);
  } else {
    for (let j = 0; j < hoge.length; j++) {
      if (hoge[j] === e.target.innerHTML) {
        flag = false;
      }
    }
    if (flag === true) {
      hoge.push(e.target.innerHTML);
    }
    flag = true;
  }
  $kadai2.innerText = hoge;
});

pan.addEventListener('click', (e) => {
  if (hoge[0] === '') {
    hoge.push(e.target.innerHTML);
  } else {
    for (let j = 0; j < hoge.length; j++) {
      if (hoge[j] === e.target.innerHTML) {
        flag = false;
      }
    }
    if (flag === true) {
      hoge.push(e.target.innerHTML);
    }
    flag = true;
  }
  $kadai2.innerText = hoge;
});

udon.addEventListener('click', (e) => {
  if (hoge[0] === '') {
    hoge.push(e.target.innerHTML);
  } else {
    for (let j = 0; j < hoge.length; j++) {
      if (hoge[j] === e.target.innerHTML) {
        flag = false;
      }
    }
    if (flag === true) {
      hoge.push(e.target.innerHTML);
    }
    flag = true;
  }
  $kadai2.innerText = hoge;
});

soba.addEventListener('click', (e) => {
  if (hoge[0] === '') {
    hoge.push(e.target.innerHTML);
  } else {
    for (let j = 0; j < hoge.length; j++) {
      if (hoge[j] === e.target.innerHTML) {
        flag = false;
      }
    }
    if (flag === true) {
      hoge.push(e.target.innerHTML);
    }
    flag = true;
  }
  $kadai2.innerText = hoge;
});

jagaimo.addEventListener('click', (e) => {
  if (hoge[0] === '') {
    hoge.push(e.target.innerHTML);
  } else {
    for (let j = 0; j < hoge.length; j++) {
      if (hoge[j] === e.target.innerHTML) {
        flag = false;
      }
    }
    if (flag === true) {
      hoge.push(e.target.innerHTML);
    }
    flag = true;
  }
  $kadai2.innerText = hoge;
});

nan.addEventListener('click', (e) => {
  if (hoge[0] === '') {
    hoge.push(e.target.innerHTML);
  } else {
    for (let j = 0; j < hoge.length; j++) {
      if (hoge[j] === e.target.innerHTML) {
        flag = false;
      }
    }
    if (flag === true) {
      hoge.push(e.target.innerHTML);
    }
    flag = true;
  }
  $kadai2.innerText = hoge;
  console.log(hoge);
});
