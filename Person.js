//* Write a “person” class to hold all the details

class Person{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age  = age;
    }
 getFname(){
    return this.fname;
 }   

 getLname(){
    return this.lname;
 }
 getAge(){
    return this.age;
 }
}

var c= new Person("Boo","Balan",23);
console.log(`FirstName is  ${c.getFname()}`);
console.log(`LastName is ${c.getLname()}`);
console.log(`Age is  ${c.getAge()}`);