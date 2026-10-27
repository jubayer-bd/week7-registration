const form = document.getElementById("registrationForm");
const message = document.getElementById('message');
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const termsInput = document.getElementById("terms");
const addressInput = document.getElementById("address");
const textCount = document.getElementById("textCount");
const departmentInput = document.getElementById("department");






addressInput.addEventListener('input', function () {

    const address = addressInput.value;


    textCount.textContent = address.length;
})

form.addEventListener("submit", function (even) {
    even.preventDefault();
    const studentName = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const department = departmentInput.value;
    let fullDepartmentName = "";

    if (studentName.length < 2) {
        message.textContent = "Please enter your full Name";
        message.style.color = "red";
        nameInput.focus();
        return;

    }
    if (!/^\d{11}$/.test(phone)) {
        message.textContent = "Enter an 11 - digit phone number";
        message.style.color = "red";
        phoneInput.focus();
        return;
    }
    if (!termsInput.checked) {
        message.textContent = "Please accept the terms and condition";
        message.style.color = "red";
        termsInput.focus();
        return;
    }
    if (department === " ") {
        message.textContent = "Please accept the terms and condition";
        message.style.color = "red";
        termsInput.focus();
        return;
    }
    if (department === "CSE") {
        fullDepartmentName = "Computer Science and Engineering";

    }
    if (department === "EEE") {
        fullDepartmentName = "Electrical and Electronic Engineering";
    }
    if (department === "Civil") {
        fullDepartmentName = "Civil Engineering";
    }
    console.log(department)

    message.textContent = `Registration checks passed. Welcome, ${studentName}!  in ${fullDepartmentName} department.`;
    message.style.color = 'green'
    addressInput.value = "";
    nameInput.value = "";
    phoneInput.value = "";
    termsInput.checked = false;
    textCount.textContent = "0";
    departmentInput.value = " ";

})