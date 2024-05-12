const heading = "Hey there, It's heading"
const num = 100;
var mySelf = {
    name :"Bhumika",
    Semester : "BSCS-7"
}
console.log(`${heading} , ${num}`)
console.log(`mySelf`)
console.log(`Hello , ${JSON.stringify(mySelf)}`)

var number = [1,2,1,3,1,5,6,1]
for (const key in number) {
    if (number.hasOwnProperty.call(number, key)) {
        const element = number[key];
        console.log(element)
        
    }
}
// const obj = []
// for(num in number){
//     if(obj[num]){
//         obj[num] = obj[num]+ 1
//     }
//     else{
//         obj[num]= 1
//     }
// }
 var person = {
    name : "Bhumika",
    gender: "Female",
    Age : "23",
    Country_Code: "92"
 }
 var person1 = {...person}
 person1.name ="Zubaira"
 person.Age = "100"
 console.log(`Hello , ${JSON.stringify(person)}`)
 console.log(`Hello , ${JSON.stringify(person1)}`)

 var numb = [1,2,3,4,5,5,1,3,4,5]
 var numb1 = [...numb]
numb[0]= 7;
for (const key in numb) {
    if (numb.hasOwnProperty.call(numb, key)) {
        const element = numb[key];
        console.log(element)
    }
}
console.log("Hello this is new array")
for (const key in numb1) {
    if (numb1.hasOwnProperty.call(numb1, key)) {
        const element = numb1[key];
        console.log(element)
    }
}

var student = {
    name : "Bhumika",
    gender: "Female",
    Age : "23",
    Country_Code: "92",
    cms:"021-21-0027",
    department: "BSCS",
    semester: "7"
}

const{name , age, ...rest} = student
console.log(name)
console.log(student)

function greet(name = 'World', ...languages) {
    console.log(`Hello, ${name}!`);
    console.log('Languages:', ...languages)
}

console.log('Starting setTimeout example...');
setTimeout(() => {
console.log('This message will be displayed after 2 seconds.');
}, 2000); // 2000 milliseconds = 2 seconds
console.log('setTimeout example scheduled.');