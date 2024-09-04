interface Person {
    name: string;
    age: number;
}

let people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

console.log(people[0].name); 

for (let person of people) {
    console.log(`${person.name} is ${person.age} years old.`);
}
