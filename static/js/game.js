const initialState = {
    menu: {
        isOpen: false,
    },
    game: {
        status: 'idle', // 'started'
        curDay: 1,
        curHour: 0,
    },
    character: {
        status: 'idle', // idle / is-sleeping / is-eating / is-walking
        days2Die: 24,
        health: 60,
        delight: 100,
    },
};

const routine = {
    0: 'startNewDay',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: 'getup',
    7: 'wantEat',
    8: 'goEat',
    9: '',
    10: 'wantEat',
    11: 'goEat',
    12: '',
    13: 'wantEat',
    14: 'goEat',
    15: 'wantWalk',
    16: 'goWalk',
    17: 'wantEat',
    18: 'goEat',
    19: 'wantWalk',
    20: 'goWalk',
    21: 'wantSleep',
    22: 'goSleep',
    23: '',
}

let gameState = structuredClone(initialState);

window.onload = function() {
    const showMenuBtn = window.document.getElementById('show-menu-btn');
    const menuBtnsContainer = window.document.querySelector('.menu-btns-container');
    const newGameBtn = window.document.querySelector('.new-game-btn');
    const exitGameBtn = window.document.querySelector('.exit-btn');

    const curDaySpan = window.document.querySelector('.current-day');
    const curHourSpan = window.document.querySelector('.current-hour');

    const startNewDay = () => {
        gameState.game.curDay = gameState.game.curDay + 1;
        curDaySpan.innerHTML = gameState.game.curDay;
    }

    // 300000 - 1 день // 5мин
    // 12500  - 1 час
    const processHour = () => {
        return setTimeout(() => {
            if (gameState.game.curHour !== 23) {
                gameState.game.curHour = gameState.game.curHour + 1;
            } else {
                gameState.game.curHour = 0;
                startNewDay();
            }
            curHourSpan.innerHTML = gameState.game.curHour;
        }, 12500);
    }


    const toggleMenu = () => {
        if (!gameState.menu.isOpen) {
            menuBtnsContainer.className = 'menu-btns-container';
            gameState.menu.isOpen = true;
        } else {
            menuBtnsContainer.className = 'menu-btns-container is-hidden';
            gameState.menu.isOpen = false;
        }
    }



    newGameBtn.addEventListener('click', () => {
        newGameBtn.disabled = true;
        exitGameBtn.disabled = false;
        gameState.game.status = 'started';
        toggleMenu();
    });

    exitGameBtn.addEventListener('click', () => {
        newGameBtn.disabled = false;
        exitGameBtn.disabled = true;
        gameState = structuredClone(initialState);
        menuBtnsContainer.className = 'menu-btns-container is-hidden';
    });

    showMenuBtn.addEventListener('click', () => {
        toggleMenu();
    });

    const sleepActionBtn = window.document.querySelector('.sleep-action');
    const eye = window.document.querySelector('.eye');
    const sleepCloud = window.document.querySelector('.sleep-cloud');

    sleepActionBtn.addEventListener('click', () => {
        if (gameState.character.status === 'idle') {
            gameState.character.status = 'is-sleeping';
            eye.className = 'eye';
            sleepCloud.className = 'sleep-cloud';
        } 
    });

    const eatBtn = window.document.querySelector('.eat-action');
    const burger = window.document.querySelector('.burger');

    eatBtn.addEventListener('click', () => {
        if (gameState.character.status === 'idle') {
            gameState.character.status = 'is-eating';
            burger.className = 'burger is-burger-fly';
        }
        setTimeout(() => {
            gameState.character.status = 'idle';
            burger.className = 'burger';
        }, 2000);
    });

    const walkBtn = window.document.querySelector('.walk-action');
    const leftLeg = window.document.querySelector('.left-leg');
    const rightLeg = window.document.querySelector('.right-leg');

    walkBtn.addEventListener('click', () => {
        if (gameState.character.status === 'idle') {
            gameState.character.status = 'is-walking';
            leftLeg.className = 'body-part left-leg is-left-leg-step';
            rightLeg.className = 'body-part right-leg is-right-leg-step';
        }
        setTimeout(() => {
            gameState.character.status = 'idle';
            leftLeg.className = 'body-part left-leg';
            rightLeg.className = 'body-part right-leg';
        }, 6000);
    })
}