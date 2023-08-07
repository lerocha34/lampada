function lampOn(){
    document.querySelector('body').style.backgroundColor = '#fff';
    document.querySelector('.lamp').innerHTML = "<img src='images/lampon.png'/>";
}

function lampOff(){
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.lamp').innerHTML = "<img src='images/lampoff.png'/>";
}

document.querySelector('.on').addEventListener('click',lampOn);
document.querySelector('.off').addEventListener('click',lampOff);