function onFreeze() {
    var text = document.getElementById('drink')
    if (text.innerHTML === "Baja Blast") {
        text.innerHTML = "Pineapple Freeze";
        document.getElementById('freeze').src='Images/pineapple.jpg';
        document.querySelector('#showButton').innerHTML = 'Or if You Wanna Go Back';
    }
    else {
        text.innerHTML = "Baja Blast";
        document.getElementById('freeze').src='Images/baja_blast.jpg';
        document.querySelector('#showButton').innerHTML = "If Mountain Dew Ain't Yo Thang";

    }    
}