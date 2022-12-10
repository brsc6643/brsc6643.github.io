console.log("JS Connected");

//snake implementation

//basic configurations 

const speed = 6;
const worldSize = 10;
const startPoint = [5, 5];
const snake = [startPoint];
const key = {
    arrowUp: 38,
    arrowDown: 40,
    arrowLeft: 37,
    arrowRight: 39
};

let movingDirection;
let moveInterval;

//generate game screens

const generateWorld = () => {
    for (let rowIndex = 0; rowIndex < worldSize; rowIndex++) {
        const row = document.createElement('div');
    
        row.classList.add('row');
        
        for (let columnIndex = 0; columnIndex < worldSize; columnIndex++) {
            const input = document.createElement('input');
    
            input.type = 'checkbox';
    
            row.appendChild(input);
        }
    
    }
    document.querySelector('.world').appendChild(row);
}

generateWorld(worldSize);

//snake helper functions

const rows = document.querySelectorAll('.row');

const getItemAt = (x, y) => rows[y - 1].children[x - 1];
const checkItemAt = (x, y) => getItemAt(x, y).checked = true;
const unCheckItemAt = (x, y) => getItemAt(x, y).checked = false;

const placeAppleAt = (x, y) => {
    getItemAt(x, y).type = 'radio';
    checkItemAt(x, y);
}

const removeAppleAt = (x, y) => {
    getItemAt(x, y).type = 'checkbox';
    unCheckItemAt(x, y);
}

//position apple

const getApplePosition = () => {
    const position = [1, 1];

    rows.forEach((row, rowIndex) => {
        Array.from(row.children).forEach((input, inputIndex) => {
            if (input.type === 'radio') {
                position[0] = inputIndex + 1;
                position[1] = rowIndex + 1;
            }
        });
    });

    return position;
}

//generate new position for apple 

const getRandomPosition = () => {
    const availablePositions = [];

    rows.forEach((row, rowIndex) => {
        Array.from(row.children).forEach((input, inputIndex) => {
            if (input.type === 'checkbox' && input.checked === false) {
                availablePositions.push([inputIndex + 1, rowIndex + 1]);
            }
        });
    });

    const index = Math.floor(Math.random() * (availablePositions.length) - 1) + 1;

    return availablePositions[index];
}

//keep score 

const increaseScore = () => {
    const score = document.querySelector('.score');

    currentScore = parseInt(score.innerText, 10);
    score.innerText = currentScore + 1;
}

//accept user input

const handleInput = () => {
    document.addEventListener('keydown', e => {
        switch(e.keyCode) {
            case key.arrowUp:    movingDirection = movingDirection === 'down' ? 'down' : 'up'; break;
            case key.arrowDown:  movingDirection = movingDirection === 'up' ? 'up' : 'down'; break;
            case key.arrowLeft:  movingDirection = movingDirection === 'right' ? 'right' : 'left'; break;
            case key.arrowRight: movingDirection = movingDirection === 'left' ? 'left' : 'right'; break;
        }

        if (moveInterval === undefined) {
            moveInterval = setInterval(() => {
                move(movingDirection || 'left');
            }, 1000 / speed);
        }
    });
}

//game start function 

const startGame = () => {
    handleInput();
    checkItemAt(...startPoint);
    placeAppleAt(...getRandomPosition());
}
//invoke start function
startGame();

//keep track of head and tails of snake array
const move = direction => {
    const applePosition = getApplePosition();
    const head = [...snake[0]];
    const tail = [...snake[snake.length - 1]];

//check if snake will collide with itself 
    const updateSnake = () => {
        snake.unshift(head);
        snake.pop();

        snake.forEach(snakePart => checkItemAt(...snakePart));
    }
}

//update position of head
switch (direction) {
    case 'up':    head[1] = head[1] === 1 ? worldSize : head[1] - 1; break;
    case 'down':  head[1] = head[1] === worldSize ? 1 : head[1] + 1; break;
    case 'left':  head[0] = head[0] === 1 ? worldSize : head[0] - 1; break;
    case 'right': head[0] = head[0] === worldSize ? 1 : head[0] + 1; break;
}

//rather than making the snake die when it hits the edges, wrap the snake around the game world 
//if the head and the apple are at the same position, invoke the increase score and update snake functions and move the apple
if (head[0] === applePosition[0] && head[1] === applePosition[1]) {
    snake.push(tail);

    placeAppleAt(...getRandomPosition());
    removeAppleAt(...applePosition);
    
    increaseScore();

    updateSnake();
} else {
    updateSnake();
    unCheckItemAt(...tail);
}

//game over sequence 

if (getItemAt(...head).type === 'checkbox' && getItemAt(...head).checked) {
    document.querySelector('h1').innerText = 'Game Over...';
    document.querySelectorAll('input').forEach(input => input.disabled = true);

    playWave(head);

    clearInterval(moveInterval);
}

//wave animation
const playWave = head => {
    const checkboxes = [];

    for (let x = 1; x <= worldSize; x++) {
        for (let y = 1; y <= worldSize; y++) {
            checkboxes.push(getItemAt(x, y));
        }
    }

    getItemAt(...head).className = 'wave';

    checkboxes.forEach((checkbox, index) => {
        setTimeout(() => {
            checkbox.className = 'wave';
            checkbox.checked = false;
        }, 10 * index);
    });
}
