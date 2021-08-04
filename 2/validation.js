btn.onclick = function() {
    let email = document.getElementById("email-validate").value;
    if (email == '') {
        alert('Enter email!');
    } else {
        if (email.includes('@gmail.com')) {
            alert('Email approved');
        } else {
            alert('Email must contain @gmail.com');
        }
    }

    let pass = document.getElementById("password-validate").value;
    if (pass == '') {
        alert('Enter password!');
    } else {
        let passCheck = pass.split('');
        if (passCheck.length > 6) {
            alert('Max password length - 6 chars');
        } else {
            alert('password approved');
        }
    }
}