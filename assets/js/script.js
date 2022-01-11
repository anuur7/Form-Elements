const shoppingFormElement = $('#shopping-form');
const shoppingListElement = $('#shopping-list');
const shoppingInputElement = $('#shopping-input');

function formSubmitHandler(event) {
    event.preventDefault();
    console.log("Form submitted")

    const newItem = shoppingInputElement.val();
    addNewShoppingListElement(newItem);
}

function addNewShoppingListElement(item) {
    const newLineItem = $('<li>');
    newLineItem.text(item);
    shoppingListElement.append(newLineItem);
}

// shoppingFormElement.on('submit', formSubmitHandler)
$('#submit-button').click(formSubmitHandler)

console.log("hello")
/*
* Wire up a function to the button
* Pick out the input value on the form
* Create a new line item in the shoppingListElement
*/

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
