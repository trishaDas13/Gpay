let button = document.querySelector('button');
let input = document.querySelectorAll('input');
let label = document.querySelectorAll('label');
let form = document.querySelector('form');

button.addEventListener('click', function(e){
    e.preventDefault();

    //todo ------- processing bar -------
    //* hide all the input fields
    button.style.display = 'none';
    input.forEach(function(element){
        element.style.display = 'none'
    });
    label.forEach(function(element){
        element.style.display = 'none'
    });
    //* Showing the progress bar
    document.getElementById('processing').style.display = 'inline-block';
    document.getElementById('progress').style.display = 'inline-block';
    document.getElementById('color').style.display = 'inline-block';
    form.style.background = 'transparent';
    form.style.display = 'flex';
    form.style.justifyContent = 'center';
    form.style.alignItems = 'center';

    
});