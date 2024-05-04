// shopping-cart.js

$(document).ready(function(){
    // Retrieve itemsArray from query parameter
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var itemsArray = JSON.parse(urlParams.get('items'));

    // Display items
    for (var i = 0; i < itemsArray.length; i++) {
        $('#cartItems').append('<div>' +itemsArray[i] + '<button class="remove-item" data-index="' + i + '">Remove</button></div>');
    }

    // Handle click event for remove button
    $(document).on('click', '.remove-item', function() {
        var index = $(this).data('index');
        // Remove item from array
        itemsArray.splice(index, 1);
        // Update local storage with updated itemsArray
        localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
        // Update query parameter with updated itemsArray
        var newUrlParams = new URLSearchParams();
        newUrlParams.set('items', JSON.stringify(itemsArray));
        // Redirect to the same page with updated query parameter
        window.location.href = window.location.pathname + '?' + newUrlParams.toString();
    });
});
    

$(document).ready(function() {
    // Select all elements with class p-name
    $('.p-name').each(function() {
        // Get the text content of each element and display it
        var productName = $(this).text().trim();
        
        // Display the product name in the console (You can replace this with any other action you want)
        console.log(productName);
    });
});
