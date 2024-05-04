{
  // generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle;

  const getPropertyValue = <T, Y extends keyof T>(obj: T, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Sourave Halder",
    age: 26,
    address: "Barishal",
  };

  const car = {
    model: "Honda",
    year: 200,
  };
  const result1 = getPropertyValue(user, "name");
  const result2 = getPropertyValue(car, "year");

  const person1: Owner = "car";
  const person2: Owner2 = "ship";

  user["age"]; // 26

}
