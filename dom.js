console.log('test JS link!');

// your JavaScript file
const container = document.querySelector('#container');
//excercise 1 a <p> with red text that says “Hey I’m red!”
const content = document.createElement('p');
content.classList.add('content');
content.textContent = "Hey I'm red!";
content.style.cssText = 'color: red; background: white;';
//an <h3> with blue text that says “I’m a blue h3!”
const content2 = document.createElement('h3');
content2.classList.add('content');
content2.textContent = "I'm a blue h3!!";
content2.style.cssText = 'color: blue; background: white;';

// a <div> with a black border and pink background color with the following elements inside of it:
const content3 = document.createElement('div');
content3.classList.add('content');

    // another <h1> that says “I’m in a div”
const content3h1 = document.createElement('h1');
    content3h1.classList.add('content');
    content3h1.textContent = "I'm in a div!";
    // a <p> that says “ME TOO!”
const content3p = document.createElement('p');
    content3p.classList.add('content');
    content3p.textContent = "ME TOO!";
//styling the div
content3.style.cssText = 'border: 5px solid black; background: pink;';
//append the h1 and the p into the div
content3.appendChild(content3h1);
content3.appendChild(content3p);

//append all into the main div container
container.appendChild(content);
container.appendChild(content2);
container.appendChild(content3);