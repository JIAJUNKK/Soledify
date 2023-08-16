function loginValidate(){
    var email = document.getElementById("Email").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!(email.match(validRegex))){
      alert("You have entered an invalid email address!")
      return false}
    
    else{
      alert("Welcome back to Soledify!");
    }
}

