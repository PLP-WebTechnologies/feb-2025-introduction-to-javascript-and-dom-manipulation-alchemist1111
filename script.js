// Change the text content dynamically
document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('intro-text').textContent = 'The text has been changed dynamically!';
});

// Modify CSS styles via JavaScript
document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('intro-text').style.color = 'blue';
    document.getElementById('intro-text').style.fontSize = '20px';
});

// Add a new element when a button is clicked
document.getElementById('add-element-btn').addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.textContent = 'This is a new dynamically added element.';
    document.getElementById('content').appendChild(newElement);
});

// Remove the last added element
document.getElementById('remove-element-btn').addEventListener('click', function() {
    const contentSection = document.getElementById('content');
    if (contentSection.lastElementChild) {
        contentSection.removeChild(contentSection.lastElementChild);
    }
});
