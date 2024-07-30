var values=[ 2, 3, 'Hello', false, 'World'];

console.log('values',values);
console.log('values.length',values.length);

//0 based index.
console.log('values[2]',values[2]);

//add new items
values.push('new value');

console.log('values',values);


values=[1,2,3,4,5] ; //5 item array
console.log('values[100]',values[100]);
values[15]=50;
console.log('values',values);
console.log('values.length',values.length);

for(var i=0; i<values.length; i++)
    console.log(`values[${i}]= ${values[i]}`);


values=[9,2,4,1,5];
for(var x in values)
    console.log(x, values[x]);

console.log('for-of loop');
values=[9,2,4,1,5];
for(var x of values)
    console.log(x);