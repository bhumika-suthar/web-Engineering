function double(name, num) {
    for(i=0;i<name.length; i++){
        name[i] = name[i]*num
    }
    return name
 }
 var num = 4
 let arr2 = [1,2,3,4,5,6]
console.log( double(arr2, num))

 