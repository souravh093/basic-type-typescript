{
  // Reference Type Object

  // pb1: Create a similar object for a product with properties: id (readonly), name, description (optional), price, and isAvailable.
  const product: {
    readonly id: number;
    name: string;
    description?: string;
    price: number;
    isAvailable: boolean;
  } = {
    id: 101,
    name: "Sony Camera",
    price: 499,
    isAvailable: true,
  };

  // pb2: Modify the user object to include an address object with properties: street, city, state, country, and postalCode.
  const user: {
    readonly id: number;
    name: string;
    bio?: string;
    isMarried: boolean;
    email: string;
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode: number;
  } = {
    id: 102,
    name: "Sourave Halder",
    bio: "This is my all bio for the entire life",
    isMarried: false,
    email: "souravh093@gmail.com",
    street: "Barishal, Bangladesh",
    state: "Barishal",
    city: "Barishal",
    country: "Bangladesh",
    postalCode: 8200,
  };

  // pb3: Create a function that accepts the user object and returns a string greeting the user by their full name (first name and last name).
  function userPerson(person: {
    firstName: string;
    lastName: string;
    age?: number;
  }) {
    return `${person.firstName} ${person.lastName}`;
  }

  const person1 = { firstName: "Sourav", lastName: "Halder" };
  const user1 = userPerson(person1);
  console.log(user1);

  /**pb4: Create a function that accepts the user object and a new company name.
   *      The function should return a new user object with the updated company name.
   *      Remember, the company field is readonly, so you'll need to find a way around this.
   */

  function company(
    user: { id: number; name: string; age: number },
    companyName: string
  ) {
    return {
      ...user,
      companyName,
    };
  }

  console.log(
    company({ id: 102, name: "Sourav Halder", age: 24 }, "MNTECH Digital")
  );

  // pb5: Create a function that accepts the user object and an address object.
  //      The function should return a new user object with the updated address.
  const modernUser = (
    user: { id: number; name: string; age: number },
    address: {
      city: string;
      country: string;
      postalCode: number;
      strict: string;
    }
  ) => {
    return {
      ...user,
      ...address,
    };
  };

  console.log(
    modernUser(
      { id: 105, name: "Sourave Halder", age: 24 },
      {
        city: "Barishal",
        country: "Bangladesh",
        postalCode: 8200,
        strict: "Barishal, Bangladesh",
      }
    )
  );
}
