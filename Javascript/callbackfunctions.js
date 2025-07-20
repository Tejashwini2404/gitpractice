//callbackfunction
/*


function greet(){
    console.log("hey hi");
    
}
function greet1(){
    console.log("Namasthe");
    
}
function printresult(value,callback){
    callback()
    console.log(value)
     //greet()

}
printresult("tej",greet1) ///higher order function
*/





//Closerfunction

/*

 function squrethenum(num1){

    console.log(num1*num1)
  }

  function numbytwo(num1){

    console.log(num1/2)
  }


  function myCalculator(num1, num2, callback) {
    let sum = num1 + num2; //50
    console.log(sum)
     callback(sum) // closure function 
  }

  myCalculator(5, 5, numbytwo)
  */

  let numbers=[1,2,3,4,5]

  function processarray(arr,callback){
    for(let i=0; i<arr.length; i++){
    callback(arr[i])
    
    }
  }
  function mul(number){
    console.log(number*2);
    

  }
  function div(number){
    console.log(number / 2);
    
  }
  //processarray(numbers,mul)
  processarray(numbers,div)
