// Your code goes here

// 1 Mouseover

document.querySelector('h1').addEventListener('mouseover', (event => event.target.style.fontSize = '5rem'
));

// 2 Mouseout

document.querySelector('h1').addEventListener('mouseout', (event => event.target.style.fontSize = ''
));

// 3 Keydown

document.addEventListener('keydown', (event => document.querySelector('header').style.background = 'lightgrey'));

// 4 Keyup

document.addEventListener('keyup', (event => document.querySelector('header').style.background = ''));

// 5 Load

window.addEventListener('load', (event => document.querySelector('body').style.background = 'whitesmoke'));

// Variable for the next two

const introImg = document.querySelector('.intro img')

// 6 Double Click

introImg.addEventListener('dblclick', (event => {
    event.target.style.transform = 'scale(1.5)'
    event.target.style.transition = '.8s'
}));

// 7 Transition end (to reset that ^)

introImg.addEventListener('transitionend', (event => event.target.style.transform = ''));

// 8 Copy

document.querySelectorAll('p').forEach(item => item.addEventListener('copy', (event => window.alert("Copycat :("))))

// 9 Selected Text

window.addEventListener('resize', (event => {
    if (window.innerWidth === 500) {
        window.alert('Breakpoint!')
        event.stopPropagation()
    }
}));

// 10 AuxClick (I picked this one specifically since I though it was interesting click soon will only reference the main mouse button)

document.addEventListener('auxclick', (event => console.log('Extra buttons are nice')))