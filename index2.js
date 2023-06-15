// Second part from jason 
// OBJECTS are used to store multiple things abbout any thing

// let cricketer1 ="MS dohni"
// let cricketer2 ="Sheikh feroz"  
// let cricketer1 =
// {
// name:"Dhoni",
// age:65,
// color:"blue",
// plansafterretirement :null, //null here means not known
// iplteam:["CSK","RPSG"],
// iscaptain:true

// };
// console.log(cricketer1.name)
// // Another way of accesing
// console.log(cricketer1['age'])
// console.log(cricketer1.color)
// console.log(cricketer1.age)
// console.log(cricketer1.plansafterretirement)
// console.log(cricketer1.iplteam)
// console.log(cricketer1.iscaptain)
// //lets now add some properties 
// /// using two different ways
// cricketer1.team ='india'
// console.log(cricketer1.team)
// // secondway
// cricketer1['isOLD']='true'
// console.log(cricketer1.isOLD)

// Delete keyword deletes 
// let feroz={
// rollno:"180349",
// age:"25"
// };
// feroz['isgood']=true
// feroz.isbad=false
// // console.log(feroz)
// // delete feroz.age
// // console.log(feroz)

// //  destructuring objects 
// // VEry important

// let{age,rollno}=feroz
// console.log(age)
// console.log(rollno)

// Somethings about functions
// 'this' points to the object
// let name="feroz"
// const troub={
//  name:"King",
//  greet:function()
//  {
//  console.log("my name is",name)
//  console.log(`my name is ${this.name}`)
//  }
// };
// console.log(troub.greet())

// // Iteration through objects is done by for in loop
// let zo={
//     name:"maharaja",
//     age:16,
//     ruledin:"jammu"
// };
// let i=0
// for(key in zo)
// {
//     //console.log(key) // prints keys thats what for in is used
//     console.log(key+' : '+zo[key])
// }
// // KEYS : left side 
// // how to accesss keys only
// console.log(Object.keys(zo))

// // values : right side
// console.log(Object.values(zo))

// // ENTRIES : whole values
// console.log(Object.entries(zo))

// //to  know how many elemnts are there in arrray
// console.log(Object.keys(zo).length)

// Deal with Objects 
//freeze does not allow to change keys  or values
// let str={
//     name:"great",
//     age:22
// };
// // Object.freeze(str)
// // str.age=2
// // console.log(str.age)
// /*let me create a new str object
// and copy new string into old one using
// ASSIGN
// */ 
// let str2={
//     color:"Good",
//     state:"Andhra Pradesh"
// };
// // Object.assign(str,str2)
// // console.log(str)

// //Spread opeation removes the curly or square brackets and concats them not as arrays or anything
// let str3 ={...str,...str2};
// console.log(str3)

//sets are used to deal with unique items no duplicatese
// syntax
// let s=new Set();
// s.add(12)
// s.add(16)
// s.add(98)
// //if we add duplicate thiw wont be added
// //s.add(12)
// console.log(s)
// // has() is used to see if set has something in it
// console.log(s.has(12))
// console.log(s.has(2))
// // delete() : delete an elemnt of set
// s.delete(98)
// console.log(s)
// //clear() : clears a set completely
// s.clear()
// console.log(s)
// //size(): gives sizze of set
// console.log(s.size)

/*/ Map- used for storing key value pairs
in objects keys are strings
in Maps key can be any data type
order is maintained as compared to objects
*/
//set is used to add in java its add
// let m=new Map();
// m.set("Dhoni",7)
// m.set("Kohli",17)
// m.set("CR",7)
// //console.log(m)
// //get() : used to get element 
// console.log(m.get("CR"))
// console.log(m.get("Kohli"))
// // has(): used to check
// console.log(m.has("Dhoni"))

// // delete
// m.delete("CR")
// console.log(m)

// // clear
// m.clear();
// console.log(m)

//Instance of checks type of class 
// let s=new Set()
// let m=new Map()
// console.log(s instanceof Set)
// console.log(s instanceof Map)
// console.log(m instanceof Map)

// //Everything in Javascript is a object 
// // so below everything will be true
// console.log(s instanceof Object)
// console.log(s instanceof Object)
// console.log(m instanceof Object)

//  let seroz={};
//  seroz.getname="ferox"
//  seroz['character']="good"
//  console.log(seroz.getname)
//  console.log(seroz.character)
//  console.log(Object.keys(seroz,+seroz[key]))

//lets learn more about objects and functions
 // QUESTION ONE 

//  let person={
//     Name:"ALI",
//     Age:32,
//     gender: "MALE"
//  };
// let k=Object.keys(person).length
// // console.log("The number of elemnts of your objects are : ",k)
// // console.log("name of person is :",person.Name)
// // console.log("Age of Person is : ",person.Age)
// // console.log("Person identifies as : ",person.gender)
// for(let i=0; i<k;  i++)
// {
// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))
// }

//lets again praactice on Map
//map is same as a object but its order is perfect
//map keys can be set as anything 
// let Q =new Map();
// Q.set(32,"King")
// Q.set(33,"brock")
// console.log(Q)

// Lets practice on sets 
// sets are used to store data sets but no duplicates are allowed
// let S =new Set();
// S.add(16)
// S.add("goat")
// console.log(S)
// S.add("goat")
// Lets again practice on somethings 
// // Question 2 
// let person={
//     namE:"badshah",
//     age:15, 
//     color:"green",
//     greet:function()
//     {
//      console.log(`Hello ${this.namE}`)
//     },
//     eat:function()
//     {
//         console.log(`${this.namE} did you eat `)
//     },
//     AgeCall:function()
//     {
//         console.log(`${this.namE} your age is ${this.age}`)
//     }    

// };
// person.greet()
// person.eat()
// person.AgeCall()

// // Destructuring objets
// let {namE,age}=person
// console.log(namE)
// console.log(age)
// person.AgeCall()

//  Question 3 
// let v =prompt("Do you want to add a new Book ? YES OR NO")
// if(v==="yes"||v==="Yes"||v==="YES")
// {
//     let Book ={};
//     Book.title=prompt("Enter the Title of a book")
//     Book.author=prompt("Enter the Author of a book")
//     Book.year=prompt("Enter the Year of a book")
//     Book.detail=prompt("Enter a sentance about your book")

//     // Output 
//     console.log("Book saved with following details")
//     console.log("Title of book is : ",Book.title)
//     console.log("Title of book is : ",Book.author)
//     console.log("Title of book is : ",Book.year)
//     console.log("Description : \n\n",Book.detail)
// }
// else
// {
//     console.log("You should write a boook and then store deatils here ")

// //Question 4  car start  function in object
// let car  =
// {
// name:"Hundai ",
// OwnerName:"Arshid",
// start:function()
// {
//     console.log(`Welcome ${this.OwnerName} your ${this.name} car has Started Release clutch to Start`)
// },
// model:2018,
// validInsurance:function()
// {
//     if(Object.values(this.model%2===0))
//     {
//     console.log("Valid insurance")
//     }
//     else
//     {
//     console.log("invalid")
//     }
// },
// getsummary:function()
// {
  
// car.start();
// car.validInsurance();
// console.log(Object.entries(car))

// }

// };
// car.getsummary();

// //   Lets make Merge Object into one 
// let f={
//     namee:"x",
//     dob:"24-50-2024",
//     dayy:"monday"
//     };
// let a ={
//       name:"y",
//       age:21,
//       day:"Tuesday"
//     };
//       // Spread opeation
// //let merged={...f,...a}
// //console.log(merged)
// //console.log(Object.keys(merged).length)
//        //Assign also does these things  
// Object.assign(f,a)
// console.log(f)
// console.log(Object.keys(f).length)

//LETS DO NOW SMOTHING DIFFERENT FOR OBJECTS 
// let books=[
//     {
//         title:"very great leaders",
//         author:"i am king Scholar",
//         year:2022

//     },
//     {
//         title:"great leaders with problems",
//         author:"Scholars of jammu ",
//         year:2023
//     },
//     {
//         title:"KingDom",
//         author:"Reptalia",
//         year:2019
//     }
// ]
// books.forEach(element => 
//     // console.log(element.title)
//     console.log(element.author)
//     )
// //   let's Start doing something with Functions
// let number1=Number(prompt("Enter First number "));
// let number2=Number(prompt("Enter Second number "));
// function summer(num1, num2)
// { console.log("First number "+num1+"and Second Number is"+num2)
//   console.log("The Sum of two numbers is ",num1+num2)
//   console.log("The Product of your numbers is",num1*num2)
//   console.log("The quotient of your numbers is",num1/num2)
//   console.log("The reminder of your numbers is",num1%num2)
//   //console.log("I am Feeling tooo Hot Today")
// }
// summer(number1,number2);

/*
objets store many things about any particular thing
order is not proper
so use Map()
assign() adds things
spread opeartor removes brackets
delete() used to delete
this is used to check in objects
for in used in objects properties iteration
keys(),values(),entries()   returns as arrays
object['addvalue']=10
object.addvalue=20
etc etc

set() map() etc also coverd  
clear()// clears whole set and map
add() //for map set
has()
get()
delete()  ///m.delete if map is map
Map and Set both has a proper order
you can even sort using spread and then gets array and them sorting is done
*/

//  Date = 13 june 2023   //Todays topic :: Functions
//  JSON is a standard of sending objects from any programing lanuguage
//  JSON gives everthing except functions
//  Functions
/*
function is used when there is a repeated code mainly used to perform something

*/
// function CheckUSERNAMEandpassword()    //Defines  a function
// {
//   // perform check in database
//   // if sucess return something 
//   // mainly true or fasle
// return 0;                                   // values to be returned
// }
// CheckUSERNAMEandpassword();      // function call


 // FUNCTIONS ::  
 // Addition functions 
// function add( a=0, b=1,c=0)
// {
// arguments;
// console.log(arguments)    // prints list of arguments passed  
// return a+b+c;
// }
// console.log(add(32,69))   // use a=32 ,b=69 and c is not defined so c will be : 0 if default c is not available returns NaN
// console.log(add(3,9))     // use 3as a , 9 as b and c=0   if default c is not available returns NaN
// console.log(add())        // uses default parameters a=0 & b=1 returns 1

// // lets collect sum  elements 
// let sum=0;
// let x=Number(prompt("how many elemnts do you want to enter"))
// let input1=[]
// for(let i=0;i<x;i++)
// {
// input1.push(Number(prompt("enter elemnts you want sum of ")))
// console.log("entered elemnts are :",input1)
// }
// for(let i=0;i<x;i++)
// {
//   sum = sum +input1[i]
// }
// console.log(sum)
                           //  above same thing using functions
// let elem=[]
// let x = Number(prompt("how many elemnts will you eneter"))
// for(let  i=0;  i<x; i++)
// {
//   elem.push(Number(prompt("Enter Elements ")))
// }
// console.log("Entered elements are ",elem)
// function sumOf(Elements)
// {
// let sum=0;
// for(let i=0;i<Elements.length;i++)
// {
//   sum +=Elements[i]
// }
// return sum;
// }
// console.log(sumOf(elem))
// More functions to deal with
// let x =prompt("Enter username")
// let y =prompt("Enter password")
// alert("Enrollled successfully")
// function CheckUser(user,pass)
// {
// console.log("Lets start checking if you match with our database");
// let verUser=prompt("Enter username to check if you are stored here")
// let verPass=prompt("Enter passworrd to check if you are Not Hacker :) ")
// if(verUser===x && verPass===y)
// {
//   alert("Geniune User Thank you! Preparing Your View Points")
// }
// else
// {
//   alert("Yaha say Hato tumharai aise ke taise")
// }
// }
// console.log(CheckUser(x,y))
//  ///Function area of rectangle
//  let check=prompt("want to calc area Answer in Yes or No")
//  let h=Number(prompt("Enter Height"))
//  let w=Number(prompt("Enter Width"))
//  alert("height entered is : "+h+"widht entered is : "+w)
//  if(check==="yes"||check==="YES"||check==="Yes")
// {
//  function calculateArea(height, width)
//  {
//   console.log("The area of your recatangle is :"+height*width)
//  }
//  console.log(calculateArea(h,w))
// }
// else
// {
//   console.log("Leave Before i Beat you for wasting my time")
// }

// // Even odd check using function
// let check=prompt("dO YOU want to check even odd : YES or NO")
// if(check==="yes"||check==="YES"||check==="Yes")
// {
//   let numCheck=Number(prompt("Enter the value "))
//   if(numCheck%2===0)
//   {
// console.log("your  number : "+numCheck+""+" is EVEN")
//   }
//   else{
//     console.log("your  number : "+numCheck+""+" is ODD")
//   }
// }
// else{
//   console.log(" :(  I was made for the purpose :((")
// }
//      // function to capitalize first word 
// let str=prompt("enter the word for capitalization AND replace and Reverse")
// function cap(y)
// {
//   let firstword=y.charAt(0).toUpperCase();
//   let sliced=y.slice(1,y.length);
//   return firstword+sliced
// }
// console.log(cap(str))
// function rep(string)
// {
// let t=string.trim()
// let v=t.replaceAll("z","x")
// return v
// }
// console.log(rep(str))
// // rETURNS ULTA(REVERSE OF A STRING)
// function revErse(vstr)
// {
//   let rev=""
//   for(let i=vstr.length;i>=0;i--)
//   {
//      rev =rev +vstr[i]
//   }
//   return rev;
// }
// console.log(revErse(str))
//  Function to print larger of three numbers 
// let num1=Number(prompt("Enter num1 "))
// let num2=Number(prompt("Enter num2 "))
// let num3=Number(prompt("Enter num3 "))
 //appraoch one
// function gt(a,b,c)
// {
// if(a>b && a>c)
// {
//   return a 
// }
// else if(b>a && b>c)
// {
//   return b 
// }
// else
// {
//   return c 
// }
// }
// console.log(gt(num1,num2,num3))

// approach second
// function another(a,b,c)
// {
// if(a>b)
// {
//   if(a>c)
//   {
//     return a
//   }
//   else{
//     return c 
//   } 
// }
// else
// {
// if(b>c)
// {
//   return b
// }
// else
// {
//   return c
// }
// }
// }
// console.log(another(num1,num2,num3))

// write function to find smallest element in an array
// let arr1=[1,2,3,4,6,7,8,9,0]
// let farhanz=arr1[0]
// // function big(k)
// {
//   for(let i=0; i<k.length; i++)
//   {
//     if(k[i]>farhan)
//    {
//     farhan =k[i]
//   }
//   }
//   return farhan
// }
// console.log(big(arr1))
// function small(y)
// {
//   let feroz=y[0]
// for(let i=0;i<y.length;i++)
// {
// if(y[i]<feroz)
// {
// feroz=y[i]
// }
// }
// return feroz
// }
// console.log(small(arr1))
// function small(farhan)
// {
//   let ans=farhan[0]
//   for(let i=0; i<farhan.length; i++ )
//   {
//     if(farhan[i]<ans)
//     {
//       ans=farhan[i]
//     }
//   }
//   return ans
// }
// console.log("farhan will select ",small(arr1))
 // lets use loops in different ways
//  let v=[1,2,6,8,9,34,525]
//  let counter=v[0]
// function great(k)
// {
//  v.forEach(val =>{
//   if(val>counter)
//   {
//     counter=val
//   }
//  }) 
//  return counter
// }
// console.log(great(v))
// using for of loop
// function small(x)
// {
// for(let val of x)
// {
//   if (val<counter)
//   {
//     counter = val
//   }
// }
// return counter 
// }
// console.log(small(v))

// Problem:  Given a number return it as a array
