{
  // instanceof guard

  //   parent
  class Animal {
    constructor(public name: string, public species: string) {}
    makeSound() {
      console.log(`I am making sound`);
    }
  }

  //   dog
  class Dog extends Animal {
    constructor(public name: string, public species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(`I am barking`);
    }
  }

  //   cat
  class Cat extends Animal {
    constructor(public name: string, public species: string) {
      super(name, species);
    }
    makeMeow() {
      console.log(`I am mewing`);
    }
  }

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog 
  }
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat 
  }

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };

  
  const dog = new Dog("Germen Dog", "dog");
  const cat = new Cat("Kittee", "cat");

  getAnimal(cat)
}
