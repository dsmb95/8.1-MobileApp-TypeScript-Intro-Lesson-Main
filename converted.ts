// ─── 1. VARIABLE TYPES ────────────────────────────────────────────────────────

let username:string = "Maya";
let age:number = 28;
let isLoggedIn:boolean = true;

// ─── 2. ARRAYS ────────────────────────────────────────────────────────────────

let scores:number[] = [90, 85, 78];
let tags:string[] = ["react", "typescript", "mobile"];

// ─── 3. UNION TYPES ───────────────────────────────────────────────────────────
// A value that can be one of several types

let id:string|number = "abc123";
// id = 42; // should also be valid after conversion

// ─── 4. FUNCTIONS ─────────────────────────────────────────────────────────────

function greet(name:string):string {
  return "Hello, " + name;
}

function logMessage(message:string):void {
  console.log(message);
  // returns nothing — what type is that?
}

const add = (a:number, b:number):number => a + b;

// ─── 5. OPTIONAL AND DEFAULT PARAMETERS ──────────────────────────────────────

function greetWithTitle(name:string, title?:string):string {
  if (title) {
    return `Hello, ${title} ${name}`;
  }
  return `Hello, ${name}`;
}

function greetWithDefault(name:string, greeting:string = "Hello"):string {
  return `${greeting}, ${name}`;
}

// ─── 6. INTERFACES ────────────────────────────────────────────────────────────

interface User {
    id: number,
    name: string,
    email: string
}

function printUser(user:User) {
  console.log(`${user.name} — ${user.email}`);
}

const newUser:User = {
  id: 1,
  name: "Priya",
  email: "priya@example.com",
};

printUser(newUser);

// ─── 7. OPTIONAL PROPERTIES ───────────────────────────────────────────────────

interface Item {
    id: number,
    name: string,
    description?: string
}

const itemWithDesc:Item = { id: 1, name: "Keyboard", description: "Mechanical" };
const itemWithout:Item  = { id: 2, name: "Mouse" }; // description missing — that's fine

const printItem = (item:Item) => {
    console.log(`${item.name} - ${item.description}`)
}
printItem(itemWithDesc);

// ─── 8. TYPE ALIASES ──────────────────────────────────────────────────────────

function printCoord(coord) {
  console.log(`x: ${coord.x}, y: ${coord.y}`);
}

printCoord({ x: 10, y: 20 });

// ─── 9. ENUMS ─────────────────────────────────────────────────────────────────

enum Role {
  Admin = "administrator access",
  Editor = "editor",
  Viewer = "viewer",
};

let currentRole:Role = Role.Admin;
console.log(currentRole);

// ─── 10. GENERICS ─────────────────────────────────────────────────────────────
// A function that works with any type but stays consistent. Creates a one-to-one mapping, the type of input will be mapped to the type of output..

function identity<T>(arg:T) {
  return arg;
}

const result1 = identity<string>("hello");
const result2 = identity<number>(42);

// ─── 11. CLASSES ──────────────────────────────────────────────────────────────

class Person {
    name: string;
    age: number;

  constructor(name:string, age:number) {
    this.name = name;
    this.age = age;
  }

  greet():string {
    return `Hi, I'm ${this.name}`;
  }
}

const person = new Person("Ana", 25);
console.log(person.greet());

// ─── 12. MODULES ──────────────────────────────────────────────────────────────

function add2(x:number, y:number):number {
  return x + y;
}

export { add2 };
