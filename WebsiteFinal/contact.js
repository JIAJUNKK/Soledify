function contactvalidateForm() {

    var phone = document.getElementById("Phone").value;
    var email = document.getElementById("Email").value;
    var EmailvalidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var PhonevalidRegex = /^(\+?6?01)[02-46-9]-*[0-9]{7}$|^(\+?6?01)[1]-*[0-9]{8}$/;

    if (!(email.match(EmailvalidRegex))){
        alert("You have entered an invalid email address!")
        return false
    }
    else if (!(phone.match(PhonevalidRegex))){
        alert("Please enter your phone number in 0123456789 or any Malaysian phone number format! No spaces or strokes")
        return false
    }
    else{
        alert("Successful submitted! Soledify will contact you within 3 working days. Thank you for helping us making Soledify better!")
    }
    }
    
    