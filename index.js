const { hash } =window.location; 

const message =atob(hash.replace('#',''));
if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message; 
}


document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector("#message-form").classList.add('hide');
    document.querySelector("#link-form").classList.remove('hide');

    const input = document.querySelector('#message-input');

    const coder = btoa(input.value);
   // console.log(coder);

    const mess = document.querySelector('#link-input')
    mess.value = `${window.location}#${coder}`; 
    mess.select();


});