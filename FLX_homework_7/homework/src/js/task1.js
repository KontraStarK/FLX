const canceledMessage = "Canceled";
const symbolsMessage = "I don't know any users having name length less than 4 symbols";
const strangerMessage = "I don’t know you";
const enterMassageLogin = "Enter your login: ";
const enterMassagePassword = "Enter your password: ";
const errPassword = "Wrong password";
const login = prompt((enterMassageLogin), '');

if (login.length < 4) {
    alert(symbolsMessage);
} else if (login === "" || login === null) {
    alert(canceledMessage);
} else if (!login === "User" || !login === "Admin") {
    alert(strangerMessage);
} else if (login === "User" || login === "Admin") {
    const password = prompt((enterMassagePassword), '');
    if (password === "" || password === null) {
        alert(canceledMessage);
    } else if ((login === "User" && password === "UserPass") || (login === "Admin" && password === "RootPass")) {
        let timeData = new Date().getHours();
        if (timeData < 20) {
            alert("Good day, dear " + (login) + "!");
        } else if (timeData >= 20) {
            alert("Good evening, dear " + (login) + "!");
        }
    } else {
        alert(errPassword);
    }
}