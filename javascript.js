const password = document.querySelector("#user_password")
const confirmPassword = document.querySelector("#confirm_password")
const reminder = document.querySelector(".pass-reminder")

function checkPassword() {
    if (password.value !== confirmPassword.value) {
        reminder.textContent = `*Passwords do not match`
    }
    else {
        reminder.textContent = ``
    }
}

password.addEventListener(`keyup`, () => {
    if (confirmPassword.value.length != 0) {
        checkPassword()
    }
})

confirmPassword.addEventListener(`keyup`, () => {
    checkPassword()
})