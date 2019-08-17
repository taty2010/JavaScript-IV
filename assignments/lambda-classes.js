// CODE here for your Lambda Classes
// We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
  //  Lambda personnel can be broken down into three different types of people.
//  Instructors - extensions of Person
 //   Students - extensions of Person
 //   Project Managers - extensions of Instructors
 //   IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

 class Person{
     constructor(param){
         this.name = param.name;
         this.age = param.age;
         this.location = param.location;
     }
     speak(){
         console.log(`Hello my name is ${fred.name}, I am from ${fred.location}`);
     }
 }

 class Instructor extends Person{
     constructor(teach){
        super(teach);
        this.specialty = 'redux';
        this.favLanguage = 'JavaScript',
        this.catchPhrase = 'Don\'t forget the homies';
     }
     demo(subject){
         console.log('Today we are learning about ${subject}');
     }
     grade(student){
        console.log('${student.name} recieves a perfect score on ${subject}')
     }
 }