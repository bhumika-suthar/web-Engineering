function arrayReverse(arr){
    return arr.reverse()
}

console.log(arrayReverse([1,2,3,4,5]))

function arrayReverses(arr){
    n =arr.length
    let arr1 =[0,0,0,0,0]
    for(i =0; i<arr.length;i++){
        arr1[n-1] = arr[i]
        n= n-1
    }
    return arr1
}

console.log(arrayReverses([1,2,3,4,5]))