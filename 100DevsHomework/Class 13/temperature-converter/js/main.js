//Write your pseduo code first! 
// get celcius from form
// calculate conversion
// output farenheit to DOM

document.querySelector('#getC').addEventListener('submit',convertC)
document.querySelector('#getF').addEventListener('submit',convertF)

function convertC(e) {
    e.preventDefault()
    let c=document.querySelector('#getCelcius').value
    let f = c*1.8+32
    document.querySelector("#getFarenheit").value = f
}

function convertF(e) {
    e.preventDefault()
    let f=document.querySelector('#getFarenheit').value
    let c = (f-32)/1.8
    document.querySelector("#getCelcius").value = c
}