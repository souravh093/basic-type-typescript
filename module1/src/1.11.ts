{
  // ternary operator || Optional chaining || nullish coalescing operator

  const age: number = 20;

  //   if (age > 18) {
  //     console.log("Adult");
  //   } else {
  //     console.log("Not Adult");
  //   }

  const isAdult = age >= 18 ? "Adult Age" : "No Adult";

  console.log({ isAdult });

  //   nullish coalescing operator
  // null / undefined --->> decision making
  const isAuthenticated = 0;
  const result = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress?: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Sourav Halder",
    address: {
      city: "Barishal",
      road: "Charkwaya, 823",
      presentAddress: "Barishal, charkwaya, barishal",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanentAddress";
  console.log({ permanentAddress });
}
