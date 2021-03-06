const password = document.querySelector("#user_password")
const confirmPassword = document.querySelector("#confirm_password")
const reminder = document.querySelector(".pass-reminder")

function checkPassword() {
    if (password.value !== confirmPassword.value) {
        reminder.textContent = `*Passwords do not match`
        password.style.border = `1px solid red`
        confirmPassword.style.border = `1px solid red`
    }
    else {
        reminder.textContent = ``
        password.style.border = `1px solid rgb(0, 0, 0, .2)`
        confirmPassword.style.border = `1px solid rgb(0, 0, 0, .2)`
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