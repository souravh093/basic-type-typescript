{
//   union type
    type FrontedDeveloper = "Jounior Developer" | "Sinour Developer";
    type FullStackDeveloper2 = "Frontend Developer" | "Pro Developer";

    type Developer = FrontedDeveloper | FullStackDeveloper2;

    const developer: Developer = "Pro Developer"

    const newDeveloper: FrontedDeveloper  = "Jounior Developer";

    type User = {
      name: string;
      email?: string;
      gender: "male" | "female";
      bloodGroup: "A+" | "B+" | "AB+" | "AB-" | "O+" | "O-";
    };

    const user1: User = {
      name: "sourav halder",
      gender: "male",
      bloodGroup: "O+",
    };

  // Intersation Type
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}