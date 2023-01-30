async function login(e) {
    e.preventDefault();

    const loginDetails = {
        email: e.target.email.value,
        password: e.target.password.value
    }

    await axios.post("http://54.144.20.123:8080/login-user", loginDetails)
        .then(res => {
            alert('Logged in successfully');
            localStorage.setItem('token', res.data.token);
            window.location.href = "../expense/expense.html";
        })
        .catch(err => {
            document.body.innerHTML += `<div style="color:red">
        User not found</div>`;
        })
}

document.getElementById('ForgotPassword').onclick = function(e) {
    e.preventDefault();
    window.location.href = "../forgotpassword/forgotpassword.html";
}