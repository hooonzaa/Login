const validCredentials = [
    "petr.ahoj1",
    "jana.pizza2",
    "karel.kočka3",
    "eva.12345"
];

function checkLogin() {
    var enteredUsername = document.getElementById('Uname').value;
    var enteredPassword = document.getElementById('Pswrt').value;

    const foundUser = enteredUsername + "." + enteredPassword;

for (let i = 0; i < validCredentials.length; i++) {
        if (foundUser === validCredentials[i]) {
            console.log("Login successful.");
            window.location.href = "loginsuccess.html";
            return;
        }
        console.log('Error: Invalid username or password. Please try again.');
    }
}