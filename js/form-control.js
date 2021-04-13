function validateForm(){
	var name = document.forms["contact-form"]["user_name"].value;
	var email = document.forms["contact-form"]["email"].value;
	var message = document.forms["contact-form"]["message"].value;

	if (name.length<1) {
        document.getElementById('error-name').innerHTML = "This field is required";
        document.getElementById("user-name").style.border = "0.0625rem solid var(--secondary--red)";
    }
    if (email.length<1) {
        document.getElementById('error-email').innerHTML = "This field is required";
        document.getElementById("user-email").style.border = "0.0625rem solid var(--secondary--red)";


    }
    if (message.length<1) {
        document.getElementById('error-message').innerHTML = "This field is required";
        document.getElementById("user-message").style.border = "0.0625rem solid var(--secondary--red)";
    }          
    if(name.length<1 || email.length<1 || message.length<1){
       	return false;
    }            
}