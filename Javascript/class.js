//syntax
/*
class classNAME{
    //variabls
    //methods

}
    */

//class and object creation
/*

class caluculator{
    x=12
    y=5
    add(num1,num2)
    {
        console.log(num1+num2);
        
    }
    sub(num1,num2)
    {
        console.log(num1-num2);
        
    }
}

const call = new caluculator()
call.add(2,5)
call.sub(5,2)
console.log(call.x)
*/


//constructor 

/*

class employe {

       printmessage() {
        console.log("This is simple method");

    }
    constructor(username, password) {
        console.log(username, password);

    }
}
const emp1 = new employe("teju","j")
const emp2 = new employe("nari","u")
//emp1.login("teju","j")
//emp1.printmessage()
*/


//this keyword

/*

class employe {

    username="teju"
    password="j"

       printmessage() {
        this.addjobtitle()
        console.log("This is simple method");

    }
    addjobtitle(){
        console.log("add job title");
        
    }
    constructor(username, password) {
        console.log(username, password);

    }
    createemployee(){
        this.printmessage()
        console.log("empl oyee created");
        

    }
}
const emp1 = new employe("teju","j")
emp1.createemployee()
//emp1.login("teju","j")
//emp1.printmessage()
*/

//static

class student{
    static x="ash"
    y="csjajdgh"
   static m1(){
        console.log("This is a method1");

        
    }
     m2(){
        console.log("This is a method2");

        
    }
    static m3(){
        console.log("This is a method3");

        
    }
     m4(){
        console.log("This is a method4");

        
    }
    
}
const merthod= new student()
student.m1()
merthod.m2()