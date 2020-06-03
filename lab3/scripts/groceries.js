// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

// Some vegtables and animals raised with horomones hence why their organic property is false.
// foodGroup is a list where index 0 = Fruit & Vegetable, index 1 = Grain, index 2 = Meat, index 3 = Treat
var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/1024px-Broccoli_and_cross_section_edit.jpg",
		organic: true,
		foodGroup: [1,0,0,0]
	},
	{
		name: "twinkies",
		vegetarian: false,
		glutenFree: false,
		price: 5.65,
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Hostess-Twinkies.jpg/1024px-Hostess-Twinkies.jpg",
		organic: false,
		foodGroup: [0,0,0,1]
	},
	{
		name: "carrots",
		vegetarian: true,
		glutenFree: true,
		price: 2.47,
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/1024px-Vegetable-Carrot-Bundle-wStalks.jpg",
		organic: true,
		foodGroup: [1,0,0,0]
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Breadindia.jpg",
		organic: false,
		foodGroup: [0,1,0,0]
	},
	{
		name: "bagel",
		vegetarian: true,
		glutenFree: false,
		price: 2.97,
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bagel-Plain-Alt.jpg/1024px-Bagel-Plain-Alt.jpg",
		organic: false,
		foodGroup: [0,1,0,0]
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		price: 12.05,
		img: "https://upload.wikimedia.org/wikipedia/commons/6/60/Standing-rib-roast.jpg",
		organic: true,
		foodGroup: [0,0,1,0]
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		price: 11.00,
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rosemary_chicken.jpg/1024px-Rosemary_chicken.jpg",
		organic: false,
		foodGroup: [0,0,1,0]
	},
	{
		name: "lettuce",
		vegetarian: true,
		glutenFree: true,
		price: 1.97,
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Romaine_lettuce.jpg/800px-Romaine_lettuce.jpg",
		organic: false,
		foodGroup: [1,0,0,0]
	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		price: 4.97,
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/1024px-Honeycrisp.jpg",
		organic: true,
		foodGroup: [1,0,0,0]
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Atlantic_Salmon.png",
		organic: false,
		foodGroup: [0,0,1,0]
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian & GlutenFree & Organic") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Vegetarian & GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Organic & GlutenFree") && (prods[i].organic == true) && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Organic & Vegetarian") && (prods[i].organic == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
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
