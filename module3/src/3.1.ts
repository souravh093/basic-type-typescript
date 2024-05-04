{
  // OOP - class

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // parameter properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      // this.name = name,
      // this.species = species,
      // this.sound = sound
    }

    makeSound() {
      console.log(`Then ${this.name} Says Mew ${this.sound}`);
    }
  }

  //   make instance
  const dog = new Animal("German Bhai", "dog", "Ghew Ghew");
  const cat = new Animal("Hala", "cat", "mew");

  dog.makeSound();
  console.log(cat);

  class Car {
    constructor(
      public name: string,
      public model: string,
      public price: number
    ) {}

    information(status: string) {
      console.log(
        `This cart Name is: ${this.name}, model is ${this.model} and also price is ${this.price} this is ${status} condition`
      );
    }
  }

  const honda = new Car("Honda", "B42T", 490);

  console.log(honda.information("New"));
}
