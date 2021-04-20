const getTriangle = (width, height) => {
  const triangle = (width * height) / 2;
  console.log(
    `底辺が${width}、高さ${height}の三角形の面積を求める関数を実行した結果、面積は${triangle}`
  );
};

getTriangle(5, 10);
getTriangle(4, 5);
getTriangle(50, 2);
