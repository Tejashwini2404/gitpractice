//Encapsulation


/*
class Employee {

      //EmployeeName;
      //Employeeplace;
      empdetails(name, place, org) {
           this.EmployeeName = name
            this.Employeeplace = place
            this.Employorg = org
      }
      printEmployeedetails() {
            console.log(this.EmployeeName);
            console.log(this.Employeeplace)
            console.log(this.Employorg)

      }

} 

const emp=new Employee()
//emp.empdetails("teju","blr","dbs")
emp.printEmployeedetails()
*/



//2.Inheritence

//a. Single Inheritance  


/*
class A{
      m1(){
            console.log("this is method m1");
            
      }
      m2(){
            console.log("this is method m2");
            
      }
      m3(){
            console.log("this is method m3");
            
      }
      m4(){
            console.log("this is method m4");
            
      }
}
class B extends A{
      m5(){
            console.log("this is method m5");
            
      }
      m6(){
            console.log("this is method m6");
            
      }
      m7(){
            console.log("this is method m7");
            
      }
      m8(){
            console.log("this is method m8");
            
      }
}
const D=new B()
D.m4()
D.m2()
D.m8()
*/

//multilevel Inheritance

/*

class A{
      m1(){
            console.log("this is method m1");
            
      }
      m2(){
            console.log("this is method m2");
            
      }
      m3(){
            console.log("this is method m3");
            
      }
      m4(){
            console.log("this is method m4");
            
      }
}
class B extends A{
      m5(){
            console.log("this is method m5");
            
      }
      m6(){
            console.log("this is method m6");
            
      }
      m7(){
            console.log("this is method m7");
            
      }
      m8(){
            console.log("this is method m8");
            
      }
}
class C extends B{
      m9(){
            console.log("this is method m9");
            
      }
      m10(){
            console.log("this is method m10");
             
      }
      m11(){
            console.log("this is method m11");
            
      }
      m12(){
            console.log("this is method m12");
            
      }
}
const method=new C()
method.m1()
method.m12()
*/

//polymorphism

//methodoverloading
/*
class A {
      add(num1, num2) {
            console.log(num1);
            console.log(num2);
            console.log(num1 + num2);
      }
}

class B {
      add(num1, num2, num3) {
            console.log(num1);
            console.log(num2);
            console.log(num3);
            console.log(num1 + num2 + num3);
      }




}
const add=new A()
add.add(2,5,3)


//method overriding

class A {
      add(num1, num2) {
            console.log(num1);
            console.log(num2);
            console.log(num1 + num2);
      }
}

class B {
      add(num1, num2, num3) {
            console.log(num1);
            console.log(num2);
            console.log(num3);
            console.log(num1 + num2 + num3);
      }




}
const add=new B()
add.add(2,5)  //methodoveriding //we extra one one parameter hear
*/


//prototype

class ABC {
      firstname = "Teju"
      secondname = "Ashwini"

      m1() {
            console.log("This is method1");

      }
      m2() {
            console.log("This is method2");

      }
}

ABC.prototype.m3=function ()
{
console.log("this is m3")
}
ABC.prototype.lastname = "j"
const fullname = new ABC()
console.log(fullname.firstname)
console.log(fullname.lastname)
fullname.m3()






























