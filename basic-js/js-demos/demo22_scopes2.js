
function User(name, email, password){
    this.name=name;
    this.email=email;
    //this.password=password; //we need password as private. use closure value.
    this.authenticate=function(pass){
        return password===pass;
    }

    var forgotPasswordToken=null;

    this.forgotPassword=function(){
        forgotPasswordToken=uuid.v4();
        //send it in email.
    }

    this.changePassword=function(key, newPassword){
        if(this.authenticate(key) || key===forgotPasswordToken){
            password=newPassword;
            forgotPasswordToken=null; //reset token after successful change.
            return true;
        }else{
            return false;
        }
    }

    this.getPassword=function(){
        return password; //now exposed.
    }
};

var user1=new User('John Doe','johndoe@example.com','password123');

console.log('user1.authenticate("pass")',user1.authenticate("pass")); //fail.

console.log('user1.authenticate(user1.password)',user1.authenticate(user1.password)); //true. because password is exposed.

console.log('user1.password',user1.password); //not exposed.

console.log('user1.authenticate("password123")',user1.authenticate("password123")); //pass

//I can't change password using below code.

user1.password="new_password"; //it adds new password. that is not used for authentication

console.log('user1.authenticate("new_password")',user1.authenticate("new_password")); //fail. it's using old password.


console.log('user1.changePassword("wrong","new")',user1.changePassword("wrong","new"));
console.log('user1.authenticate("new")',user1.authenticate("new"));

console.log('user1.changePassword("password123","newpass")',user1.changePassword("password123","newpass"));

console.log('user1.authenticate("newpass")',user1.authenticate("newpass"));//true


//WORKS IN JS BUT SHOULD YOU HAVE THIS FUNCTION?
console.log('user1.getPassword()',user1.getPassword());

