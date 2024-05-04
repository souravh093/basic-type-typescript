{
    // OOP - inheritance
    class Person {
        name: string;
        age: number;
        address: string;
        
        constructor(name: string, age: number, address: string) {
            this.name = name
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfHours: number) {
            console.log(`${this.name} will sleep for ${numberOfHours} hours`)
        }
    }


    class Student extends Person {

        
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }

    const student1  = new Student("Sourav halder", 19, "Barishal, Bangladesh")

    console.log(student1.getSleep(8))


    class Teacher extends Person {
        designation: string;
        
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address,)
            this.designation = designation
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`)
        }
    }

    const teacher = new Teacher("Prodip", 40, "Dhaka", "Professor")

    console.log(teacher.takeClass(5))



}