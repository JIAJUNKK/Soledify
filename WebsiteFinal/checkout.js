function validateForm(){
    var fullname = document.getElementById('fullname').value
    var email = document.getElementById('email').value
    var postcode = document.getElementById('postcode').value
    var nameOnCard = document.getElementById('nameOnCard').value
    var credtiNum = document.getElementById('creditNum').value
    var CVV = document.getElementById('CVV').value

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validPostcode = /^\d{5}$/;
    var nameRegex=/^[a-zA-Z]+$/

    if (!(email.match(validRegex))){
        alert("You have entered an invalid email address!")
        return false
    }
    else if (!postcode.match(validPostcode)){
        alert("You have entered an invalid postcode!")
        return false
    }
    else if (CVV.length < 3){
        alert("You have entered an invalid CVV!")
        return false
    }
    else if ((credtiNum.length > 16) || (credtiNum.length < 13)){
        alert("You have entered an invalid VISA card number!")
        return false
    }
    else if (!(fullname.match(nameRegex))){
      alert("You have entered an invalid full name! No spaces and number")
      return false
    }
    else if (!(nameOnCard.match(nameRegex))){
      alert("You have entered an invalid name on card! No spaces and number")
      return false
    }
    else{
        alert("Check Out Successful!")
    }
}

function updateSubTotal() {
  var table = document.getElementById("myTable");
  let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
    return total + parseFloat(row.cells[1].innerHTML);
  }, 0);
  document.getElementById("val").innerHTML = "SubTotal = RM" + subTotal.toFixed(2);
}
function onClickRemove(deleteButton) {
  updateSubTotal(); // Call after delete
}
