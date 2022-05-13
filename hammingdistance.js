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


// Hamming distance is a metric for comparing two binary data strings. While comparing two binary strings of equal length, Hamming distance is the number
//  of bit positions in which the two bits are different. The Hamming distance between two strings, a and b is denoted as d(a,b)
