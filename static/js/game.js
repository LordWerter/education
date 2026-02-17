const state = {
    menu: {
        isOpen: false,
    },
    character: {
        status: 'idle', // idle / is-sleeping / is-eating / is-walking
    },
};
window.onload = function() {
    const showMenuBtn = window.document.getElementById('show-menu-btn');
    const menuBtnsContainer = window.document.querySelector('.menu-btns-container');

    showMenuBtn.addEventListener('click', () => {
        if (!state.menu.isOpen) {
            menuBtnsContainer.className = 'menu-btns-container';
            state.menu.isOpen = true;
        } else {
            menuBtnsContainer.className = 'menu-btns-container is-hidden';
            state.menu.isOpen = false;
        }
    });

    const sleepActionBtn = window.document.querySelector('.sleep-action');
    const eye = window.document.querySelector('.eye');
    const sleepCloud = window.document.querySelector('.sleep-cloud');

    sleepActionBtn.addEventListener('click', () => {
        if (state.character.status === 'idle') {
            state.character.status = 'is-sleeping';
            eye.className = 'eye';
            sleepCloud.className = 'sleep-cloud';
        } 
    });

    const eatBtn = window.document.querySelector('.eat-action');
    const burger = window.document.querySelector('.burger');

    eatBtn.addEventListener('click', () => {
        if (state.character.status === 'idle') {
            state.character.status = 'is-eating';
            burger.className = 'burger is-burger-fly';
        }
        setTimeout(() => {
            state.character.status = 'idle';
            burger.className = 'burger';
        }, 2000);
    });

    const walkBtn = window.document.querySelector('.walk-action');
    const leftLeg = window.document.querySelector('.left-leg');
    const rightLeg = window.document.querySelector('.right-leg');

    walkBtn.addEventListener('click', () => {
        if (state.character.status === 'idle') {
            state.character.status = 'is-walking';
            leftLeg.className = 'body-part left-leg is-left-leg-step';
            rightLeg.className = 'body-part right-leg is-right-leg-step';
        }
        setTimeout(() => {
            state.character.status = 'idle';
            leftLeg.className = 'body-part left-leg';
            rightLeg.className = 'body-part right-leg';
        }, 6000);
    })
}