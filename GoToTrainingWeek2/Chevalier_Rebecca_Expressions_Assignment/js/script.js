
 /*
Rebecca Chevalier
SDI Section #1
Expressions Assignment
09/10/2015
 */

// Letting the user know what to do
 alert("Hi there! I am trying to figure out how much money you have left from your paycheck after you pay your cable bill! ");

 //Asking the user what cable company they use
 var cablecompany = prompt("What cable company do you use? ");

 //Fun comment to let the user know I retained the information
 alert("Oh, I love "+cablecompany+"!");
 //console.log
 console.log("Oh, I love "+cablecompany+"!");

 //Ask the user how much their cable bill is
 var cablebill = prompt ("And how much is your bill with "+cablecompany+" each month? (TIP: Do not use the dollar sign!)");

 //Funny comment to let the user know I retained more information
 alert("Wow... $"+cablebill+" is a lot of money just to watch Game of Thrones!");

 //console.log
 console.log("Wow... $"+cablebill+" is a lot of money just to watch Game of Thrones!");

 //Ask the user how much money they make a month
 var takehomepay = prompt ("I'm going to calculate how much money you'll have left over after your "+cablecompany+" bill now. How much is your monthly take home pay?");

 //Funny comment to let the user know I retained the information
 alert("Yikes. Only $"+takehomepay+"? Hope you graduate Full Sail...")
 //console.log
 console.log("Yikes. Only $"+takehomepay+"? Hope you graduate Full Sail...");

 //Confirming begining of calculation
 alert("Ok! Let's calculate!");

 // Figure out how much you have left over after cable bill charge
 var amountleftover = (takehomepay - cablebill);

//Letting the user know the result
 alert("So after your "+cablecompany+" bill of $"+cablebill+", you will have $"+amountleftover+" to spend on other things!");
//console.log
 console.log("So after your "+cablecompany+" bill of $"+cablebill+", you will have $"+amountleftover+" to spend on other things!");

 //Letting the user know about the second function
 alert("Since you are here, I can also let you know how much your cable bill will cost you for 12 months.")

 //Function for calculating yearly total charge of monthly bill
 var yearlycablecharge = (cablebill *= 12);

 //Calculating for the year
 alert("Your "+cablecompany+" bill will cost you $"+yearlycablecharge+" for a total of 12 months.");
 //console.log
 console.log("Your "+cablecompany+" bill will cost you $"+yearlycablecharge+" for a total of 12 months.");

 alert("While we're at it, let's add in your electric bill and water bill!");
 var electricbill = prompt ("How much is your electric bill?");
 alert("Great. So, your electric bills is $"+electricbill+". Lets continue.");
 console.log("Great. So your electric bill is $"+electricbill+". Lets continue.");

 var waterbill = prompt ("What is the amount of your water bill?");
 alert("Okay. So you spend $"+waterbill+" on water a month.");
 console.log("Okay. So you spend $"+waterbill+" on water a month.");

 var bills = [cablebill, waterbill, electricbill];
 var totalmonthlybills = bills[0] + bills[1] + bills[2];
console.log(totalmonthlybills);

 alert("Your total monthly bills amount to $"+totalmonthlybills+".");


