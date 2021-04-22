// ex.1
const $mozi = document.getElementById('mozi');
$mozi.innerText = '変更後';

// ex.2
const $elTarget = document.getElementById('elTarget');
const $span = document.createElement('span');
$elTarget.append($span);
$span.innerText = '100%うさぎ';
