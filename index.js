// Function to manipulate the DOM
function updateHtmlDoc() {
    // Remove the <main> element with id 'main'
    let mainElement = document.querySelector("main#main");
    
        mainElement.remove();
    

    // Create a new <h1> element
    let newHeader = document.createElement("h1");
    // Set the id attribute of the new <h1> element to 'victory'
    newHeader.id = "victory";
    // Set the text content of the new <h1> element
    newHeader.textContent = "Felix is the champion"; // Replace 'Felix' with your actual name

    // Append the new <h1> element to the document body
    document.body.appendChild(newHeader);

    // Return the newHeader variable
    return newHeader;
}

// Call the function to execute the DOM manipulation
const newHeader = updateHtmlDoc();

// Export the 'updateHtmlDoc' function and 'newHeader' variable for testing purposes
module.exports = {
    updateHtmlDoc,
    newHeader
};
