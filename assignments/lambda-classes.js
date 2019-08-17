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
        return `Hello my name is ${this.name}, I am from ${this.location}`;
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
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
       return `${student} recieves a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(param){
        super(param);
       this.previousBackground = param.previousBackground;
       this.className = param.className;
       this.favSubjects = param.favSubjects.join();
    }
    listsSubjects(){
       return `${this.name}\'s favorite subjects are ${this.favSubjects}`;
        //logs out students fav subject one by one
    }
    PRAssignment(subject){
       return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class TeamLead extends Instructor{
   constructor(param){
       super(param);
      this.gradClassName = param.gradClassName;
      this.favInstructor = param.favInstructor;
   }
   standUp(channel){
     console.log(`${this.name} announces to
      ${channel}, @channel stand up time!​​​​​`);
       //a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
   }
   debugsCode(name, subject){
     console.log(`${name} debugs ${this.name}\'s code on ${subject}`);
      // a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
   }
}

const pace = new Instructor({
   name: 'Pace',
   location: 'Bedrock',
   age: 37,
   favLanguage: 'JavaScript',
   specialty: 'Front-end',
   catchPhrase: `Don't forget the homies`
 });

 const marshll = new Instructor({
   name: 'Marshall',
   location: 'Bedrock',
   age: 37,
   favLanguage: 'JavaScript',
   specialty: 'Front-end',
   catchPhrase: `Don't forget the homies`
 });

 const taty = new Student({
   name: 'Tatyana',
   location: 'Texas',
   className: 'WebPT9',
   age: 27,
   favLanguage: 'JavaScript',
   specialty: 'Front-end',
   favSubjects: ['art', 'History', 'Psychology'],
   previousBackground: 'Art'
 });

  const jane = new Student({
   name: 'Jane',
   location: 'somewhere',
   className: 'WebPT9',
   age: 28,
   favLanguage: 'JavaScript',
   specialty: 'Front-end',
   favSubjects: ['Math', 'History', 'Science'],
   previousBackground: 'Teacher'
 });


 console.log(pace.speak());
 console.log(jane.speak());
 console.log(taty.speak());
 console.log(pace.demo('Javascipt'))
 console.log(pace.grade(taty.name, 'HTML'));
 console.log(taty.listsSubjects());
 console.log(taty.PRAssignment('CSS'))