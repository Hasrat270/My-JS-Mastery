// JavaScript Loops

// 1. For Loop

for (let i = 10; i <= 100; i += 10) {
    console.log(i);
}

// 2. For of Loop

const users = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 35 }];
for (let user of users) {
    console.log(user.name.toUpperCase());
}

const fruits = ["apple", "banana", "orange", "grape"];
for (let fruit of fruits) {
    console.log(fruit.toUpperCase());
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

}