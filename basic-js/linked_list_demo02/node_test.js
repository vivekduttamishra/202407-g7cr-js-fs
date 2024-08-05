var Node = require('./list').Node;

var n=new Node(20, 
    new Node(50, 
             new Node(40)));

console.log('n',n);
console.log('n.data',n.data); //20
console.log('n.next.data',n.next.data); //50

console.log('n.next.next.data',n.next.next.data); //40

for(var p=n; p!=null; p=p.next)
console.log(p.data);