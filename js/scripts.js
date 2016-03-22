/*Restaurant 
Standard = 15% 
I'm feeling generous = 20%*/

function calc() {
    var bill = document.getElementByID('bill').value;
    var tip = bill * .20;
    var total = bill + tip;
    document.getElementById("tip").innerHTML = "$" + (tip).toFixed(2);
    document.getElementById("total").innerHTML = "$" + (total).toFixed(2);    
}

/*Delivery = 10%
I'm feeling generous = 15%
2$ minimum


Beauty Salon
Standard = 15%
I'm feeling generous = 20%

Massseuse
Standard =10
I'm feeling generous = 15

Bartender
$1 per drink
Standard = 20%
I'm feeling generous = 25%

Parking Valet
$2 - $5

Cab driver
Standard = 10%*/