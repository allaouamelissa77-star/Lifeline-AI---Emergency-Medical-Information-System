function generateQR(){
let patientID = "https://lifeline-ai.com/patient/12345";
let qrURL = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + patientID;
document.getElementById("qr-image").src = qrURL;
}