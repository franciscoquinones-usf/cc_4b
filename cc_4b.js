// Step 2 Define An Array

let Products = [
    {sku: "SKU-001", name: "Apples", category: "groceries", price: 3.99, inventory: 30},
    {sku: "SKU-002", name: "Grapes", category: "groceries", price: 4.99, inventory: 20},
    {sku: "SKU-003", name: "Phone Case", category: "electronics", price: 5.99, inventory: 5},
    {sku: "SKU-004", name: "Hat", category: "apparel", price: 6.99, inventory: 6},
    {sku: "SKU-005", name: "Bleach", category: "household", price: 7.99, inventory: 5},
];

// Step 3 Category Discounts

for (let product of Products) {
    let discount = 0

    switch (product.category) {
        case "electronics":
            discount = 0.20;
            break;
        case "apparel":
            discount = 0.15;
            break;
        case "groceries":
        case "household":
            discount = 0.10;
            break
        default:
            discount = 0;
    }
let promoprice = product.price * (1-discount);
product.promoprice = parseFloat(promoprice.toFixed(2));
}

console.log(Products);
