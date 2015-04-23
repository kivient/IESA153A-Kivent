var AuthService = 
{

	user : "",

	isAuthenticated : function() 
	{
		var auth = JSON.parse(window.localStorage.getItem('auth'));

		return true;
		if(!auth){
			return false;
		} 
		else if (!auth.logged) {
			return false;
		} 
		else if (auth.logged) {
			if (this.user == "") {
				this.user = UserService;
				this.user.setUser(auth.token, auth.email, auth.username, auth.id);
				this.user.getUser();
			}
			return true;
		}
	},

}