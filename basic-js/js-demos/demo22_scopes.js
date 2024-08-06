
function User(name, email, password){
    this.name=name;
    this.email=email;
    this.password=password;
    this.authenticate=function(password){
        return this.password===password;
    }
};

var user1=new User('John Doe','johndoe@example.com','password123');

console.log('user1.authenticate("pass")',user1.authenticate("pass")); //fail.

console.log('user1.authenticate(user1.password)',user1.authenticate(user1.password)); //true. because password is exposed.

console.log('user1.password',user1.password);
