//str="Tejashwini"
//console.log(str)
//console.log(str[0])

import { reverse } from "dns"

//charAt()
//console.log(str.charAt(0))

//concat
/*
str1="Tejashwini"
str2="Tester"
str3=str1.concat(str2)
console.log(str3)
*/

//toUppercase()

/*
str1="Tejashwini"
console.log(str1.toUpperCase())
*/

//toLowerCase
/*
str="TEJASHWINI"
console.log(str.toLowerCase())
*/

//trim
/*
str="                TEJASHWINI  "
console.log(str.trim())
*/

//trimend
/*
str="                TEJASHWINI  "
console.log(str.trimEnd())
*/
//trimStart
/*
str="                TEJASHWINI  "
console.log(str.trimStart())
*/
//casesenstive
/*
let str = 'a'
let  str1 = 'A'
console.log(str===str1)
*/
// let a = 'a';
// let b = 'A'
// console.log(a === b); // false

//substr

/*
str="TEJASHWINI"
console.log(str.substr(4))

console.log(str.substr(0,4))
*/

// /n /t
/*
//str="TEJASHWINI\nTester"
str="TEJASHWINI\tTester"
console.log(str)
*/

//Template Litralls
/*
name = "teja"
name1 = "shwini"
name3 = `${name}${name1}`
console.log(name3)
*/

//strings Immutable

/*
str="TEJASHWINI Tester"
str[1]='r'
console.log(str)
*/

//replace
//replaceall
/*
price1=Number("$68,700".replace("$","").replace(",",""))
price2=Number("$69,567".replace("$","").replace(",",""))
total= price1+price2
console.log(total)

*/


let str1="Tejashwini"
let str2="Julappagari"

let rev=str2.split("").reverse().join("")
let res=`${str1}${str2}`
console.log(res)