var {LinkedList} =require('./list');

books=new LinkedList(
    {title:'The Accursed God', author: 'Vivek Dutta Mishra', price:299, rating:4.6,tags:'mahabharata,fiction,best-seller'},
    {title:'Rashmirathi', author: 'Ramdhari Singh Dinkar', price:99, rating:4.4, tags:'mahabharata, hindi, classic, poetry'},
    {title:'Urvashi', author: 'Ramdhari Singh Dinkar', price:99, rating:4.5, tags:'romance, hindi, classic, poetry'},
    {title:'The Alchemist', author: 'Paulo Coelho', price:199, rating:4.8, tags:'self-help, best-seller'},
    {title: 'Manas', author: 'Vivek Dutta Mishra', price:199, rating:4.7, tags:'mahabharata, poetry, hindi'},
    {title: 'Ajaya', author:'Anant Neelkantha', price:450, rating: 3.8,tags:'mahabharata,fiction'},
    {title:'Jay', author:'Dev Dutt Pattanayak', price:500, rating:4.1,tags:'mahabharata,fiction'},
    {title:'Kurukshetra', author:'Ramdhari Singh Dinkar', price:119, rating:4.6, tags:'mahabharata, poetry, hindi'},
    {title:'Ashwatthama', author:'Deepak Kumar', price:450, rating:4.6, tags:'mahabharata, fiction'}
);

module.exports={
    books
};