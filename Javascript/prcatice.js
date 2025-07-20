//sorting an array
//[3, 2, 6,1 ,8]
/*
arr=[3,2,6,1,8]
arr1=arr.sort()
console.log(arr1)
*/


/*
arr=[3,2,6,1,8]

for(let i=0; i< arr.length-1; i++)
{
    for(let j=0; j<arr.length-1-i; j++){
    if (arr[j] > arr[j+1]){
        let temp= arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
    }
        
    }
}
console.log(arr)
*/

//primenumber

/*

let num=11;
function isprime(num){
    if(num%2===0){
        return false;
    }
    for(let i=3; i<= Math.sqrt(num); i+= 2){
        if(num%i===0) {
            return false;

        }
    }
    return true;
    

}
if(isprime(num)){
    console.log(num + "is prime");
}
else{
    console.log(num + "is not prime");
    
}
*/


// num=17
// numres=Math.sqrt(num)
// console.log(numres)
