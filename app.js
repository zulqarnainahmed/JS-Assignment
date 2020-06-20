// Chapter#21-25


1) var x = prompt("Write your First name")
var y = prompt("Write your Last name")
fullName = x + y
alert("Assalamualikum" + fullName)

2) var x = prompt("Please Write about your favorite Mobile model")
var y = x.length
document.write("Length of string :" + y)

3) var x = "Pakistani"
var y = x.indexOf("n")
document.write("String : " +  x)
document.write("Index of 'n' is : " + y)

4) var x =  “Hello World”
var y = x.lastIndexOf("l")
document.write("String : " +  x)
document.write("Index of 'l' is : " + y)

5) var x = “Pakistani”
var y = x.charAt(3)
document.write("String : " +  x)
document.write("Character at index 3 is : " + y)

6) var x = prompt("Write your First name")
var y = prompt("Write your Last name")
 var res = x.concat(y);
alert("Assalamualikum " + res)

7) var x = "Hyderabad"
var y = x.replace("Hyder","Islam")
document.write("City :" + x)
document.write("After replacement : " + y)

8) var message = “Ali and Sami are best friends. They play cricket and football together.”;
var y = message.replace(/and/g,"&")

9) var x = "472"
var y = Number(x)
document.write("Value : " + x)
document.write("Type: String" )
document.write("Value : " + y)
document.write("Type: Number")

10) var x = prompt("Write something please" )
var y = x.toUpperCase()
document.write("User input: " + x)
document.write("UpperCase : " +y)

11) var x = prompt(Enter something")
var a = x.slice(0,1)
var b = x.slice(1)
var a = a.toUpperCase()
var y = a+b
document.write("Original input : " + x)
document.write("Title case : " + y)

12) var num = 35.36 ;
var y = x.toString().replace(".", "")
document.write("Number : " + num)
document.write("String : " + y)

13) var x = @
var y = .
var a = ,
var b = !
var str = prompt("Write your name")
for (var i = 0; i < str.length; i++) 
 {
    if (str.indexOf(i) === x || str.indexOf(i) === y || str.indexOf(i) === a || str.indexOf(i) === b){
alert("Write your name correctly")
}
}
document.write("You have written " + str)


14) var B = prompt("Wellcome to our Bakery. What do you want to order")
 var A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
B = B.toLowerCase()
for(var i=0; i<A.length; i++){
if(A[i] === B){
alert(B + " is available at " + i + " index in our bakery")
}
else{
alert("We are Sorry" + B + " is not available in our bakery")
}
}

15) 

16)

17) var x = prompt("write something")
var y = x.length
var z = x.charAt([y]-1)
document.write("Input : " + x)
document.write("The last character is : " + z)

18) var str = "the quick brown fox jumps over the lazy dog"
letter = "the"
     var letter_Count = 0;
     for (var position = 0; position < str.length; position++) 
     {
        if (str.charAt(position) === letter) 
          {
          letter_Count += 1;
          }
      }
      document.write("The word 'the' occured " +  letter_Count + "times")
  
    
Chapter # 26-30



1) var x = prompt("Please enter a positive integer")
var y = Math.round(x)
var z = Math.ceil(x)
var a = Math.floor(x)
document.write("Number : " + x)
document.write("Rounded Number : " + y)
document.write("Ceil Number : " + z)
document.write("Floor Number : " + a)

2) var x = prompt("Please enter a negative integer")
var y = Math.round(x)
var z = Math.ceil(x)
var a = Math.floor(x)
document.write("Number : " + x)
document.write("Rounded Number : " + y)
document.write("Ceil Number : " + z)
document.write("Floor Number : " + a)

3) var x = prompt("Please enter a integer")
var y = Math.abs(x)
document.write("Number : " + x)
document.write("Absolute Number : " + y)

4) var x = Math.random()*6
var y = Math.round(x)
document.write("Random Dice Value : " + y)
var a = Math.random()*6
var y = Math.round(a)
document.write("Random Dice Value  : " + y)

5) var x = Math.random()*2
var y = Math.round(x)
if(y===2){
    document.write(y)
    document.write("Random Coin Value : Heads")
}
else {
        document.write(y)
        document.write("Random Coin Value : Tails")
    }

6) var x = Math.random()*100
var y = Math.round(x)
document.write("Random Number between 1 and 100 is : " + y)

7)  var x = prompt("Enter your weight (weight can be 50, 50kgs, 50.2kgs or 50.2kilograms ")
var y = Number(x) 
var z = parseInt(x)
document.write("The weight of user input is " + z + " Kilograms") //Remaining

8) var x = Math.random()*10
var y = Math.round(x)
var z = prompt("Guess the secret number")
if(z===y){
    alert("Congratulations ")
}
else{
    alert("Try again")
}
var userName = prompt("Enter Your Username")
us = parseInt(userName);
for (var i = 0; i < userName.length; i++) {
    if (us == 33 || us == 44 || us == 46 || us == 64) {
        alert("Please enter correct username")
        break;
    }
    else {
        alert("Thankyou")
    }
} 

Chapter 31-34


1) var x = new Date
document.write(x)

2) var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var x = new Date
var y = monthNames[x.getMonth()]

3) var dayNames = ["Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat" , "Sun"];
var x = new Date
var y = dayNames[x.getDay()]
document.write("Today is : " + y)

4) var dayNames = ["Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat" , "Sun"];
var x = new Date
var y = dayNames[x.getDay()]
if(y ==="Sat" || y ==="Sun"){
document.write("It's Fun day ")
}

5) var x = new Date
var y = x.getDate()
if(y<17){
document.write("First Fifteen days of the month")
}
else{
document.write("Last days of Month")
}

6) var x = new Date
var y = x.getTime()
var z = y / (1000*60)
document.write("Current Date : " + x)
document.write("Elapsed milliseconds since January 1,1997 : " + y)
  document.write("Elapsed minutes since January 1,1997 : " + z)  

7) var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
if(time< "12:00:00"){
alert("It's AM")
}
else{
alert("It's PM")
}

8)  var x = new Date(2020, 11+1,1)
laterDate = new Date(x - 1);
document.write("Later Date : " + laterDate)

9) var x = new Date(2020, 2+1,25)
var y = new Date
var a = x.getTime()
var b = y.getTime()
var z = round(((b-a)/(1000*60*60*24)))
document.write(z + " days have passed from this Ramadan,2020")

10) var x = new Date(2015, 0,1)
y = x.getTime()
var z = new Date
var a = z.getTime()
document.write((a-y) + " seconds have passed since the beginning of 2015")

11) var z = new Date
var x = new Date(2020,5,18,11,14,00)
document.write("Current date is : " + z + "1 hour ago it was : " + x)

12) var z = new Date
var x = new Date("1920")
document.write("Current date is : " + z + " 100 years back it was " + x)

13) var x = prompt("Write your age")
x = Number(x)
var y = new Date
var z = y.getFullYear()
document.write("Your age is : " + x)
document.write(" Your birth year is : " + (z-x))

var a = prompt("Write the Customer name")
var b = prompt("Write month name")
var c = prompt("How many units you have consumed in this month")
c = Number(c)
var d = prompt("Define your charges per unit ")
d = Number(d)
netAm = c * d
var e = prompt("Write you late amount surcharge")
e = Numbere(e)
var g = (+netAm) + (+e);
g = Number(g)
document.write("<h1>K-Electric Bill </h1>", "<br>")
document.write("Customer Name : " + a, "<br>")
document.write("Bill Month : " + b, "<br>")
document.write("Number of Units : " + c, "<br>")
document.write("Charges per Unit : " + d, "<br>")
document.write("Net Amount Payable (Within due date) is : " + netAm, "<br>")
document.write("Late amount surcharge : " + e, "<br>")
document.write("Gross Amount payable (After due date) is : " + g , "<br>")


Chapter 35 - 38

1) func time(){
    var x = new Date
    document.write(x)
}
time()

2) func greet(){
    var x = prompt("Write your first name")
    var y = prompt("Write your last name")
    alert("Assalamualikum " + x + " " + y)
}
greet()

3) func sum(){
    var x = prompt("Write first number")
    var y = prompt("Write second number")
    return ((+x) + (+y))
}
sum()

4) func op(){
    var x = prompt("Write first number")
    var y = prompt("Write second number")
    var z = prompt("Which operation do u want to use")
    var res = (+x) + z + (+y)
    return (res)
    document.write("The result of above calculation is : " + res)
}
op()

5) var func sq(x){
    var x = x * x
    return x
}
sq(5)

6) var x = prompt("Enter a number for calculating factorial")
function fact() {
    var res = factorial(x)
    document.write("The factorial of given number is : " + res)
}

7) function count() {
    var x = prompt("Enter first number")
    var y = prompt("Enter second number")
    x = Number(x)
    y = Number(y)
    for (var i = x; i <= y; i++) {
        document.write(i, "<br>")
    }

    8) var x = prompt("Enter base value")
    var y = prompt("Enter perpendicular value")
    function hyp() {
        var res = sqrt(hypo)
        sq()
        function sq() {
            x = x * x
            y = y * y
            hypo = x + y
            hyp()
        }
    }
    hyp()

    9) function area(x = 3, y = 4) {
        var ar = x * y
    }
    area()

    function area(x, y) {
        var ar = x * y
    }
    area(3, 4)

    10) function pal()
    var word = prompt("Enter your word")
    var check = " "
    for (var i = word.length - 1; i >= 0; i--) {
        check + = word[i]
    }
    if (word === check{
        alert("Your word is palindrome")
    }

    11)
    function uppercase(str) {
        var array1 = str.split(' ');
        var newarray1 = [];

        for (var x = 0; x < array1.length; x++) {
            newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
        }
        return newarray1.join(' ');
    }
    console.log(uppercase("the quick brown fox"));
    12)function find_longest_word(str) {
        var array1 = str.match(/\w[a-z]{0,}/gi);
        var result = array1[0];

        for (var x = 1; x < array1.length; x++) {
            if (result.length < array1[x].length) {
                result = array1[x];
            }
        }
        return result;
    }
    document.write("Longest Word : " + find_longest_word('Web Development Tutorial'));

13) function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));  

    14) function calcCircumference(r) {
        var cir = 2 * 3.142 * r
        document.write("The circumference of circle is :" + cir)
    }
    function calcArea(r) {
        var ar = 3.142 * r * r
        document.write("The area of circle is : " + ar)
    }

