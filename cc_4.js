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