// // // inputの中身を取得
// // // buttonを押したらhtmlに描画
// // // と同時に削除ボタンも描画
// // // 削除ボタンを押したらhtmlを削除

// // const entry = document.getElementById('entry');

// // const lists = [];

// // let idnum = 0;
// // const todo = document.getElementById('todo');

// // entry.addEventListener('click', (e) => {
// //   const list = document.createElement('li');
// //   const text = document.getElementById('text').value;

// //   list.id = idnum;

// //   list.innerHTML = `${text} <button class="${idnum}">削除</button>`;
// //   todo.appendChild(list);
// //   idnum++;

// //   const delate = document.getElementsByTagName('li');
// //   console.log(delate);
// // });

// // const delate = document.getElementsByTagName('li');

// // // const delate = document.getElementById

// // // 削除ボタンをクリックしたら、そのHTMLを削除する。

// // // removeChild();

// // app.js

// let todoApp = {
//   addTask: document.querySelector('.add'),
//   list: document.querySelector('.todos'),
//   createTodoList: function (task) {
//     // HTML テンプレートを生成
//     const html = `
//             <li class="list-group-item d-flex justify-content-between align-items-center">
//                 <span>${task}</span>
//                 <i class="far fa-trash-alt delete"></i>
//             </li>
//             `;
//     todoApp.list.innerHTML += html;
//   },
// };

// todoApp.addTask.addEventListener('submit', (e) => {
//   // デフォルトのイベントを無効
//   e.preventDefault();

//   // Taskに入力した値を空白を除外して格納
//   const task = todoApp.addTask.add.value.trim();
//   if (task.length) {
//     // Todo List の HTML を作成
//     todoApp.createTodoList(task);
//     // Taskに入力した文字をクリア
//     todoApp.addTask.reset();
//   }
// });

// // 削除機能
// todoApp.list.addEventListener('click', (e) => {
//   console.log(e.target.classList);
//   if (e.target.classList.contains('delete')) {
//     e.target.parentElement.remove();
//   }
// });

const $pushRegisterTasks = document.getElementById('registerTaskButton');

const $taskText = document.getElementById('taskText');

const $ulArea = document.getElementById('ulArea');

// console.log($pushRegisterTasks);
// console.log($taskText);

let i = 0;
let $deleteTasks = '';

// タスクの追加処理
$pushRegisterTasks.addEventListener('click', function () {
  let $taskTextValue = $taskText.value;
  if ($taskTextValue === '') {
    // 値が入力されていない場合のアラート処理
    alert('タスクを入力してください。');
  } else {
    // 値が入力されている場合のタスク追加処理
    // 仮想DOM上にliタグを生成
    let $newList = document.createElement('li');
    // 生成したliの子要素にHTML要素を追加
    $newList.innerHTML = `${$taskTextValue} <button id="deleteTaskButton${i}">削除</button>`;
    // ul要素の子要素に生成したタグを追加
    $ulArea.appendChild($newList);

    // inputタグの取得
    $deleteTasks = document.getElementById(`deleteTaskButton${i}`);
    // 固有のidを命名するためにクリックするごとに+1を足していく
    i++;

    // タスク削除処理
    if ($ulArea.childElementCount === 0) {
      console.log('子要素を保持していません');
    } else {
      console.log('`現在の$deleteTasksは');
      console.log($deleteTasks);

      $deleteTasks.addEventListener('click', function () {
        console.log('デリートは機能しています');
        // console.log(this.id);
        console.log(this);
        console.log($deleteTasks.parentNode);
        // クリックした要素の親要素を削除
        this.parentElement.remove();
      });
    }
  }
});
