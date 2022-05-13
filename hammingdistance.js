function hamming (stringA, stringB) {
    let count = 0
    for (i = 0; i < stringA.length; i++) {
            if (stringA[i] != stringB[i]) {
                    count += 1
            }
    }
    return count
}
console.log(hamming("10111","10100"))


// function loopThrough(array,test) {
//         let finalArray = []
//         for (i = 0; i < array.length; i += 2) { 
//             finalArray.push(test(array[i]))
//         }
//         return finalArray
// }
//     console.log(loopThrough(["i","j","k","l","m","n","o","p","q","r"], a => a + "hey"))
     
   
    
    