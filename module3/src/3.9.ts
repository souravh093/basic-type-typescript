{
  // abstraction
  // interface abstraction

  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // const vehicle1: Vehicle1 = {
  //     name: "Toyota",
  //     model: "2091H"
  // }

  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }

    stopEngine(): void {
      console.log("I am stopping the car engine");
    }

    move(): void {
      console.log("The car is moving");
    }

    test() {
      console.log("I am just testing");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.stopEngine();

  //   abstract class
  abstract class Car2 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }

    stopEngine(): void {
      console.log("I am stopping the car engine");
    }

    move(): void {
      console.log("The car is moving");
    }

    test() {
        console.log("I am just testing");
      }
  }


  // const hondaCar = new Car2()
  // hondaCar.startEngine()
}
