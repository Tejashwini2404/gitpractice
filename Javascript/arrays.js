//arr = [12, 5, 8 ,3]
//console.log(arr)

//console.log(typeof(arr))


//sort
/*
arr1 = [2,7,1,9,5,3,8,6]
arr2= arr1.sort()
console.log(arr2)
*/

//join
/*
arr3 = ["teju","shwini","nar","eash"]
str= arr3.join(" ")
console.log(str) 
*/ 
//spilit
/*
arr4= str.split("")
console.log(arr4)
*/

//push()
/*
arr3 = ["teju","shwini","nar","eash"]
arr3.push("chintu")
console.log(arr3)
*/

//unshift
/*
 arr3 = ["teju","shwini","nar","esh"]
 arr3.unshift("chintu")
 console.log(arr3)
 */

 //pop
 /*
 arr3 = ["teju","shwini","nar","esh"]
 arr3.pop()
 console.log(arr3)
 */

 //shift
/*
 arr3 = ["teju","shwini","nar","eash"]
 arr3.shift()
 console.log(arr3)
 */

 //concat
 /*
 arr3 = ["teju","shwini","nar","eash"]
 arr1 = [2,7,1,9,5,3,8,6]
 arr4=arr3.concat(arr1)
console.log(arr4)

*/

//includes
/*
arr1 = [2,7,1,9,5,3,8,6]
console.log(arr1.includes(10))
*/


//slice
/*
arr1 = [2,7,1,9,5,3,8,6]
arr2=arr1.slice(1,4)
console.log(arr2)
/*
/*
arr6 =[ 'drink', 'eat', 'sleep', 'study', 'eat', 'sleep' ]

arr7 = arr6.slice(0,2)

 console.log(arr7)
 */

 //splice
 /*
arr1 = [2,7,1,9,5,3,8,6]
arr1.splice(1,2,3)
console.log(arr1)
//arr1 = [2,7,1,9,5,3,8,6]
arr1.splice(1,4)
console.log(arr1)
*/

//for of
/*
arr1=["raju","somu","sowmya","ashwini"]
for(let element of arr1)
{
    console.log(element)
}
    */
    /*
   arr6 =[ 'drink', 'eat', 'sleep', 'study', 'eat', 'sleep' ]
for(let element of arr6){

        
    
    console.log(element)
    
       }
    */


//foreach
/*

arr6 =[ 'drink', 'eat', 'sleep', 'study', 'eat', 'sleep' ]

arr6.forEach(element => {


    
     console.log(element)
    

 });
 */

 //map
 /*

 let arr=[2,5,7,6]
 let arr1= arr.map((element)=>{
    return element*2
 })
 console.log(arr1)
 */


 //filter
 /*
 let arr= [3,5,6,2]
 let arr2=arr.filter((val)=>{
    return val%2===0

 })
 console.log(arr2)
 */

 //reduse

 let arr= [3,5,6,2]
 let arr2=arr.reduce((prev,curr)=>{
    return prev+curr
 })
 console.log(arr2)
