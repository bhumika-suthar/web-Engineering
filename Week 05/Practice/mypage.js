console.log("hello world")
var fruits = ["apple", "banana", "grapes", "mango", "orange"]
fruits.push("water melon")
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.unshift("strawberry","cherry", "blue berry")
console.log(fruits)
var arr1 = [1,2,3,4,5]
var arr2 = [6,7,8,9,10]
var arr3 = arr1.concat( arr2)
console.log(arr3)
var arr4 = arr3.slice(3,7)
console.log(arr4)
var arr5 = arr3.splice(3,2)
console.log(arr5)
console.log(arr3)
console.log(fruits.indexOf("cherry"))
var arr10 = [1 ,2 ,3 ,4]
console.log(arr10.includes(3))
console.log(fruits.includes("grapes"))

