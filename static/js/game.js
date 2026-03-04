const initialState = {
    menu: {
        isOpen: false,
    },
    notification: {
        isOpen: false,
    },
    game: {
        status: 'idle', // 'started'
        curDay: 1,
        curHour: 5,
        hourId: null,
        eat: 0,
        walk: 0,
        sleep: 0,
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
    1: 'idle',
    2: 'idle',
    3: 'idle',
    4: 'idle',
    5: 'idle',
    6: 'getup',
    7: 'wantEat',
    8: 'goEat',
    9: 'idle',
    10: 'wantEat',
    11: 'goEat',
    12: 'idle',
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
    23: 'idle',
}

const notifications = {
    wantEat: {
        isOpen: true,
        text: 'Hey! I want to eat!',
    },
    wantWalk: {
        isOpen: true,
        text: 'Hey! I want to walk!',
    },
    wantSleep: {
        isOpen: true,
        text: 'Hey! I want to sleep!',
    }
}

let gameState = structuredClone(initialState);

window.onload = function() {
    const showMenuBtn = window.document.getElementById('show-menu-btn');
    const menuBtnsContainer = window.document.querySelector('.menu-btns-container');
    const newGameBtn = window.document.querySelector('.new-game-btn');
    const exitGameBtn = window.document.querySelector('.exit-btn');

    const healthSpan = window.document.querySelector('.health');
    const delightSpan = window.document.querySelector('.delight');
    const curDaySpan = window.document.querySelector('.current-day');
    const curHourSpan = window.document.querySelector('.current-hour');
    const notificationCloud = window.document.querySelector('.notification-cloud');
    const notificationTextWrap = window.document.querySelector('.notification-message');

    const startNewDay = () => {
        gameState.game.curDay = gameState.game.curDay + 1;
        curDaySpan.innerHTML = gameState.game.curDay;
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

    const toggleNotification = (isOpen = false) => {
        if (isOpen) {
            notificationCloud.className = 'notification-cloud';
            gameState.notification.isOpen = true;
        } else {
            notificationCloud.className = 'notification-cloud is-hidden';
            gameState.notification.isOpen = false;
        }
    }

    // 300000 - 1 день // 5мин / 2 = 2,5мин
    // 12500 / 2 = 6250  - 1 час
    const processHour = () => {
        return setTimeout(() => { // return timerId
            if (gameState.game.curHour !== 23) {
                gameState.game.curHour = gameState.game.curHour + 1;
            } else {
                gameState.game.curHour = 0;
                startNewDay();
            }
            curHourSpan.innerHTML = gameState.game.curHour;

            const characterStatus = routine[gameState.game.curHour];
            if (characterStatus === 'wantEat') {
                gameState.game.eat = 1;
            }
            if (characterStatus === 'wantWalk') {
                gameState.game.walk = 1;
            }
            if (characterStatus === 'wantSleep') {
                gameState.game.sleep = 1;
            }
            if (characterStatus === 'goEat') {
                gameState.game.eat = 0;
                if (gameState.game.eat === 1) {
                    if (gameState.character.delight > 0) {
                        gameState.character.delight = gameState.character.delight - 25;
                        delightSpan.innerHTML = `${gameState.character.delight}%`; // gameState.character.delight + '%'
                    } else {
                        gameState.character.health = gameState.character.health - 10;
                        healthSpan.innerHTML = `${gameState.character.health}%`;
                    }
                } else {
                    if (gameState.character.delight < 100) {
                        gameState.character.delight = gameState.character.delight + 25;
                        delightSpan.innerHTML = `${gameState.character.delight}%`; // gameState.character.delight + '%'
                    } else {
                        gameState.character.health = gameState.character.health + 10;
                        healthSpan.innerHTML = `${gameState.character.health}%`;                    }
                }
            }
            if (characterStatus === 'goWalk' && gameState.game.walk === 1) {
                gameState.game.walk = 0;
                if (gameState.character.delight > 0) {
                    gameState.character.delight = gameState.character.delight - 25;
                    delightSpan.innerHTML = `${gameState.character.delight}%`;
                } else {
                    gameState.character.health = gameState.character.health - 10;
                    healthSpan.innerHTML = `${gameState.character.health}%`;
                }
            }
            if (characterStatus === 'goSleep' && gameState.game.sleep === 1) {
                gameState.game.sleep = 0;
                if (gameState.character.delight > 0) {
                    gameState.character.delight = gameState.character.delight - 25;
                    delightSpan.innerHTML = `${gameState.character.delight}%`;
                } else {
                    gameState.character.health = gameState.character.health - 10;
                    healthSpan.innerHTML = `${gameState.character.health}%`;
                }
            }
            const notificationObj = notifications[characterStatus];
            console.log(`${gameState.game.curHour} - `, notificationObj);
            if (notificationObj !== undefined) {
                toggleNotification(notificationObj.isOpen);
                notificationTextWrap.innerHTML = notificationObj.text;
            } else {
                toggleNotification(false);
            }

            gameState.game.hourId = processHour();
        }, 6250);
    }

    newGameBtn.addEventListener('click', () => {
        newGameBtn.disabled = true;
        exitGameBtn.disabled = false;
        gameState.game.status = 'started';
        curDaySpan.innerHTML = 1;
        curHourSpan.innerHTML = 5;
        gameState.game.hourId = processHour();
        toggleNotification(true);
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
        gameState.game.sleep = 0;
        toggleNotification();
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
        gameState.game.eat = 0;
        toggleNotification();
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
        gameState.game.walk = 0;
        toggleNotification();
    })
}