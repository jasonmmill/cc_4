// Task 1: If Statements
let purchaseAmount = 125
let finalAmount = purchaseAmount *= 0.8
if (purchaseAmount > 100) {
    console.log(finalAmount)
}
console.log(`Final amount after discount: $${purchaseAmount}`)

// Task 2: For Loop 

let sales = [ 120, 85, 200, 150, 90 ]
let totalSales = 0
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}
console.log(`Total sales: $${totalSales}`)

// Task 3: While Loop 

let stock = 10
while (stock >= 0) {
    console.log(`Stock: ${stock}`);
    stock--;
}

// Task 4: Do...While Loop

let response = 0
do {
    console.log(`Response ${response}`);
    response++;
} while (response <= 3);

// Task 5: For...In Loop

let employee = { name: "Alice", position: "Manager", salary: 75000 }
for (let key in employee) {
        console.log(`${key}: ${employee[key]}`)
    }

// Task 6: For...Of Loop

let products = [ "Laptop", "Mouse", "Keyboard"]
for (const product in products) {
    console.log(`${products[product]}`)
    }

// Task 7: forEach() Method

let orders = [ 101, 102, 103 ]
orders.forEach(order => {
    console.log(`Order ${order}`)
});

// Task 8: Function Declaration
let amount = 10
let taxRate = 0.1    
function calculateTax() {
    return amount * taxRate
}
console.log(`Tax amount: ${calculateTax()}`)

// Task 9: Function Expressions

let price = 100
let discount = (1 - 0.2)
function applyDiscount() {
    return price * discount
}
console.log(`Discounted price: ${applyDiscount()}`)