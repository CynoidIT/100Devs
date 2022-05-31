// Disemvowel Trolls

function disemvowel(str) {
    let vowels = ['a','e','i','o','u']
    return Array.from(str).filter(e => !vowels.includes(e.toLowerCase())).join('')
  }