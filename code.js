//Write a function that takes a string as an argument. As it is, the string has no meaning, Increment each letter to the next letter in the alphabet
//.Return the correct word


function code(n) {
  return [...n].map((char,index)=> {
      return String.fromCharCode(char.charCodeAt(0) + 1)
  }).join('')
}

console.log(code('bnchmf'))
