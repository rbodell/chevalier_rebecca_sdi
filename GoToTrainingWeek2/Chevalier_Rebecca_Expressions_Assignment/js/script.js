
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
 alert("Oh, I use "+cablecompany+" too!");
 //console.log
 console.log("Name of user's cable company is "+cablecompany+".");

 //Ask the user how much their cable bill is
 var cablebill = prompt ("And how much is your bill with "+cablecompany+" each month? \n(TIP: Do NOT use the dollar sign!)");
 //Funny comment to let the user know I retained more information
 alert("Wow... $"+cablebill+" is a lot of money just to watch Game of Thrones!");
 //console.log the value for the cable bill
 console.log("Amount of user's cable bill is $"+cablebill+".");

 //Ask the user how much money they make a month
 var takehomepay = prompt ("I'm going to calculate how much money you'll have left over after your "+cablecompany+" bill now. How much is your monthly take home pay?");
//console.log the value of the take home pay
 console.log("Amount of user's take home pay is $"+takehomepay+".");
 //Funny comment to let the user know I retained the information
 alert("Yikes. Only $"+takehomepay+"? Hope you graduate Full Sail...")

 //Confirming begining of calculation
 alert("Ok! Let's calculate!");

 // Figure out how much you have left over after cable bill charge
 var amountleftover = (takehomepay - cablebill);
 //console.log to track the amount left over
 console.log("Amount left over after cable bill is removed from salary is $"+amountleftover+".");
 //Letting the user know the result
 alert("So after your "+cablecompany+" bill of $"+cablebill+", you will have $"+amountleftover+" to spend on other things!");

 //Adding in user's electric bill
 alert("While we're at it, let's add in your electric bill and water bill!");
 var electricbill = prompt ("How much is your electric bill?");
 alert("Great. So, your electric bills is $"+electricbill+". Lets continue.");
 //console.log tracking the electric bill value
 console.log("The amount of the user's electric bill is $"+electricbill+".");

 //Adding in user's water bill
 var waterbill = prompt ("What is the amount of your water bill?");
 alert("Okay. So you spend $"+waterbill+" on water a month.");
 //console.log tracking the water bill value
 console.log("The amount of the user's water bill is $"+waterbill+".");

 //Calculating total monthly utility bill
 //In the form of an array
 var bills = [cablebill, waterbill, electricbill];
 var totalmonthlybills = parseInt(bills[0]) + parseInt(bills[1]) + parseInt(bills[2]);
 alert("Your total monthly bills amount to $"+totalmonthlybills+".");
console.log("User's monthly bills amount to $"+totalmonthlybills+".");

 //Letting user know we will calculate the total annual cost of bills
 alert("Since you are here, let's see how much your annual cost of utilities will be.")
 //Function for calculating yearly total charge of monthly bill
 var yearlybillcharge = (totalmonthlybills *= 12);
 //Calculating utility bills for the year
 alert("Your annual utility bills will cost you $"+yearlybillcharge+", for a total of 12 months.");
 //Adding the amount of annual salary to the console
 console.log("The user's annual utility cost will be $"+yearlybillcharge+" for a total of 12 months.");
 var annualsalary = (takehomepay *= 12);
 console.log("The user's annual salary will be $"+annualsalary+".");

 //Letting the user know their annual salary
 alert("By the way... your annual salary is $"+annualsalary+". \n(PRO TIP: Stay in school)");

 //Funny alert hoping the user's annual salary can coveer the cost of the annual utilities
 alert("I hope your annual salary of $"+annualsalary+" is enough to cover your yearly utility cost of $"+yearlybillcharge+"!");