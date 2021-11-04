$(document).ready(function() {
// ADD NEW ITEM TO END OF LIST
    $("ul").append('<li>Cream</li>');

// ADD NEW ITEM START OF LIST
    $("ul li:first").before('<li>Kale</li>');

// ADD A CLASS OF COOL TO ALL LIST ITEMS
    $("ul li").addClass("cool");

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
    $("h2").append(" " + (("ul li").length + 1))
});