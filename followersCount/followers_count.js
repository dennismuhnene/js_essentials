let count = 0; // Initialize count to 0

function increaseCount() {
    count++; // Increment the count by 1
}

function displayCount() {
document.getElementById('countDisplay').innerHTML = count; // Displays the count in the HTML
}

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
}

function checkCountValue() {
    if (count === 10) {
        alert("Your insatgram post gained 10 follower! Congratulations!");
    }
    else if (count === 20) {
        alert("Your instagram account gained 20 followers! Keep it up!")
    }
}

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); //Displays the count
    checkCountValue(); // Check count value and display message
}

function resetCount() {
    count = count - count; // resets the count to 0
    displayCount(); //  Displays the Count
    alert ("Your instagram follower count has been reset");
}
