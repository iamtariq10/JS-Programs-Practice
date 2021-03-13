//PROGRAM 1

// let num1 = prompt();
// let num2 = prompt();

// if(num1>num2){
//     console.log(`Number ${num1} is greater than the ${num2}`)
// }
// else{
//     console.log(`Number ${num2}  is greater than ${num1}`)
// }

//PROGRAM 2


// let number1 = prompt();
// if(number1>0){
//     console.log(`${number1} is positive`);
// }
// else if(number1==0){
//     console.log(`${number1} is zero`);

// }
// else{
//     console.log(`${number1} is negative`);

// }



//PROGRAM 3

// let numb1 = prompt();

// if(numb1 % 5 ==0){
//     console.log(`${numb1} is divisible by 5`)

// }
// else if(numb1 % 11 ==0 ){
//     console.log(`${numb1} is divisible by 11`)

// }
// else{
//     console.log(`${numb1} is not divisible by 5 and 11`)

// }


//PROGRAM 4



// let aNumber = prompt("Enter your number:");

// if(aNumber % 2 ==0){
//     console.log(`${aNumber} is even`)

// }
// else if(aNumber % 2 ==1 ){
//     console.log(`${aNumber} is odd`)

// }
// else{
//     console.log(`${aNumber} is not even nor odd`)

// }

//PROGRAM 5

// let year = prompt("Enter your year:");
// if(year % 400 ==0 || year % 4 ==0 && year % 100 !=0  )
// {
//     console.log(`${year} is a leap year`);
// }
// else{
//     console.log(`${year} is not a leap year`);

// }


//PROGRAM 6


// let input = prompt("Enter your value:")
// console.log("Lenght of the input value is", input.length);


//PROGRAM 7


// let num1 = prompt();
// let num2 = prompt();
// let num3 = prompt();

// if(num1>num2 && num1>num3){
//     console.log(`Number ${num1} is greater than the ${num2} and ${num3}`)
// }
// else if(num2>num1 && num2>num3){
//     console.log(`Number ${num2}  is greater than ${num1} and ${num3}`)
// }
// else if(num3>num1 && num3>num2){
//     console.log(`Number ${num3}  is greater than ${num1} and ${num2}`)   
// }
// else{
//     console("Error");
// }



//PROGRAM 8

// let char = prompt("Enter your char:");

// if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
//     console.log(`${char} is vowel`);
// }

// else{
//     console.log(`${char} is consonant`);
// }


//PROGRAM 9


// let char = prompt("Enter your char:");

// if (char>='a' && char<='z'){
//     console.log(`${char} is alphabet`);
// }

// else{
//     console.log(`${char} is not alphabet`);
// }



//PROGRAM 10
// let input = prompt("Enter your input:");

// if (input>='a' && input<='z'){
//     console.log(`${input} is alphabet`);
// }

// else if(input>=0 || input<=0){
//     console.log(`${input} is Number `);
// }

// else{
//     console.log(`${input} is Special character `);
// }


//PROGRAM 11


// let str1 = "This is string 1 ";
// let str2 = str1.concat("This is string 2");

// console.log("Concatinated string: ", str2)


//PROGRAM 12


// let input1 =prompt("Your input1: ");
// let input2 =prompt("Your input2: ");

// if(input1==input2){
//     console.log(`${input1} is matched with ${input2}`)
// }

// else{
//     console.log(`${input1} is not matched with ${input2}`)
// }

//PROGRAM 13

// let str = prompt("Enter your input: ");

// let toUpperCase = str.toUpperCase();

// console.log("UpperCase string is: ",toUpperCase);



//PROGRAM 14

// let str = prompt("Enter your input: ");

// let toLowerCase = str.toLowerCase();

// console.log("UpperCase string is: ",toLowerCase);


//PROGRAM 15

// let arr = [2,3,5,"M Tariq",true];

// console.log("Array elements",arr);



//PROGRAM 16

// let array = [1,2,3,4,5,6,7];

// let res = array[0]+array[1]+array[2]+array[3]+array[4]+array[5]+array[6];
// document.write(res);


//PROGRAM 17

// let array = [1,2,3,4,5,6,7,-4,-4,-3,-3,-1,-5];

// for(let i=0;i<=array.length;i++){
//     if(array[i]<0){
//         console.log("Negative numbers are",array[i])
//     }
// }

// PROGRAM 18
// let array = [1,2,3,4,5,6,7,8,9,10];

// for(let i =0;i<=array.length;i++){
//     if(array[i])
// }


//Exercise 1(codeWithHarry)
// console.log("Exercise 1");
// let web = document.links;



// Array.from(web).forEach(function(element){
//     let j = element.href;
//     if(j.includes("google")){
//         console.log("Link is",j);
//     }
// });



// Quiz (Code with Harry)

// let element = document.createElement('h1');
// let div = document.getElementById('anchor');
// element.innerHTML ="Go to google";

// anchor.appendChild(element);


//Web Crawler 

let string = "python";
let links = document.links;
let address;
Array.from(links).forEach(function(element){
    address = element.href;
   if(address.includes("python")){
       console.log("Links: ",address);
   }
});



//Local and Session Storage

// localStorage.setItem('Name',"M Tariq")

// localStorage.setItem("Roll",Number("4241"));

// let roll = localStorage.getItem("Roll");

// console.log(roll);


// localStorage.clear();

// let arr = ["M Tariq","Ahmad","Developers"];
// localStorage.setItem('Info',JSON.stringify(arr));




// sessionStorage.setItem('sessionName',"M Tariq")
// sessionStorage.setItem("sessionRoll",Number("4241"));
// sessionStorage.getItem('sessionName');


// sessionStorage.clear();

// let arr = ["M Tariq","Ahmad","Developers"];
// sessionStorage.setItem('Info',arr);











//Math Objects in JS

let number = 3;
let number2 = 4;
let resulte;
resulte = number*number2;
console.log(resulte);


let mathematics = Math;
console.log(mathematics);

let z =Math.PI;
z= Math.E;
z= Math.ceil(5.4);
z= Math.floor(4.3);
z=Math.round(5.5);
z= Math.sqrt(25);
z=Math.pow(2,2);
z=Math.random();

let ran = Math.ceil(50+(60-50)*z);
console.log(ran);



