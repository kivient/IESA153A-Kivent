
var UserService =
{

	token : "",
	email : "",
	username : "",

	setUser : function(token, email, username, id)
	{
		this.token = token;
		this.email = email;
		this.username = username;
		this.id = id;
	},

	getUser : function() 
	{
		return {token : this.token, email : this.email, username : this.username, id : this.id};
	}
	
};