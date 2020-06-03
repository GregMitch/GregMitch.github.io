// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, navName) {

	// Get all elements with class="tabcontent" and hide them
	navcontent = document.getElementsByClassName("navcontent");
	for (i = 0; i < navcontent.length; i++) {
		navcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	navlinks = document.getElementsByClassName("navlinks");
	for (i = 0; i < navlinks.length; i++) {
		navlinks[i].className = navlinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(navName).style.display = "block";
	evt.currentTarget.className += " active";

}

// Accordion style structure stuff
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3, slct4, slct5) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
		var s3 = document.getElementById(slct3);
		var s4 = document.getElementById(slct4);
		var s5 = document.getElementById(slct5);

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		s3.innerHTML = "";
		s4.innerHTML = "";
		s5.innerHTML = "";

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);

		// Line below adapted from https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object1
		optionArray.sort(function(a,b) {return a.price - b.price});

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	for (i = 0; i < optionArray.length; i++) {

		var productName = optionArray[i];
		var image = productName.img;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName.name;

		// create a label for the checkbox, and also add in HTML DOM
		var picture = document.createElement("IMG");
		picture.setAttribute("src", image);
		picture.setAttribute("width", "304");
 		picture.setAttribute("height", "228");

		var label = document.createElement('label')
		label.htmlFor = productName.name;
		label.appendChild(document.createTextNode(productName.name + " " + productName.price));

		//Checks what section of accordion structure product should go into
		if(productName.foodGroup[0] == 1) {
			s2.appendChild(checkbox);
			s2.appendChild(picture);
			s2.appendChild(document.createElement("br"));
			s2.appendChild(checkbox);
			s2.appendChild(label);
			s2.appendChild(document.createElement("br"));
		}
		else if(productName.foodGroup[1] == 1) {
			s3.appendChild(checkbox);
			s3.appendChild(picture);
			s3.appendChild(document.createElement("br"));
			s3.appendChild(checkbox);
			s3.appendChild(label);
			s3.appendChild(document.createElement("br"));
		}
		else if(productName.foodGroup[2] == 1) {
			s4.appendChild(checkbox);
			s4.appendChild(picture);
			s4.appendChild(document.createElement("br"));
			s4.appendChild(checkbox);
			s4.appendChild(label);
			s4.appendChild(document.createElement("br"));
		}
		else {
			s5.appendChild(checkbox);
			s5.appendChild(picture);
			s5.appendChild(document.createElement("br"));
			s5.appendChild(checkbox);
			s5.appendChild(label);
			s5.appendChild(document.createElement("br"));
		}
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));

}
