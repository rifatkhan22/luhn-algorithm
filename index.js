function validCard (ccN) {
    let numbers = ccN.toString().split('').map(Number)
    //even number length
    if(numbers.length % 2 === 0) {
        numbers = numbers.map((number,idx) => idx % 2 === 0 ? number*2: number)
    } else {
        numbers = numbers.map((number,idx) => idx % 2 === 1 ? number*2: number)
    }
    //subtract -9 for double digit numbers
    numbers = numbers.map(number => number > 9 ? number -9 :number)

    //console.log(numbers)

    //add up the numbers
    let sum = numbers.reduce((acc, number)=> acc += number,0)
    //determine if cc is valid or not
    if ((sum % 10) == 0){
        console.log("Credit Card is valid")
    }else {
        console.log("Credit Card is not valid")
    }
}
// // else {
    // //     for(let i=cardLength-1; i>=0;i--) {
    // //         let currentInt = parseInt(cNumber[i])
    // //         if((i-1) % 2 ==0) {
    // //             if((currentInt *=2) > 9){

    // //             }
    // //         }
    // //     }
    // // }
    // console.log(sum)
    // if ((sum % 10) == 0){
    //     console.log("Credit Card is valid")
    // }else {
    //     console.log("Credit Card is not Valid")
    // }

    

validCard(1234567890123456); //should be false
validCard(4408041234567893); //should be true
validCard(38520000023237); //should be true
validCard(4222222222222); //should be true