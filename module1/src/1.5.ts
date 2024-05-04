// Reference type --> object
const user: {
  readonly company: string; // type --> literal type with readonly not modify
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "MN TECH DIGITAL",
  firstName: "Sourave",
  lastName: "phopop",
  isMarried: true,
};


