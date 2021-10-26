let iconPassword = document.querySelectorAll(".icon-password");

iconPassword.forEach(item => item.addEventListener('click', toggleType));

function toggleType() {
    let input = this.closest(".input-wrapper").querySelector(".password");
    this.classList.remove("fa-eye");
    this.classList.add("fa-eye-slash");
    if (input.type == "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

let btn = document.querySelector(".btn");
let toIntroduce = document.querySelector(".to-introduce");
let toConfirm = document.querySelector(".to-confirm");

btn.onclick = function() {
    if (toIntroduce.value == toConfirm.value) {
        alert("You are welcome")
    } 
    else {
        document.querySelector(".password-form").insertAdjacentHTML("beforeend", `<span class="alert" style='color:red'>
            Нужно ввести одинаковые значения.
            </span>`);
    }
};
