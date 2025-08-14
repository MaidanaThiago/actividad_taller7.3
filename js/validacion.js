document.getElementById("regBtn").addEventListener("click", function() {
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    if(password1.length < 6 || password2.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }
});

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

