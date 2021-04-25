const text_form = document.getElementById('text');
text_form.addEventListener('keypress', click);

function click(e) {
  if (e.keyCode === 13) {
    const $list = document.getElementById('itemlist');
    const $text = document.getElementById('text').value;
    $list.innerHTML = '';
    const $url =
      'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404';
    const $obj = {
      params: {
        applicationId: '1047285082047680266',
        title: $text,
      },
    };

    axios.get($url, $obj).then((res) => {
      console.log(res);
      const items = res.data.Items;
      items.forEach((element) => {
        newItem = document.createElement('div');
        newItem.className = 'items';
        newItem.innerHTML = `
          <p class="image"><img src="${element.Item.largeImageUrl}" ></p>
          <p class="title">${element.Item.title}</p>
          <p class="price">${element.Item.itemPrice.toLocaleString()}円</p>
          <a href="${
            element.Item.itemUrl
          }" target="_blank" class="itemurl">購入する</a>`;
        console.log(newItem);
        $list.appendChild(newItem);
      });
    });
  }
}

// const $button = document.getElementById('search');
// $button.addEventListener('click', (e) => {
//   const $list = document.getElementById('itemlist');
//   const $text = document.getElementById('text').value;
//   $list.innerHTML = '';

//   const $url =
//     'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404';

//   const $obj = {
//     params: {
//       applicationId: '1047285082047680266',
//       title: $text,
//     },
//   };

//   axios.get($url, $obj).then((res) => {
//     console.log(res);

//     const items = res.data.Items;

//     items.forEach((element) => {
//       newItem = document.createElement('div');
//       newItem.className = 'items';

//       newItem.innerHTML = `
//         <p class="image"><img src="${element.Item.largeImageUrl}" ></p>
//         <p>${element.Item.title}</p>
//         <p>${element.Item.itemPrice.toLocaleString()}円</p>
//         <a href="${element.Item.itemUrl}" target="_blank">購入する</a>`;
//       console.log(newItem);
//       $list.appendChild(newItem);
//     });
//   });
// });
