document.addEventListener('DOMContentLoaded', function() {
    let size = 16;

    const changeButton = document.querySelector('.change-btn');
    changeButton.addEventListener("click", promptSize);

    createGrid(size);

    const gridElements = document.querySelectorAll('.grid-element');

    gridElements.forEach((element) => {
        element.addEventListener('click', changeColorOnHover);
        element.addEventListener('mouseenter', changeColorOnHover);
    });

    const options = document.querySelector('select');

    options.addEventListener('change', updateColor);

    const resetButton = document.querySelector('.reset-btn');
    resetButton.addEventListener('click', resetGrid);
});

function promptSize() {
    userInput = prompt("Enter the number of squares per side for the new grid:");

    checkInput(userInput);
}

function checkInput(input) {
    if (input <= 100 && input > 0) {
        let gridSize = parseInt(input);
        createGrid(gridSize);

        const gridElements = document.querySelectorAll('.grid-element');

        gridElements.forEach((element) => {
            element.addEventListener('mouseenter', changeColorOnHover);
        });
    } else {
        alert("Enter a number less than or equal to 100!");
    }
}

function createSquare(gridSize) {
    const container = document.querySelector('.grid-container');
    const div = document.createElement('div');
    div.classList.add('grid-element');
    container.appendChild(div);

    let size = 800 / gridSize;

    const gridElements = document.querySelectorAll('.grid-element');

    gridElements.forEach((element) => {
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
    });

}

function createGrid(gridSize) {
    const container = document.querySelector('.grid-container');

    container.innerHTML = '';
    
    for (let i = 0; i < gridSize; i++)
    {
        for (let j = 0; j < gridSize; j++)
        {
            createSquare(gridSize);
        }
    }
}

function changeColorOnHover(e) {
    e.target.classList.add('hover');

    let color = checkColor();

    console.log(color);

    if (e.target.classList.contains('hover')) {
        e.target.style.backgroundColor = color;
    }
}

function checkColor() {
    const options = document.querySelector('select');

    let color = options.value;
    let newColor = '#36454F';

    switch (color) {
        case 'black':
            newColor = 'black';
            break;
        case 'navy-blue':
            newColor = '#000080';
            break;
        case 'light-blue':
            newColor = '#B1F2FF';
            break;
        case 'pink':
            newColor = '#FFC0CB';
            break;
        case 'charcoal':
            newColor = '#36454F';
            break;
        default:
            newColor = '#36454F';
            break;
    }

    return newColor;
}

function updateColor() {
    
    const gridElements = document.querySelectorAll('.grid-element.hover');

    let color = checkColor();

    gridElements.forEach((element) => {
        element.style.backgroundColor = color;
    })
}

function resetGrid() {
    const gridElements = document.querySelectorAll('.grid-element');

    gridElements.forEach((element) => {
        element.style.backgroundColor = 'white';
    })
}