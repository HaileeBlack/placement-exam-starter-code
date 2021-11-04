// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Hailee Black" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let cookieTotal = gb + cc + sugar

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')
    gb = gb + 1
    document.getElementById('qty-gb').textContent = gb
    cookieTotal = gb + cc + sugar
    document.getElementById('qty-total').textContent = cookieTotal


    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons
document.getElementById('minus-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread - button was clicked!')
    gb = gb - 1
    document.getElementById('qty-gb').textContent = gb
    cookieTotal = gb + cc + sugar
    document.getElementById('qty-total').textContent = cookieTotal

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Chocolate Chip + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons
document.getElementById('minus-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Chocolate Chip - button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar Sprinkle + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons
document.getElementById('minus-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar Sprinkle - button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})