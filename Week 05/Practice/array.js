let arr2 = [1,2,3,4,5,6,7]
console.log(arr2.map(function(item) {
    return item*2

}))
// console.log(name.filter(item => item%2))
// let name = ["bhumika", "preety", "kiran"]
// console.log(name.filter(item => item.includes('a')))

console.log([1,2,3,4,5,6,7].reduce((total, item)=> {
    total+item;
}, 0 ));
