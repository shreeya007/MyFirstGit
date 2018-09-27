//array containing information of all users
let allUsers = [ {
	               'name':'Shreeya Kharbanda',
	               'email':'shreeya.kharbanda@gmail.com',
	               'password':'ilovecoding@007',
	               'mobileNumber':9012345890 
                 },
                 {
                 	'name':'Priya Verma',
                 	'email':'priya.verma@rediffmail.com',
                 	'password':'priyalovesgaming',
                 	'mobileNumber':8234758965
                 },
                 {
                 	'name':'Shaurya Aggarwal',
                 	'email':'shaurya_786@gmail.com',
                 	'password':'shauryaloveshiking',
                 	'mobileNumber':7323658490
                 },
                 {
                 	'name':'Garima Loiwal',
                 	'email':'garima.loiwal@yahoo.com',
                 	'password':'garimaloveschatting',
                 	'mobileNumber':9871340659
                 },
                 {
                 	'name':'Shubham Vohra',
                 	'email':'shubham.vohra@gmail.com',
                 	'password':'shubhamlovessports',
                 	'mobileNumber':7623490813
                 }
]

let email = prompt("Enter your email:")
let password = prompt("Enter your password:")

//function to check login of user who has entered email and password
let checkLogin = (email,password,allUsers) =>{

	let isUserFound = false
	let passwordCorrect = false

    //using for of loop
	for(currentUser of allUsers)
	{
		console.log(currentUser)
		if (currentUser.email == email) {
			if(currentUser.password == password) {
				isUserFound = true
				passwordCorrect = true
				break
			} else
			{
				isUserFound = true
				passwordCorrect = false
				break
			}
		} else
		{
			isUserFound = false
		}
	} //end of for loop

	if(isUserFound == true && passwordCorrect == true) {
		alert('You are logged in')
	} else if(isUserFound == true && passwordCorrect == false) {
		alert('You have provided incorrect password')
	} else {
		alert('No user with this email found')
	}

}//end of arrow function


checkLogin(email,password,allUsers)