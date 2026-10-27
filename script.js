const inputEmail = document.querySelector("#email");
const inputSenha = document.querySelector("#senha")
const buttonEnviar = document.querySelector("#btn-enviar")

buttonEnviar.addEventListener("click",login)

function login(event){
    event.preventDefault()
    console.log(inputEmail.value)
     console.log(inputSenha.value)
}

console.log(inputEmail)
console.log(inputSenha)
console.log(buttonEnviar)

// o ID é sempre