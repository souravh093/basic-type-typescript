{
  // spred operator
  const bros1: string[] = ["Rana", "Munna", "Somik"];
  const bros2: string[] = ["Niyam", "Rj", "Gokul"];

  //   bros1.push(...bros2);

  const mentor1 = {
    typecript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentor2 = {
    prima: "Firoz",
    nextjs: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentor1,
    ...mentor2,
  };

  console.log(mentorList);

  // rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend) => {
      console.log(`Hi ${friend} `);
    });
  };

  greetFriends("Sourav", "Abul", "Kalam");

}
