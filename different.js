// odd number 

 /** for(let i =0; i< 20; i++){
    if(i%2=== 1){
        console.log(i);
    }
} */
// same as before 
    /**for(let i =0; i< 20; i++){
        if(i !== 1){
            console.log(i);
        }
    } */

//same as

// for(let i =1; i< 20; i+=2){
//     if(i !== 1){
//         console.log(i);
//     }
// }

// give me the list numbers between 1 to 30 divisible by 5

// for(let i =1; i <= 30; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

//divided by 3 and 5

// for(let i =1; i <= 30; i++){
//     if(i % 3 === 0 || i%5 ===0){
//         console.log(i);
//     }
// }

// both 3 and 5 divided 

// for(let i =1; i <= 30; i++){
//     if(i % 3 === 0 && i%5 ===0){
//         console.log(i);
//     }
// }

//give me the sum of numbers from 1 to 20 that are divisible by 3
// let total = 0;

// for(let i = 1; i <= 20; i++){
//     if(i %3 === 0){
//         console.log(i);
//         total = total + i;
//     }
// }
// console.log('the total sum of the number:', total);

//showing every operations 

let total = 0;

for(let i = 1; i <= 20; i++){
    if(i %3 === 0){
        console.log(i);
        total = total + i;
        console.log('total of sum:', total)
    }
}
console.log('the total sum of the number:', total);