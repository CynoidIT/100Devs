// No difference

function checkAge(age) {
    return age > 18 || confirm('Did parents allow you?')
}

// function checkAge2(age) {
//     return (age > 18) ? : confirm('Did parents allow you?')
// }

function checkLess(a,b) {
    if (a>b) {
        return b}
    return a
}

function pow(x,n) {
    if (n<1) return("Power must be 1 or higher")

    let answer = x

    for (i=1; i<n; i++) {
        answer=answer*x
    }
    return answer
}



let x = prompt('Number')
let n = prompt('Power')
alert(pow(x,n))