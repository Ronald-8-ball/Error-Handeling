try{
statement("USSD Code")
}
catch(err){
document.getElementById("p1").innerHTML = err.message
}