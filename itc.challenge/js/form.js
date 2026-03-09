document.getElementById("medicalForm").addEventListener("submit", function(e){
e.preventDefault()
const patient = {
name: document.getElementById("name").value,
age: document.getElementById("age").value,
blood: document.getElementById("blood").value,
allergies: document.getElementById("allergies").value,
disease: document.getElementById("disease").value,
medication: document.getElementById("medication").value,
contact: document.getElementById("contact").value
}
localStorage.setItem("patientData", JSON.stringify(patient))
alert("Medical profile saved")
})
const patientID = "001"
new QRCode(document.getElementById("qrcode"), {
text: "emergency.html?id=" + patientID,
width: 200,
height: 200
})