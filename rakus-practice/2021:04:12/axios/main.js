axios
  .get('https://qiita.com/api/v2/items', {
    params: { query: 'tag:JavaScript' },
  })
  .then((res) => console.log(res.data));

// // const $list = document.getElementById('list');

// // axios
// //   .get(
// //     ('https://qiita.com/api/v2/items',
// //     {
// //       params: { query: 'tag:JavaScript' }
// //     })
// //   )
// //   .then((res) => {
// //     res.data.forEach((item) => {
// //       const newItem = document.createElement('li');
// //       newItem.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
// //       $list.appendChild(newItem);
// //     });
// //   });
