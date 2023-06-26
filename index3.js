                     //  Advanced Functions in javascript
            // arrow functions
// let a =Number(prompt("Enter first  number "))
// let b=Number(prompt("enter second number "))
// function prod(n1,n2)
// {
// return n1*n2
// }
// console.log(prod(a,b))

// lets convert above function into arrow function
// let prod =(num1,num2)=>
// {
//     return num1*num2
// }
// console.log(prod(12,10))
// one liner functions
//  let even= a =>{ return a/2;}
// console.log(even(100))
// one liner function
// let check = f => f%2 ===0? "even":"odd"
// console.log(check(99))
//  question 
// if name starts with vowel print true else false 
// let names=["aliza",'nadia','eera']
// function che(nam)
// {
// let vowels=['A','E','I','O','U']
// for(let i=0;i<nam.length;i++)
// {
// let currentChar = nam.charAt(i).toUpperCase();
// if(vowels.includes(currentChar))
// {
//     return true
// }
// }
// return false;
// }
// console.log(che(names))
// functions more 
// const checking = (sum)=>
// {
// if(sum==0)
// return 1
// else
// return 2
// }
// console.log(checking(10));
// Functions One lined Functions
// Even Odd CHECK ONE LINER FUNCTION
// let num=Number(prompt("Enter number to check"))
// const namedfunction=even=>console.log(even % 2 ===0?"Even":"Odd")
// console.log(namedfunction(num))

// LETS create a pallendrome string logic 
// lets create same thing in different functions
// let Str=prompt("Enter your string  for pallendrme check")
// const PallCh=num=>
// {
// for(let i=0,j=num.length-1;i<j;i++,j--)
// {
//     if(num[i]===num[j])
//     return true
// }
// return false
// }
// console.log(PallCh(Str))
// lets perform things on strings
//lets now perform 
// let a=[9,4,3,2,1]
// const check=s=>{
//     for(let i=0;i<s.length;i++)
//     {
//         console.log(s.map(num=>num**0.5))
//         console.log(s.map(num=>num**2))
//     }
// }
// console.log(check(a))
// On Strings
// let str=["ali","mohd"]
// function add(s){
//     for(let i=0;i<s.length;i++)
// {console.log("Mr"+s[i])}
// } 
// console.log(add(str))
// Question another ::
// let n= [1,2,3,4,5,6,7,8,9]
// let ans=[]
// const check =(ch)=>
// {
// for(let i=0;i<n.length;i++)
// {
//     if (ch[i]%2===0)
//     {
//         console.log(ans.push(ch[i]/2))
//     }
//     else
//     {
//         console.log(ans.push(ch[i]*2))
//     }
// }
// }
// console.log(check(n))
// console.log(ans)
/*
Asynchronus Javascript :: No idea yet
*/
// function Hello()
// {
// console.log("Hello")
// }
// setTimeout(Hello,4000)
// creating the same as anony function
// setTimeout(()=>{
//     console.log("i am anonymous function after 3 seconds")},3000
// )
// //another one 
// setTimeout(()=>{console.log(4%2===0?"Even":"ODD")},4000)
//DEAL WITH THE PROGRAMS  NOW 
// const arr=[1,2,3,4,5,6,7,8,9]
// arr.forEach(sum=>{
//     console.log(sum=sum+sum)
// })
// Problem        SET TIMEOUT AND SET INTERVAL
// //Set timeout
// function printY()
// {
//     console.log("x")
// }
// console.log("y")                      // this will execute first
// setTimeout(printY,2000)               // this will at last even if delay =0Millisecs  
// console.log("b")                      // this will execute second

//set interval
// let counter = 0
// let z=setInterval(function s()
// {
//     console.log("Good")
//     counter++
// if (counter===4)
// clearInterval(z)
// },3000) 

// Set timer

// let s ="Begining"
// let x =setTimeout(function z(){
// console.log("I am Khali bhali "+s)
// },4000)

// practice session 
// let str=["abhishek","palav","dhoni","rohit","talib","khair","khaar","palav"]
// str.forEach(el=>
// {
//     console.log("Mr."+el)
// })
// console.log(str.map(s=>"Mr."+s))       // One lined annonymous function
               // check duplicatee and delete
// let s=new Set()
// for(let i=0;i<str.length;i++)
// {
//     s.add(str[i])
// }
// console.log(s)
                  // palendrome check
// let n=prompt("enter number")
// for(let i=0,j=n.length-1;i<j;i++,j--)
// {
// if(n[i]===n[j])
// {
//     console.log(n+"iS pallendrome")
// }
//  else
//  {console.log("not")}   
// }
// // asyncrhronus javascrpt
// //.. Higher order function = function that accepts function as argument and returns function as an argument
// //..call back is a function that is passed as an argument to another function and is called upon some event 

// NOW LETS disccuss Promies 
/*
promise is like a promise in real life,
in technical terms its like call back function into callbak function
*/
//Syntax eg
// Promise(promise1).then(promise2).then(promisep3) 
//lets discuss an example
// fetchJson()
/*
if we mention async before any function and await 
await and async can only be used in promises,
so first the asynchronus function will execture and it will make synchronus part wait untill async is executed
CAN be ignored because is to be learnt later
*/
//Lets now start learning class 
//synatx
// class human{
//     constructor(Humanname,H_age,H_gender)
//     {
//         this.name=Humanname;
//         this.age=H_age;
//         this.gender=H_gender
//     }
// }
// let human1=new human("ADAM",1500,"male")
// let human2=new human ("EVE",2600,"female")
// console.log(human1)
// console.log(human2)
// human1.name="ANGEL"
// example2 
// class army{
//     constructor(A_name,A_age,A_wing){
//         this.name=A_name
//         this.age=A_age
//         this.wing=A_wing
//     }
// }
// let army1=new army ("zoref",21,"WIng command")
// console.log(army1)
// // army1['name']="shadab-khan"
// army1.name='afridi'
// example Rectangle 
// class Rect{
//     constructor(len,bre)
//     {
//         this.length=len
//         this.breadth=bre
//     }
// getp(){
//     return 2*(this.length+this.breadth)
// }
// getare(){
//     return 2*(this.length*this.breadth)
// }
// }
// let rectangle1=new Rect(16,2)
// console.log(rectangle1.getp(),rectangle1.getare())
/*
 bind call and apply    
 if one obejct contains function that is needed in second fumction also we can bind it or we can apply or call it 
*/
// let person={
// name:"abid"

// };
// let person2={
// name:"shahid"
// // if i want to greet function here also dont write bind it 
// // synatax willbe as below
// // bind will give us a new function every time i bind 
// //but apply and call wii not 
// //call and apply accepts parameters also 
// //apply accepts parameters in array
// };
// function greet(){
//     console.log(`HELLO ${this.name}`)
// }
// //let xobj=greet.bind(person2)
// //let yobj=greet.bind(person)
// // xobj()                     // gave us new fxn : bind=xobj()
// // yobj()                 //gave us anew fxn :bind =yobj()
//  console.log(greet.call(person)) 
//  console.log(greet.apply(person2))
//  //  let y = greet.apply(person2)
// //  console.log(y)
/* INHERITANCE :
RATHER than creating new objects everytime : Extend them through INHERITANCE
*/
// class vehicle{
//     constructor(type,noOfwheels,mode){
//         this.type=type;
//         this.noOfwheels=noOfwheels;
//         this.mode=mode;
//     }
//     greet(){
//         console.log(`hello ${this.type}`)
//     }
// }
// class Aeroplane extends vehicle{
//     constructor(comapny){
//         super("BIRD",6,"AIR")
//         this.comapny=comapny
//     }
// }
// const a1=new Aeroplane("INdigo")
// console.log(a1)
// a1.greet()

// pure functions
/*those functions that depend on its parameters only*/
// example of pure function
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,16));
// impure are those that depend on the variables example
// let a=7;     //it depends on variable so fxn is impure 
// function add(b)
// {
//     return a+b;
// }
// console.log(add(14))
// pipe fxns first lets see an example
// let x =Number(prompt("Enter Number")) 
// simple way : to solve a quest
// let double=x*2
// let square=double**2;
// let triple=square*3;
// console.log(triple);
// get little complicated create fxns one liners 
// const pipe=(...args)=> x => args.reduce((y,f)=>f(y),x)
//  const double=x=>x*2
//  const square=x=>x**2
//  const triple=x=>x*3
// const final =pipe(double,square,triple)(10)
// console.log(final)

// lets now go for an easy example
// arr = [4, 5, 6];
// let sum = 0;
// for(let val of arr) {
//     sum = sum + val;
// }
// console.log(sum);
// arr.reduce((sum,val)=>sum+val,0)
// lets now create a rest parameter function again
export function firstpipe() {
const pipe =(...args)=>x=>args.reduce((y,f)=>f(y),x)
const double =x=>x*2
const square =x=>x**2
const triple =x=>x*3
const ne=pipe(double,square,triple)(2)
console.log(ne)
}
firstpipe();
// console.log(f)
// example of something 
 let l=11;
 let h=l+19;
function sum(a,b)
{
     console.log(a+b)
 }
 sum(l,h);
