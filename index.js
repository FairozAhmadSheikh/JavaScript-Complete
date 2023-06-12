


/*
 *
* Datatypes in JavaScript
*
* number, string, boolean, null, undefined
* arrays, objects, functions
*
* + / * ** %
*
*
* differemnce between var, const, let
* type conversion in JS (implicit, explicit)
*
*/
/*                OBJECTS CREATION
let fer ={
apple : "red",
banana : "yellow",
mango : "Green",
primenumber : {},
2:"Number is two"
};
console.log(fer)
let objkey=Object.keys(fer)
console.log(objkey)
*/ 
                 /*/Function Creation
function sum(a,b)
{
    return a+b;
    
}
function prod(a,b)
{
    return a*b;   
}
a = prompt("Enter value of a ") 
b = prompt("Enter value of b ") 
console.log(prod(a,b))
console.log(sum(10,20))

function prod (name)
{
    return "Hello " +name
}
name =prompt("Enter your name ")
console.log(prod(name))*/
    /*/ Functions
    function thisfunction(name){
        return "I am  " +name
    }
    let name =String(prompt("Enter your name"))
    console.log(thisfunction(name)) */

    // Functions
   /* function DualSim(a,b,c)
{
    return c= a+b
}
let x = Number(prompt("Enter a number"))
let y = Number(prompt("Enter second number "))
console.log(DualSim(x,y))
*/
 /*let h =5
 console.log(h++ + ++h)
 */
 // COMPARISON OPERATORS
/* let a =7
let b=4
let c =2
let d = "Feroz"
console.log(a==7)
console.log(a==4)
console.log(7 != 7)
console.log(7 != "7")
console.log(7 !== 7)
console.log(d == "Feroz" )
console.log(d != "Feroz")
console.log(d !== "Feroz")
console.log(4 !== "4")
console.log(d != "Feroz")
console.log(d !== "Feroz")*/
            // TYPE OF Operator
/*let v = prompt("Enter your age")
let j ="Feroz"
let b =parseFloat("3.2")
let k = v>=18? "Can Vote ":"Cannot Vote "
console.log(k)*/


/*/ Vote  Calculator
let age =prompt("Enter Your Age")
if(age >=18)
{
    console.log("You can Vote Go and Vote ")
}
else
{
    let timeWait = 18-age; 
console.log("You Need to wait for "+ " "+timeWait+" "+ "Years To Vote")
} 
*/
                 //String opeartions 
/*let f ="String Is google to work with "
//let e =f.trim(); 
//alert(e)
let e =f.replace("google","Good")
console.log(e)*/
   /// String Operation
/*let string= prompt("enter your string")
let trimmed=string.trim();
let count= 0;
for(let i=trimmed.length-1; i>=0; i--)
{
    if(trimmed.charAt(i)===" ")
    break;
    else
    count=count+1;
}
console.log("The length of The last word is "+" "+count+" "+"Words")
*/

//ADVANCED STRING OPERATIONS  MUlti line strings
/*let _f="I am a New String"
let _t="I am a new string \n but with a line break"
let _q= `AS u see i am also new string 
but line break is shift + enter`
console.log(_f)
console.log(_t)
console.log(_q)
*/
// CONATINATION
/*let a = "I am string"
let b =" I ALSO AM "
console.log(a.concat(b))         // This does concatination
// Another concat     + also does concatination
let c =a+b
console.log(c)
*/


// String  REplacement 
// replace("double quotes only replaces first word" )
//let myString ="I AM feroz , feroz  Lives in the Botakadal"
//let replaced= myString.replace("feroz","Boy")
//console.log(replaced)
// to replace whole sentance use use replace(/what to be replaced /g By what replaced )
//let newreplacement = myString.replace(/feroz/g,"good")
//console.log(newreplacement)


//     CASE CHANGING 
/*let v = "I AM A STRING IN UPPERCASE BUT OUTPUT WILL BE IN LOWERCASE BECAUSE ITS MAJIC"
let z= v.toLowerCase()
console.log(z)
 let u ="i am in lowercase but the result will be in uppercase because its majic"
 console.log(u.toUpperCase())
*/
 // TEMPLETE STRINGS
 /*let Mystring =`I AM Feroz and  Feroz is a king and He will always be a King . But you are 
 a Fool the one who is reading it`
 let name = "BAZAZ "
 let newString = `I AM ${name} and  ${name} is a king and He will always be a King . But you are 
 a Fool the one who is reading it`
 console.log(newString)
 */


 // Include Strings
 /*let a ="john,deer,God,Father,cris,luna,tuna,fish"
console.log(a.includes("john"))
console.log(a.includes("Cobra"))
*/
 //  Problem Length of last word 
 /*let Mystring= "i am geeks for geeks"
 let t = Mystring.trim()
let len =0;
for (let i=0 ;i<=t.length-1 ; i++)
{
    if(t[i]== " ")
    {
        len=0;
    }
    else
    {
       len +=1
    }
}
console.log(len)
*/
                           //Problem  “Py” before String
/*let Mstring ="thon"
if(Mstring.startsWith("py" || "Py"))
{
    console.log("It already starts with py")
}
else
{
Mstring="Py"+Mstring
console.log(Mstring)
}
*/
        //Copies of a string
   /*let a = "this"
   let number =3
   let count ="";
   for(let i=1; i<=number; i++)
   {
   count = count+a;
   }
   console.log(count)
   console.log(count.length)

   */
      // Problem Area of triangle
/*let side1 =41
let side2 =9
let side3 =40
let semiperimeter =(side1+side2+side3)*1/2
console.log("The semi.param"+" : "+semiperimeter)
let area =Math.sqrt((semiperimeter*(semiperimeter-side1)*(semiperimeter-side2)*(semiperimeter-side3)))
console.log(area+" cm^2")
*/
//          Problem for finding largest among 3 numbers
/*/let a = prompt("Enter first number ")
let b =prompt("Enter second number")
let c =prompt("Enter the third number")
if(a>b && a>c)
    console.log("A is great"+a)
else if (b>c && b>a)
console.log("B is great"+b)
else 
console.log("C is great"+c)*/

// NEsted if else 
/*let num =prompt("Enter  a   value ")
if(num % 2 ===0)
{
    console.log(+num+"is even")
    if(num % 4 === 0)
    {
        console.log(num+"Is divisble by 4 also")
    }
    else{
        console.log("Its not divisible by four")
    }

}
else {
    console.log("The Number is odd")
    if (num % 5 === 0)
    {
        console.log(num+" is divisible by 5 also")
    }
    else 
    {
        console.log(num+" is not divisble by 5")
    }
}
*/


            // Amazon mini discount
/*let price =500;
let PurcahseNo=prompt("Purchase Number");
if(PurcahseNo === "0")
{
    price *=0.9
    console.log(price)
} 
else{
PurcahseNo +=1
console.log(price)
}*/

            // Cricket match score 
/*let Score=prompt("enter the score made by your team out of 200")
if(Score >=190)
console.log("Score is too goood Keep it up" )
if(Score >=150 && Score>=180)
console.log("Good Decent score ")
if (Score>=120)
console.log("Better but more is expected ")
else
console.log("You need to learn to play cricket then use score book")
*/
 
// Result and Grade Creation
/*let marks = prompt("ENTER your marks obtained out of 100")
if (marks==="100")
console.log("A++")
else if(marks>=90)
console.log("A grade")
else if (marks >=75)
console.log("B grade")
else if (marks >=60)
console.log("C Grade ")
else if(marks >=33)
console.log("D Gade")
else
console.log("E grade --> FAIL ")
*/
                    // SWithc case 
 // Switch cases are Used for varibales 
 // If -else used for boolean values

/*let month = prompt("Enter the Number of month to know the name of month ")
switch(month){
    case "1":
        month ="January"
        break;
    case '2':
        month="Feburary"
        break;
    case '3':
        month="March"
        break;
    case '4':
        month="April"
        break;
    case '5':
        month="May"
        break;
    case '6':
        month="June"
        break;
    case '7':
        month="July"
        break;
    case '8':
        month="August"
        break;
    case '9':
        month="September"
        break;
    case '10':
        month="October"
        break;
    case '11':
        month="November"    
        break;
    case '12':
        month="December"
        break;
    default:
        console.log("Invalid Number entered")
        break;
    }
    console.log(month)
*/
           //More Switch cases 
/*let DayNumber = prompt("Enter number of Day")
let Day =""
switch(DayNumber)
{
    case '1':
    Day="Saturday"
    break;
    case '2':
    Day="Sunday"
    break;
    case '3':
    Day="Monday"
    break;
    case '4':
    Day="Tuesday"
    break;
    case '5':
    Day="Wednsday"
    break;
    case '6':
    Day="Thursday"
    break;
    case '7':
    Day="Friday"
    break;
    default:
        Day ="Invalid-Day Number Entered"
}
console.log(Day)
*/

// Switch Case 
/*let fruit=prompt("Enter Fruit name in lowercase")
let color=""
switch (fruit){
case 'apple':
case 'grapes':
    color="red"
    break;
case 'lemon':
case 'banana':
case 'Mango':
    color="Yellow"
    break
case 'grape':
case 'jackfruit':
    color ="green"
    break;
    default:
        color="Invalid Fruit Enterd "
}
console.log(color)
*/
                 // XOR 
// How xor works ..same gives  0 different differnt gives 1 
/*let x = prompt("Enter first value ")
let y =prompt("Enter second value ")
let z = x ^ y
console.log("the Value of "+x+" "+"XOR"+" "+y+"is : "+z)
*/
                    // Privilages problem
/*let userType =prompt("What type of user are you ? admin or guest or seller ")
switch(userType)
{
    case 'admin':
        console.log("you are logged in as admin")
        break;
    case 'Seller':
        console.log("creating a seller environment for you")
        console.log("U can upload things etc , check sales item")
        break;
    case 'guest':
        console.log(`Guests are welcomed but not always 0
        so take it as Complement :) `)
    default:
        console.log("Get lost stop wandering around If you are Killing time here ")
        break;
    }
    */
               //Same problem but with if and else
/*let usertype =prompt("Who are you ? Admin Guest Seller")
if(usertype =="admin"||usertype==="Admin" || usertype==="ADMIN" )
{
    alert("Welcome Malik (Admin) , Take control of everything ")
}
else if(usertype === "Guest"||usertype === "guest"||usertype === "GUEST")
{
    alert("Guests are Welcome but  not always")
}
else if(usertype=== "Seller"||usertype=== "seller"||usertype=== "SELLER")
{
    alert("Welcome Seller Check your seling Lists below")
}
else{
    let v =usertype
    alert("Hato! Yaha say Hato! "+":"+v)
}
*/
                        // problem 
/*let num1 =prompt("ENTER A NUMBER FOR CHECKING")
if (num1==="0" ||num1==="00"||num1==="000")
{
    console.log("The number is zero")
}
else if (num1.startsWith("-"))
{
    console.log("The number is negative")
}
else
{
    console.log("Number is positive")
}
*/
                    // Give touch of functions
// let v = Number(prompt("enter starting number"))
// let w = Number(prompt("Enter ending number "))
// let x = Number(prompt("Enter number for finding"))
// function CheckInrange(start,end,number)
// {
    
//     if( number>=start && number<=end)
//     {
//         console.log("Number is in between somewhere")
//     }
//     else
//     {
//         console.log("Number outside range")
//     }
// }
// CheckInrange(v,w,x)
                      
                // More functions
// let x = Number(prompt("Enter the First  Number"))
// let y = Number(prompt("Enter the Second Number"))
// function calculation(num1,num2,prod)
// {
//     prod =num1*num2
//     console.log("The product is "+prod)
//     prod= num1+num2
//     console.log("The sum is "+prod)
//     prod =num1%num2
//     console.log("The Reminder is "+prod)
//     prod =num1/num2
//     console.log("The quotient  is "+prod)
//     prod =num1-num2
//     console.log("The differnece  is "+prod)


// }
// calculation(x,y)

            //  More Functions to work with
            //TAke input as a string and return it as reverse
// let i = prompt("Enter String To be reversed ")
// function reverseString()
// {
// for(let j=i.length;j>=0; j--)
// {
//     console.log(i[j])
// }
// } 
// reverseString(i)

   
//TAke input as a string and return it as reverse

    // let MyString =  prompt("Enter your string to be reversed")
    // let revString =""
    // let CorrectedString=""
    // function RevStrings(str)
    // {
    //     for(let i =str.length-1; i>=0; i--)
    //     {
    //         revString += MyString[i]
    //     }
    //     console.log("This is reversed string"+" "+revString)
    // }
    // RevStrings(MyString)
    // function Corrected(strr)
    // {
    //     for(let i=revString.length-1;i>=0;i--)
    //     {
    //         CorrectedString += revString[i]
    //     }
    //     console.log("here input is taken from reversed str"+" "+CorrectedString)
    // }
    // Corrected(revString)

        //Function to check Prime number
// let i =Number(prompt("Enter number for checking for prime numbers"))
// let isPrime="";
// function PrimeCheck(num)
// {
// for(let j=2; j<num; j++)
// {
//     if(num%j ===0)
//     {
//         isPrime="false"
//     }
// }
// if(isPrime ==="false")
// {
//     console.log("NT-Prime")
// }
// else
// {
// console.log("Prime")
// }

// }
// PrimeCheck(i)

 // Take array input from user and print sum of all elemnts
//  let a =Number(prompt("Enter the number of elemnts you want to enter"))
// let v=[]
// sum=0
// for(let j=0;j<a;j++)
// {
// v.push(Number(prompt("Enter your elemnts"+(j+1))))
// }
// console.log(v)
 
//  for(let i=0;i<a;i++)
//  {
//     sum+=v[i]
//  }
//  console.log("The sum of your elemnts is "+sum)
 
               /// Take same using functions 
// let i=Number(prompt("How many elemnyts do you want to enter") )     
// let array=[]
// let sum=0
// function TakeInput(num,arr)
// {
//    for(let j=0;j<i;j++)
//    {
//     arr.push(Number(prompt("Enter the elemnts"+(j+1))))
//    }
//    console.log("The elemnts entered are"+arr)
// }

// function sumOfarray(){
//     let sum=0;
//    for(let k=0;k<i; k++)
//    {
//     sum+=array[k]
//    }
//    console.log("The sum of elemnts of array are "+sum)
// }
// TakeInput(i,array)
// sumOfarray()

              //SUm of elemnts of array
// let range= Number(prompt("Enter the number of elemnts you want to enter"))
// let array=[]
//  for(let i=0; i<range; i++)
// {
//     array.push(Number(prompt("Enter your numbers"+(i+1))))

// }
// console.log("Entered Elements are as "+" "+array)
//incmoplete question

            //  For loop in objects ::for val in 
            // For loop  in arrays ::for val of 
// let object={
// "name":"Feroz",
// "rollNo":"12",
// "dob":"20-03-1998",

// };
// for(let key in object)
// {
//     console.log(object)
// }
// let arr=[10,20,30,40,50,60,70,80,90,100]
// index =0
// for(let item of arr)
// {
//     console.log(item)
// }
// console.log(arr)

                // Using while loops
                // ****
                // ****
                // ****
                // ****
// let lines=Number(prompt("enter  number of lines you want to print stars on "))
// let NumberStars=Number(prompt("Enter number of stars you want to print on a single line"))
// let Mystring="";
// for(let i=0;i<lines;i++)
// {
//     Mystring=""
// for(let j=0;j<NumberStars;j++)
// {
//     Mystring =Mystring+"*"
// }

// console.log(Mystring)
// }

                             /*    *
                                   **
                                   ***
                                   ****
                                   *****
                                   ******
                             */
// let row =7

// let mystring=""
// for(let j=0;j<row;j++)
// {
    
// for(let i=0;i<col;i++)
// {
    
// }
// mystring+="*"
//     console.log(mystring)
// }

// let rows =10;
// let stars=20;
// let string=''
// for (let i=1;i<=rows;i++)
// {
//     string=""
//     for(let j=1;j<=stars;j++)
//     {
//         string+="*"
//     }
//     console.log(string)
// }

// Sum of elemnts using for loop

// let sumofn=Number(prompt("Enter the number of elemnts you want to print "))
// let v =prompt("Answer in Yes or No! Do you want to print "+sumofn+"Numbers :")
// if (v==="Yes"||v==="YES"||v==="yes" )
// {
// for(let i=1;i<=sumofn;i++)
// {
//     console.log(i)
// }
// }
// else
// {
//     alert("Refresh page and Reenter ")
// }
// let z = prompt("Do you want the sum also Answer in Yes or No !")
// let sum=0
// if (z==="YES"||z==="Yes"||z==="yes")
// {
//     for (let i=1;i<=sumofn;i++)
//     {
//         sum=sum+i
//     }
//     console.log("The sum of your elemnts is "+": "+sum)
// }
// else
// {
//     alert("Thank you else it would be hectic to make calculations")
// }
//
// Start dealing with arrays now
// let UserNames=[]
// let v=(prompt("How many values will you be entering "))
// for(let i=0; i<v;i++)
// {
//     let t =String(UserNames.push(prompt("Enter  Your elemnts ")))
    
// }
// console.log(UserNames)
// let Search =prompt()

//    ARRAY Operations
// let array =["harry","Bose",true,false,null,undefined,22,11,32]
// console.log("The length of array is "+"  "+array.length+"  "+"The components of array are")
// console.log(array)
// Filter is like a coffee filter for filtering things
// let v=array.filter(s=>s%2===0)
// console.log(v)
// slice means selecting the small portiion
// let  z =array.slice(0,1)
// console.log(z)
// Splice does thing that it modifies things and works same as slice but we can add elements
// let q =array.splice(0,2,"FEROZ","AHMAD")
// console.log(array)
//    push : ADDS elemnt from the left 
// array.push("Sheikh","AABID ",false)
// console.log(array)
// Unshift :: Adds elemnt from the right 
// array.unshift("PEHLA ","DOOSRA","TEESRA")
// console.log(array)
// Pop :: REmoves elemnt from left
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// console.log(array)

// Shift ::   Removes elemnt form left 
// array.shift()
// array.shift()
// array.shift()
// array.shift()
// array.shift()
// console.log(array)
// let deleteType=prompt("from which side do you want to delete ")
// let deleteTimes=Number(prompt("How many numbers do you want to delete"))
// if (deleteType==="RIGHT" ||deleteType==="Right"||deleteType==="right")
// {
// for(let i=0;i<=deleteTimes;i++)
// {
//     array.pop()
// }
// console.log("This isyour new array after deleting elements from RIGHT (POP) ",array)
// }
// else if(deleteType==="left"||deleteType==="Left"||deleteType==="LEFT")
// {
// for(let i=0; i<deleteTimes;i++)
// {
//  array.shift()
// }
// console.log("This is your new array after shifting (LEFT delete) ",array)
// }
// else
// {
//     console.log("cANT be Done")
// }
                //Index of 
// let cal= ["helllo","chello","WElove","create"]
// let Conc=''
// function ViewElemnts(){
// for(let i=0;i<cal.length;i++)
// {
//     console.log(cal[i])
// }
// }
// function cONCAT(){
//     for(let i=0; i<cal.length;i++)
//     {
//         Conc=Conc+cal[i];
//     }
//   console.log(Conc)
// }
// ViewElemnts()
// cONCAT()
// console.log(cal.indexOf("WElove"))

// Khatre array 
// let a=[1,2,3,4,5,6,7,8,0]
// let b=[0,2,3,4,5,6,7,8,9]
//              // fINDING THINGS FROM HERE 
// let find=a.includes(1)
// let find =b.includes(1)
// console.log(find)
            //Make this thing menu driven
// let elearray=[]
// let ele=prompt("How many numbers are you going to enter ")
// for(let i =0;i<ele;i++)
// {
//     elearray.push(prompt("Enter your elemnts"))
// }
// console.log("Entered elemnts are "+" "+elearray)
// suppose you want to find the elmensts 
// let q=prompt("DO YOU WANT TO NOW FIND YOUR ANY ELEMNT")
// if(q==="yes"||q==="YES"||q==="Yes")
// {
//     let finder=prompt("Enter value to be searched ")
//     let x = elearray.includes(finder)
//     if(x)
//     {
//         alert("Elemnt found at the index of From left to right "+elearray.indexOf(finder))
//         alert("if i start from ending your elemnt is at  "+" "+elearray.lastIndexOf(finder))
//     }
//     else
//     alert("Entered element does not match my database")
// }
// else
// {
//     alert("Thnak you for not searching")
// }
//                //fOR  APPENDING TWOARRAYS 
// let sec=prompt("how many elemnts for  second array")
// let elearray2=[]
// for(let i=0;i<sec;i++)
// {
//     elearray2.push(prompt("Enter your elemnts "))
// }
// console.log("elemnts of second array are as "+" "+elearray2)
// let z=Boolean(prompt("do you want to APPEND the elemts of both arrays"))
// if(z==true)
// {
//     let concaaat=elearray.concat(elearray2)
//     console.log("THE APPENDED ARRAY IS "+concaaat)
// }
// else{
//     console.log("HATO YAHA SAY")
// }
                //FOR ADDING TWO ARRAYS
// let a1=Number(prompt("Enter the table you want to print"))
// let a2=[1,2,3,4,5,6,7,8,9,10]
// let s1=[]
// // function addiition(){
// for(let i=0;i<a1.length;i++)
// {
//     console.log(s1[i]=a1[i]+a2[i])
// }
//  console.log(s1)
// }
// function  mult()
// {
//     for(let i=0;i<a2.length;i++)
//     {
//        console.log(s1[i]=a1*a2[i])
//     }
//     console.log(s1)
// }
// mult()
// // addiition()

//  maping is done to reflect new values to the array 

// let v=[1,2,3,4,5,6,7,8]
// let t= v.map(a=>a*2)
// let q =v.map(ele => ele *3 )
// console.log(t)
// console.log(q)

// Lets seee the use of find  :: will find only first element that matches the function
// let v=[10,20,30,40,50,7,60,70,80,60,90]
// let q =v.find(e=>e%7===0)          /// will find only first so use filter 
// console.log(q)
// let n =  v.filter(e=>e%7===0)
// console.log(n)

 // lETS DEAL WITH STRINGS  string are immmutabale they cant be  cahnged for specific location 
//  let str="feroz"
//  str="Ahmad"
//supposse i want to change an elemnt at a particular location thts not possibele
// str[2]='e'
// console.log(str)
 /// THIS IS POSSIBLE ONLY IN ARRAYS  
//  let a =[10,20,30,40,50]
//  a[1]=40
//  console.log(a)

// Trim is used to remove spaces from starting and ending 

// console.log(str.trim())

// Replace replaces the element at one place replace all replaces elemnt at every occurance

// let str="Feroz is  Not Good boy"
// console.log(str.replace("Not Good","Very Good"))
// console.log(str.replace("Feroz","Abrar"))
// console.log(str.replaceAll("o","X"))

// Slice works same as array 
// let str="Coding Ninja"
// let str2=""
// console.log(str.length)
// for(let i=0;i<str.length;i++)
// {
//     if(str[i]!==" ")
//     {
//     str2=str2+str[i]
//     }
// }
// console.log(str2)
 // Splitting is done to split the characters or spaces and returns as array 
// let xtr ="I AM GOAT"
// console.log(xtr.split(''))
