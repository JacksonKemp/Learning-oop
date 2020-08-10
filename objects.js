// // This is the class method
// class User {
// 	// constructor function is only for object properties
// 	constructor(email, name){
// 		this.email = email;
// 		this.name = name;
// 		this.score = 0;
// 	}
// 	login(){
// 		console.log(this.email, 'just logged in');
// 		//return contents of User, used for method chaining
// 		return this;
// 	}
// 	logout(){
// 		console.log(this.email, 'just logged out');
// 		return this;
// 	}
// 	updateScore(){
// 		this.score++;
// 		console.log(this.email, 'score is now', this.score);
// 		return this;
// 	}
// }
// // the 'extends' command inherits properties from 'user' class
// class Admin extends User {
// 	deleteUser(user){
// 		users = users.filter(u => {
// 			return u.email != user.email;
// 		})
// 	}
// }
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
// this is the prototype method

// constructor function:
function User(email, name){
	this.email = email;
	this.name = name;
	this.online = false;
}

User.prototype.login = function (){
	this.online = true;
	console.log(this.email, 'has logged in');
}

User.prototype.logout = function (){
	this.online = false;
	console.log(this.email, 'has logged out');
}

//'args' makes an array of new admin
function Admin(...args){
	// passing array into user function
	User.apply(this, args);
	this.role = 'super admin';
}

// inherits User proto for Admin
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
	users = users.filter(user => {
		return user.email != u.email;
	})
};

var userOne = new User('jackson@2brothers.com', 'Jackson');
var userTwo = new User('eric@2brothers.com', 'Eric');
var admin = new Admin('thomas@2brothers.com', 'Thomas');

var users = [userOne, userTwo, admin];

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method

console.log(admin);
