{
    // utility types
    // pick 
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNumber: string;
    }

    type NameAge = Pick<Person, "name" | "age">

    // Omit
    type ContactInfo = Omit<Person, "name" | "age" >

    // Required 
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadonly = Readonly<Person>
    const person1: PersonReadonly = {
        name: "Sourav",
        age: 23,
        contactNumber: "0134902323"
    }

    // Record 
    type MyObj = Record<string, string | number>
    type MyObj2 = Record<string, string>

    const obj1: MyObj2 = {
        a: "a",
        b: "b",
        c: "c",
        d: '23'
    }
}