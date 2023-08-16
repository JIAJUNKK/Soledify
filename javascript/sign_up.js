function validateForm() {
var password = document.getElementById("password").value
var confirmPassword = document.getElementById("confirmPassword").value
var fname = document.getElementById("fname").value
var lname = document.getElementById("lname").value
var nameRegex=/^[a-zA-Z]+$/
var email = document.getElementById("Email").value;
var confirmEmail = document.getElementById("confirmEmail").value;
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if (password.length < 8) {
    alert("Password must be at least 8 characters!");
    return false
}
else if (password != confirmPassword){
    alert("Password not matching");
    return false
}
else if ((fname.length < 3) || !((fname.match(nameRegex)))){
    alert("You have entered an invalid first name! No spaces and no numbers!");
    return false
}
else if ((fname.length < 3) || !((lname.match(nameRegex)))){
    alert("You have entered an invalid last name! No spaces and no numbers!");
    return false
}
else if (email != confirmEmail){
    alert("Email not matching");
    return false
}
else if (!(email.match(validRegex))){
    alert("You have entered an invalid email address!")
    return false
}
else{
    alert("Successful Sign UP! Welcome to Soledify")
}
}

