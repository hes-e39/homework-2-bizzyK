interface Person {
  name: string;
  city: string;
  state?: string;
}

interface Employee extends Person {
  id: number;
  department: string;
}

type Animal = {
  type: "cat" | "dog" | "bird";
  name: string;
};

const greetMessage = (p: Person | Animal): string => {
  if ("type" in p) {
    // p is Animal, Person doesn't have a type property
    return 'Hello ${p.name}, you are a ${p.type}';
  } else {
    // p is Person, Animal doesn't have type city
    return 'Hello ${p.name}, you live in ${p.city}';
  }
}
