const cssRoot = document.querySelector(':root');

const submitBtn = document.querySelector('.btn-submit');

const passwordInput = document.getElementById('pwd');
const confirmPasswordInput = document.getElementById('pwd-confirm');
const pwdNotMatching = document.querySelector('.pwd-not-matching');

confirmPasswordInput.addEventListener('input', () => {
    if (passwordInput.value != confirmPasswordInput.value) {
        pwdNotMatching.textContent = "Password doesn't match";
        pwdNotMatching.style.visibility = "visible";
        cssRoot.style.setProperty("--valid-color", "rgb(250, 40, 40)");
        submitBtn.disabled = true;
    } else {
        passwordMatch();
        submitBtn.disabled = false;
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordInput.value === "" && confirmPasswordInput.value === "") {
        passwordMatch();
    }
});

function passwordMatch() {
    pwdNotMatching.textContent = "";
    pwdNotMatching.style.visibility = "hidden";
    cssRoot.style.setProperty("--valid-color", "rgb(50, 150, 250)");
}



