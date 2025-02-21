<!-- The following lines of code was adapted from https://www.geeksforgeeks.org/how-to-change-the-color-of-button-on-click/, https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll, https://www.geeksforgeeks.org/javascript-window-getcomputedstyle-method/

const colorButton = document.querySelector("#colorButton");

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        color += letters[randomIndex];
    }
    return color;
}

// Function to change colors
function changeColors() {
    let newBgColor = getRandomColor();
    let newTextColor = getRandomColor();

    // Switch background and text color for body
    document.body.style.backgroundColor = newBgColor;
    document.body.style.color = newTextColor;

    // Switch background for elements that have a set background
    let elements = document.querySelectorAll("*");
    elements.forEach(function (el) {
        let bgColor = window.getComputedStyle(el).backgroundColor;
        if (bgColor !== "rgba(0, 0, 0, 0)") { 
            el.style.backgroundColor = newBgColor;
        }
    });
}


// Add event listener to the button
colorButton.addEventListener("click", changeColors);