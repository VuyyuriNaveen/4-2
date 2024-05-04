

$(document).ready(function(){
    var itemsArray = JSON.parse(localStorage.getItem('itemsArray')) || [];

    // Set the innerHTML of the span element to the length of itemsArray
    $('#carty').text(itemsArray.length);
    // Handle click event for the <a> tag with class "add-cart"
    $('.add-cart').click(function(event){
        event.preventDefault(); // Prevent the default action of the link
        // Extract the current count from the span element
        var currentCount = parseInt($('#carty').text());
        // Increment the count by 1
        var newCount = currentCount + 1;
        // Update the span element with the new count
        $('#carty').text(newCount);
        // Add item to the array
        itemsArray.push('item' + newCount);
        localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
    });

    // Handle click event for the span element
    $('#carty').click(function() {
        // Redirect to new page with itemsArray as query parameter
        window.location.href = "HTMLS/cart.html?items=" + JSON.stringify(itemsArray);
    });
});



$(document).ready(function(){
    // Handle click event for the <a> tag
    $('#shop').click(function(event){
        event.preventDefault(); // Prevent the default action of the link
        var targetUrl = $(this).attr('href'); // Get the target URL from the href attribute
        window.location.href = targetUrl; // Navigate to the target URL
    });
    $('#home').click(function(event){
        event.preventDefault(); // Prevent the default action of the link
        var targetUrl = $(this).attr('href'); // Get the target URL from the href attribute
        window.location.href = targetUrl; // Navigate to the target URL
    });
    $('#men').click(function(event){
        event.preventDefault(); // Prevent the default action of the link
        var targetUrl = $(this).attr('href'); // Get the target URL from the href attribute
        window.location.href = targetUrl; // Navigate to the target URL
    });
    $('#women').click(function(event){
        event.preventDefault(); // Prevent the default action of the link
        var targetUrl = $(this).attr('href'); // Get the target URL from the href attribute
        window.location.href = targetUrl; // Navigate to the target URL
    });
    $('#kids').click(function(event){
        event.preventDefault(); // Prevent the default action of the link
        var targetUrl = $(this).attr('href'); // Get the target URL from the href attribute
        window.location.href = targetUrl; // Navigate to the target URL
    });
});

