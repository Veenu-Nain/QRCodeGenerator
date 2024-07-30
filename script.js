const apiURL = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgBox = document.querySelector(".imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector(".container input");

async function getQRCode(){
    if(qrText.value.length>0){
        qrImage.src = apiURL + qrText.value; 
        imgBox.classList.add("show-img");
    }
}