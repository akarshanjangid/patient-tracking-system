function validateRegister() {
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  if (!email.includes("@") || contact.length !== 10) {
    alert("Please enter valid email and 10-digit contact.");
    return false;
  }
  return true;
}

function validateLogin() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  if (email === "akarshanjangid@gmail.com" && password === "123456") {
    document.getElementById("loginMessage").textContent = "Login successful!";
    return false;
  } else {
    document.getElementById("loginMessage").textContent = "Invalid credentials.";
    return false;
  }
}

function validateAppointment() {
  const date = new Date(document.getElementById("appointmentDate").value);
  const now = new Date();
  if (date < now) {
    alert("Please choose a future date.");
    return false;
  }
  return true;
}
