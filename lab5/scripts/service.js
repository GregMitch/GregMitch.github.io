

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCreditCard(txtCard) {
    var a = document.getElementById(txtCard).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?(\d{4})\)?[ ]?(\d{4})[ ]?(\d{4})[ ]?(\d{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#pnumber").on("change", function(){
        if (!validatePhone("pnumber")){
            alert("Wrong format for phone");
            $("#pnumber").val("xxx xxx xxxx or xxx-xxx-xxxx");
            $("#pnumber").addClass("error");
        }
        else {
            $("#pnumber").removeClass("error");
        }
    });

    $("#ccnumber").on("change", function(){
        if (!validateCreditCard("ccnumber")){
            alert("Wrong format for credit card");
            $("#ccnumber").val("xxxx xxxx xxxx xxxx");
            $("#ccnumber").addClass("error");
        }
        else {
            $("#ccnumber").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#ccnumber").on("mouseenter", function(){
        $("#ccnumber").addClass("showInput");
    });

    $("#ccnumber").on("mouseleave", function(){
        $("#ccnumber").removeClass("showInput");
    });

    $("#pnumber").on("mouseenter", function(){
        $("#pnumber").addClass("showInput");
    });

    $("#pnumber").on("mouseleave", function(){
        $("#pnumber").removeClass("showInput");
    });

    $("#email").on("mouseenter", function(){
        $("#email").addClass("showInput");
    });

    $("#email").on("mouseleave", function(){
        $("#email").removeClass("showInput");
    });

    $("#fname").on("mouseenter", function(){
        $("#fname").addClass("showInput");
    });

    $("#fname").on("mouseleave", function(){
        $("#fname").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#ccnumber").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


    $(function() {
    $("#datepicker").datepicker({
      beforeShowDay: noMondays
    });

    function noMondays(date){
      var professionals = document.getElementsByName("prof");
      var chosenProf;

      for(var i = 0; i < professionals.length; i++) {
        if(professionals[i].checked) {
          chosenProf = professionals[i].value;
        }
      }
      if(chosenProf == "Erica"){
        if(date.getDay() === 5 || date.getDay() === 6) {  /*Erica doesnt work on Fridays and Saturdays*/
            return [false, "not in", "Erica has Friday and Saturday off"]
        }
        else {
          return [true, "", ""]
        }
      }

    if(chosenProf == "Eric"){
      if(date.getDay() === 0 || date.getDay() === 3) {  /*Eric doesn't work on Sundays or Wednesdays*/
            return [false, "not in", "Eric has Sunday and Wednesday off"]
      }
      else {
        return [true, "", ""]
      }
    }

    if(chosenProf == "Ericson"){
      if (date.getDay() === 2 || date.getDay() === 4) {  /*Ericson doesnt work on Tuesdays or Thursdays*/
            return [false, "not in", "Ericson has Tuesday and Thursday off"]
      }
      else {
        return [true, "", ""]
      }
    }
  }
});

});
