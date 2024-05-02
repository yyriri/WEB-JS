const numbers = [6, 3, 20, 10, 2];
console.log(numbers);
let n = numbers.length;
for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
        if (numbers[j] > numbers[j+1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = temp;
        }
    }
}


console.log("Sorted array:", numbers);
console.log("First element:", numbers[0]);

const inventory=[
    // Type 1: Computers
    [
    // Item 1: Laptops
    ["Mac-Book", 10],
    // Item 2: Desktops
    ["Sony-PC", 5]
    ],
    // Type 2: Bags
    [
    // Item 1: Backpacks
    ["Porter", 30],
    // Item 2: Handbags
    ["Gucci", 20]
    ],
    // Type 3: Snacks
    [
    // Item 1: Chips
    ["Pringles", 50],
    // Item 2: Chocolate Bars
    ["Twix", 40]
    ]   ];
    // Example: Accessing elements
    console.log("Quantity of Mac-Book Laptops:", inventory[0][0][1]); // 10
    console.log("Quantity of Gucci Handbags:", inventory[1][1][1]); // 20
    console.log("Quantity of Twix Chocolate Bars:", inventory[2][1][1]); // 40