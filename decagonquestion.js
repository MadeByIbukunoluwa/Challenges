// Write a function that takes an array as an argument and returns the sum of the even numbers and odd numbers in the array


function sumOfEvenAndOdd (generalArray) {
    let evenArray = []
    let oddArray = []
 for (element of generalArray) {
     if (element % 2 === 0) {
         evenArray.push(element)
     }
     if (element %  2 === 1 ) {
         oddArray.push(element)
     }
    }
   let reducedEvenArray = console.log(evenArray.reduce((x,y) => x + y))
   let reducedOddArray = console.log(oddArray.reduce((a,b) => a + b ))
    return  "this is the sum of the evenArray " +  reducedEvenArray +
    " this is the sum of the oddArray " + reducedOddArray 
}
sumOfEvenAndOdd([3,2,4,8,5])
// there is a console.log(print command) in the body, if we run the function, we dont need to use the console.log to print again but if we do, we are going to get an undefined value because it is similar to typing console.log(console.log()) so in this instance, if we want to use the return statement we wil
//  put both reduce expressions in the return statement or we can just create the variables withut adding console.log to them 

function sumOfEvenAndOdd (generalArray) {
    let evenArray = []
    let oddArray = []
 for (element of generalArray) {
     if (element % 2 === 0) {
         evenArray.push(element)
     }
     if (element %  2 === 1 ) {
         oddArray.push(element)
     }
    }
    // const 
    let reducedEvenArray = evenArray.reduce((x,y) => x + y)
    let reducedOddArray =  oddArray.reduce((a,b) => a + b )
    return  " This is the sum of the even numbers : " + reducedEvenArray + " This is the sum of the even numbers : " + reducedOddArray 
}
console.log(sumOfEvenAndOdd ([3,2,4,8,5]))
