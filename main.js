var firstModal = document.querySelector('.first-modal');
var secondModal = document.querySelector('.second-modal');
var imageLogo = document.querySelector('.image-logo');

function gotIt(){
    firstModal.style.display = 'none';
    imageLogo.style.margin = '0'; 
}

function closeButton(){
    secondModal.style.display = 'none';
    // console.log('ok');
}

function showModal(){
    secondModal.style.display = 'block';
}