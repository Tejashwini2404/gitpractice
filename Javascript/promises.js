// //const { resolve } = require("path");

// //const { error } = require("console")


function step1(value,error){
    return new Promise((resolve,reject)=>{
        if(error){
            reject("somthing went wrong")
        }
        else{
            resolve(value + 10)
        }

    })
}
function step2(value,error){
    return new Promise((resolve,reject)=>{
        if(error){
            reject("somthing went wrong")
        }
        else{
            resolve(value + 10)
        }

    })
}
function step3(value,error){
    return new Promise((resolve,reject)=>{
        if(error){
            reject("somthing went wrong")
        }
        else{
            resolve(value + 10)
        }

    })
}

step1(10,false)
.then((result1) => step2(result1,false))
.then((result2) => step3(result2,true))
.then((result3) => console.log(result3))
.catch((error) => console.log(error));


//  function step1(value, error) {
//     return new Promise((resolve, reject) => {
//       if (error) { 
//         reject('Something went wrong');
//       } else {
//          resolve(value + 10);
//       }
//     });
//   }
  
//   function step2(value, error) {
//     return new Promise((resolve, reject) => {
//       if (error) { 
//         reject('Something went wrong');
//       } else {
//         resolve(value + 10); 
//       }
//     });
//   }
  
//   function step3(value, error) {
//     return new Promise((resolve, reject) => {
//       if (error) { 
//         reject('Something went wrong');
//       } else {
//         resolve(value + 10);
//       }
//     });
//   }
  
//   // Usage:
//    step1(10, false)
//      .then((result1) => step2(result1, false))
//      .then((result2) => step3(result2, false))
//      .then((result3) => console.log(result3))
//      .catch((error) => console.log(error));

    
