let patientCount = 0;
let appointmentCount = 0;
let billCount = 0;

function login() {
    alert("Login Successful");
}

function registerPatient() {

    const name = document.getElementById("patientName").value;
    const age = document.getElementById("patientAge").value;
    const disease = document.getElementById("patientDisease").value;

    if(name === "" || age === "" || disease === "") {
        alert("Please fill all details");
        return;
    }

    const list = document.getElementById("patientList");

    const item = document.createElement("li");

    item.textContent =
    `Name: ${name}, Age: ${age}, Disease: ${disease}`;

    list.appendChild(item);

    patientCount++;

    document.getElementById("totalPatients").textContent = patientCount;

    alert("Patient Registered Successfully");
}

function bookAppointment() {

    const patient =
    document.getElementById("appointmentPatient").value;

    const doctor =
    document.getElementById("doctorSelect").value;

    const date =
    document.getElementById("appointmentDate").value;

    if(patient === "" || date === "") {
        alert("Please fill appointment details");
        return;
    }

    const list =
    document.getElementById("appointmentList");

    const item =
    document.createElement("li");

    item.textContent =
    `${patient} booked appointment with ${doctor} on ${date}`;

    list.appendChild(item);

    appointmentCount++;

    document.getElementById("totalAppointments").textContent =
    appointmentCount;

    alert("Appointment Booked Successfully");
}

function generateBill() {

    const patient =
    document.getElementById("billPatient").value;

    const amount =
    document.getElementById("billAmount").value;

    if(patient === "" || amount === "") {
        alert("Please enter billing details");
        return;
    }

    const list =
    document.getElementById("billList");

    const item =
    document.createElement("li");

    item.textContent =
    `Bill Generated for ${patient} - ₹${amount}`;

    list.appendChild(item);

    billCount++;

    document.getElementById("totalBills").textContent =
    billCount;

    alert("Bill Generated Successfully");
}