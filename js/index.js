// Your code goes here

// 1 Mouseover

document.querySelector('h1').addEventListener('mouseover', (event => event.target.style.fontSize = '5rem'
));

// 2 Mouseout

document.querySelector('h1').addEventListener('mouseout', (event => event.target.style.fontSize = ''
));

// 3 Keydown

document.addEventListener('keydown', (event => 
    document.querySelector('header').style.background = 'lightgrey'))

// 4 Keyup

document.addEventListener('keyup', (event =>  
    document.querySelector('header').style.background = ''))

// 5 Load

window.addEventListener('load', (event => {
    document.querySelector('body').style.background = 'whitesmoke'
    console.log('test')
    }
))

// 6



// 7


// 8


// 9


// 10