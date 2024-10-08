/*
 * Add two numbers. If b is not provided, assign b to 0.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of a and b as a number
 */
export const addTwoNumbers = (a: number, b: number = 0): number => {
  return a + b;
};

// /**
//  * Calculates the total sum of an array of numbers.
//  * @param values - An array of numbers or strings.
//  * @returns The sum of the numbers.
//  */
export const sumArray = (numbers: (number | string)[]): number => {
  return numbers.reduce((acc: number, curr) => {
    // Convert strings to numbers if possible, otherwise use 0
    const num = typeof curr === 'string' ? parseFloat(curr) || 0 : curr;
    return acc + num;
  }, 0); // Initial value of acc is set to 0 and type is explicitly number
};

// Create type "Person" with the following properties:
// - name: string
// - age: number
export type Person = {
  name: string;
  age: number;
};


// Create type "User" which extends "Person" and adds the following properties:
// - type: 'user' (literal type)
export type User = Person & {
  type: 'user';
};

// Create type "Admin" which extends "Person" and adds the following properties:
// - isSuperAdmin: boolean
export type Admin = Person & {
  isAdmin: boolean;
};


// Create a type "AllPeople" which is a union of "Person", "User", and "Admin"
export type AllPeople = Person | User | Admin;

// Add function "isAdmin" that returns true if "u" is an admin
export const isAdmin = (u: AllPeople): u is Admin => {
  return 'isAdmin' in u;
};

// Add function "isUser" that returns true if "u" is a user
export const isUser = (u: AllPeople): u is User => {
  return 'type' in u && u.type === 'user';
};
/**
 * If a "Admin" calls userGreetingMessage, return "Hello, {name}. You are an admin."
 * If a "User" calls userGreetingMessage, return "Hello, {name}. You are a user."
 * If a "Person" calls userGreetingMessage, return "Hello, {name}. You do not have access."
 * @param user - The user to greet
 * @returns A greeting message
 */
export const userGreetingMessage = (u: AllPeople): string => {
  if (isAdmin(u)) {
    return `Hello, ${u.name}. You are an admin.`;
  } else if (isUser(u)) {
    return `Hello, ${u.name}. You are a user.`;
  } else {
    return `Hello, ${u.name}. You do not have access.`;
  }
};

// Test the functions
console.log(addTwoNumbers(5, 3)); // Outputs: 8
console.log(sumArray(["10", 20, "30"])); // Outputs: 60
console.log(userGreetingMessage({ name: 'John', age: 30, type: 'user' })); // Outputs: Hello, John. You are a user.
console.log(userGreetingMessage({ name: 'Jane', age: 40, isAdmin: true })); // Outputs: Hello, Jane. You are an admin.