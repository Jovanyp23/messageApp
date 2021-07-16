
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('#message-input');

    const coder = btoa(input.value);
    console.log(coder);

    document.querySelector('#link-input').value = coder; 


});