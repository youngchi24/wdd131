// Select the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Listen for clicks on the Add Chapter button
button.addEventListener('click', function() {

    // Check that the input is not empty
    if (input.value.trim() !== '') {

        // Create a new list item
        const li = document.createElement('li');

        // Create a delete button
        const deleteButton = document.createElement('button');

        // Put the chapter inside the list item
        li.textContent = input.value.trim();

        // Give the delete button its symbol
        deleteButton.textContent = '❌';

        // Add an accessible label to the button
        deleteButton.setAttribute('aria-label', `Remove ${input.value.trim()}`);

        // Listen for clicks on the delete button
        deleteButton.addEventListener('click', function() {

            // Remove this chapter from the list
            list.removeChild(li);

            // Return focus to the input field
            input.focus();
        });

        // Add the delete button to the list item
        li.append(deleteButton);

        // Add the list item to the unordered list
        list.append(li);

        // Clear the input field
        input.value = '';

        // Return focus to the input field
        input.focus();

    } else {

        // If the input is empty, return focus to it
        input.focus();
    }
});
