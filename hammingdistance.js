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


