window.sumInputs = function() {
    var inputs = document.getElementsByTagName('input'),
        result = document.getElementById('total');
    var checkbid = document.getElementById('bid').value;
    var sum = 0;
    var element = document.getElementById('shoeName');
    var shoeName = element.innerHTML;
    var regex=/^[0-9]+$/

    if (checkbid < 30){
      alert ("Invalid bid! Minimum bid is rm30");
    }
    else if (!(checkbid.match(regex))){
      alert ("Please enter numbers only !! E.g. for rm20, enter 20");
    }
    else if (checkbid >= 30){
      for(var i=0; i< inputs.length; i++) {
        var ip = inputs[i];
    
        if (ip.name && ip.name.indexOf("total") < 950) {
            sum += parseInt(ip.value) || 0;
        }
    }
    result.value = sum;
    }
    if (result.value >= 950){
      document.getElementById('submit-btn').disabled = 'disabled';
      document.getElementById('bid').setAttribute("readonly", true);
      document.getElementById('total').value='950'
      alert("Congratulation! You have won " + shoeName + " by BIN!")
    }
}