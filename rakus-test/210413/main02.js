const eto = ['mouse', 'Cow', 'Cat', 'Rabbit'];
console.log(`変更前 ${eto[0]}`);
eto[0] = 'Mouse';
console.log(`変更後 ${eto[0]}`);
eto.push('Dragon');
console.log(
  `Dragonを追加、["${eto[0]}","${eto[1]}","${eto[2]}","${eto[3]}","${eto[4]}"]`
);
console.log(`etoの要素の個数は${eto.length}こ`);
