// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99
	},
	{
		name: "twinkies",
		vegetarian: false,
		glutenFree: false,
		price: 5.65
	},
	{
		name: "carrots",
		vegetarian: true,
		glutenFree: true,
		price: 2.47
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35
	},
	{
		name: "bagel",
		vegetarian: true,
		glutenFree: false,
		price: 2.97
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		price: 12.05
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		price: 11.00
	},
	{
		name: "lettuce",
		vegetarian: true,
		glutenFree: true,
		price: 1.97
	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		price: 4.97
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
