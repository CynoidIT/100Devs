//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
let twentyOne = ""

function twentyOneFun(){
    for (i=1;i<22;i++){
    twentyOne += "21 "
    console.log('21')
}
}
twentyOneFun()
document.querySelector('#savageSays').innerText = twentyOne