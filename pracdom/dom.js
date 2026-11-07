let element = document.getElementById('button');
console.log(element);

element.style.backgroundColor = blue;
element.style.color = 'white';
element.textContent = 'Hello, World!';
element.style.fontSize = 40px;
console.log(element);



element.addEventListener('click', function() {
    alert('Element clicked!');
});