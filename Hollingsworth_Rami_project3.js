// Author: Rami Hollingsworth 
//  1 Dec 2011 
// Created for: SDI Project 2
// Trying to Get Money


/* Richard going out on a date with a girl he met at the local mall. She
said to meet her at the theater 700pm. At 630 Richard shows up to the
theater ready for his date when he realizes each ticket is $10.50 and he
only has $5. He heads over to the ATM machnine puts in his card and
enters the wrong pin. The ATM machine spits back out his card so he can
put in the correct pin. He tries again and gets it right. He proceeds to
try to take out $200. He has $424.76 in his account. The ATM gives
out 200 dollars in 20 dollar increments.Richard takes his money and heads over to the theater
for his date.*/

var correctPin = 3221; movieTicket = 10.50; twoTickets = (movieTicket * 2); money = 5;
var myPin = "Richard says, \"If I remember correctly, my pin is 3222\".";
var transactNames = ["SAVINGS", "CHECKING", "CREDIT CARD"],
transactCount, lastTransactIndex;
transactnCount = transactNames.length;
lastTransactIndex = transactCount -1;
function moreMoney ( oldMoney,withdrawel ) {
	var dateMoney = oldMoney + withdrawel; console.log(dateMoney);
	}
function enterPin (correctPin, wrongPin) { 
if (correctPin === wrongPin) {console.log ("ATM says, " + "\"Please Choose\"");  
}else { console.log ("ATM says, \"Wrong Pin. Please Try Again.\"");}
}function addMoney2 (bill,money1) {while (bill <= money1) { bill = bill + 20; console.log (bill + " dollars.");
}
}
function addMoney (bill,money1) {while (bill <= money1) { console.log (bill + " dollars.");
bill++;}
}
console.log ("Richard has a date with a girl he met at the mall.");
console.log ("He needs to meet her at the movies at 700pm.");

if (5 >= twoTickets) {console.log ("Richard is ready for his date.");
}else { console.log ("He shows up at 630pm with a wallet full of one dollar bills"); }
console.log ("How much do I have.");
addMoney(1,5);

console.log ("5 dollars is not enough.");
console.log ("Richard goes to the ATM and puts his card in"); 
console.log(myPin);

enterPin (3222,3221);

console.log ("How about 3221")

enterPin (3221,3221);

console.log ("Selection and Withdraw Amount increments of 20");

atmTransactNames = new Array(transactCount);
console.log("Your choices.");
for (var i = 0; i <= transactNames.length; i++) {
console.log("- " + transactNames[i] + ".");
}
if ((twoTickets) <=money + 20) {console.log ("200")};
console.log ("ATM Shoots out bills."); 
console.log ("Richard adds it up.");
addMoney2(0,180)
moreMoney(200,5);

if (25 > movieTicket *2) {console.log ("Richard says, " + "$" + (200 + money) + " \"Thats enough. Now of to meet my date.\""); }


