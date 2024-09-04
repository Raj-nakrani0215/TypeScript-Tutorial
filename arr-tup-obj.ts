let numbers: number[] = [1, 2, 3, 4, 5]; 
let names: Array<string> = ["Alice", "Bob", "Charlie"]; 


let fruits: string[] = ["Apple", "Banana", "Mango"];
fruits.push("Orange"); 

fruits.pop(); 

console.log(fruits[1]); 

for (let fruit of fruits) {
    console.log(fruit);
}

