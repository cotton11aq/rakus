const $body = document.body;

//1
const $red = document.getElementsByTagName('div');
$red[0].addEventListener('click', () => {
  $red[0].style = 'color:red';
});

// 2
const $button = document.createElement('button');
$button.innerText = '送信';
$body.appendChild($button);

$button.addEventListener('click', () => {
  alert('送信されました');
});

// 3
const $text = document.createElement('input');
$text.setAttribute('type', 'text');
$text.setAttribute('value', '田村　渉');
$text.id = 'input';

const $p = document.createElement('p');
$p.innerText = '';
$body.appendChild($text);
$body.appendChild($p);

const $change = document.getElementById('input');
$change.addEventListener('change', () => {
  $p.innerText = '名前が変更されています';
});
