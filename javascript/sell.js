function showSection(select){
    if(select.value==0){
     document.getElementById('sell_div').style.display = "block";
     document.getElementById('auction_div').style.display = "none";

    } 
    else if (select.value ==1){
        document.getElementById('sell_div').style.display = "none";
        document.getElementById('auction_div').style.display = "block";   
    } 
    else{
        document.getElementById('sell_div').style.display = "none";
        document.getElementById('auction_div').style.display = "none";   
    }
} 

function sellValidate(){
    var name = document.getElementById("sell-product-name").value
    var size = document.getElementById("shoe-size").value
    var price = document.getElementById("sell-price").value
    var NumberRegex=/^[0-9]+$/;

    if (name.length < 6){
        alert("You have entered an invalid name!")
        return false;
    }
    else if (!(size.match(NumberRegex))){
        alert("Please enter number only for shoe size! E.g. For uk9, enter 9")
        return false;
    }
    else if (size > 20 || size < 4){
        alert("Please enter valid shoe sizes only! uk4 - uk20")
        return false;
    }
    else if (!(price.match(NumberRegex))){
        alert("Please enter number only for sell price!")
        return false;
    }
    else{
        alert("Successful! Our team will review your Sell request in 1-2 working days")
    }
}
function auctionValidate(){
    var name = document.getElementById("auction-product-name").value
    var size = document.getElementById("auction-shoe-size").value
    var minBid = document.getElementById("min-bid-price").value
    var maxBid = document.getElementById("max-bid-price").value
    var bin = document.getElementById("BIN-price").value
    var NumberRegex=/^[0-9]+$/;
    
    if (name.length < 6){
        alert("You have entered an invalid name!")
        return false;
    }
    else if (!(size.match(NumberRegex))){
        alert("Please enter number only for shoe size! E.g. For uk9, enter 9")
        return false;
    }
    else if (size > 20 || size < 4){
        alert("Please enter valid shoe sizes only! uk4 - uk20")
        return false;
    }
    else if (!(bin.match(NumberRegex))){
        alert("Please enter number only for Buy It Now (BIN) price!")
        return false;
    }
    else if (!(minBid.match(NumberRegex))){
        alert("Please enter number only for Minimum bid (min bid) price! E.g. For rm50, enter 50")
        return false;
    }
    else if (!(maxBid.match(NumberRegex)) && (maxBid != "null")){
        alert("Please enter number only for Maximum bid (max bid) price! E.g. For rm50, enter 50. ")
        return false;
    }
    else if (minBid > maxBid){
        alert("Minimum bid (min bid) cannot larger than Maximum bid (max bid)! If you don't want to include a max bid price, enter null")
        return false
    }
    else{
        alert("Successful! Our team will review your Auction request in 1-2 working days")
    }
}






