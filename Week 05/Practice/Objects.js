
let Student = {
    f_name:"Bhumika",
    l_name: "Suthar",
    cms_id: "021-21-0027",
    semester:"BS-CS 7",
    name : function(){
        return this.f_name + " " + this.l_name;
    }
};
let Person = {
    City: "Mithi",
    Nationality: "Pakistani"
}
console.log("My name is " + Student.name())
console.log(Object.keys(Student))
console.log(Object.values(Student))
console.log(Object.entries(Student))
console.log(Object.assign(Student, Person))
console.log(Object.getOwnPropertyNames(Student))

function greet(name) {
    return 'Hello, ' + name + '!';
 }

console.log(greet("Bhumika"))

const greet1 = (name) => {
    return 'Hello, ' + name + '!';
    };

console.log(greet1("Bhumika"))

const greet2 = (name3) => {
    return 'hello , ' + name3;
}

console.log(greet2("Bhumika"))


    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(function(num) {return num * 2;});

console.log(doubled);

(function() {
    console.log('I am immediately invoked.');
})();


