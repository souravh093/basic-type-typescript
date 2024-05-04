"use strict";
{
    // OOP - inheritance
    class Person {
        constructor(name, age, address) {
            this.name = name, // QNA
                this.age = age,
                this.address = address;
        }
        getSleep(numberOfHours) {
            console.log(`${this.name} will sleep for ${numberOfHours} hours`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("Sourav halder", 19, "Barishal, Bangladesh");
    console.log(student1.getSleep(8));
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }
    const teacher = new Teacher("Prodip", 40, "Dhaka", "Professor");
    console.log(teacher.takeClass(5));
}
