
// map function 

var myArray = [1,2,3,4]

var newArray = myArray.map(function(value){
    // return Math.random() * 10
    return value * value
})

console.log(newArray)

// we will make map function 

function mainFunc (myArray,callback){
    var createNewArray= []
    for (var i =0; i<myArray.length;i++){
        var temporary = callback(myArray[i],i)
        createNewArray.push(temporary)
    }
    return createNewArray
}
var mainresult = mainFunc(myArray,function (value){
    return value * value * value
})
console.log(mainresult)
