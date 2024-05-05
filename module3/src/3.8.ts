{
  // polymorphism
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6 hours per day`);
    }
  }


  const getSleepingHours = (params: Person) => {
    params.getSleep()
  }


  const person1 = new Person()
  const person2 = new Student()
  const person3 = new Developer()


  getSleepingHours(person1)
  getSleepingHours(person2)
  getSleepingHours(person3)



  class Shape {
    getArea(): number {
        return 0;
    }
  }


  class Circle extends Shape{
    radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius
    }
    getArea(): number {
        return 0
    }
  }

  class Rectangle extends Shape{
    height: number;
    width: number
    constructor(height: number, width: number) {
        super()
        this.height = height
        this.width = width
    }
    getArea(): number {
        return 0
    }
  }
}
