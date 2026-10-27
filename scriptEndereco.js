const inputCep = document.querySelector("#cep")
const inputLogradouro = document.querySelector("#logradouro")
const inputComplemento = document.querySelector("#complemento")
const inputNumero = document.querySelector("#numero")
const inputBairro = document.querySelector("#bairro")
const inputLocalidade = document.querySelector("#localidade")
const inputEstado = document.querySelector("#estado")
const inputUF = document.querySelector("#uf")

const botaoEnviar = document.querySelector("#btn-enviar")
botaoEnviar.addEventListener("click" ,cadastrarEndereco)

function cadastrarEndereco (event){
    event.preventDefault();
    const json = {
        "cep" : inputCep.value,
        "logradouro" : inputLogradouro.value,
        "complemento" : inputComplemento.value,
        "numero" : inputNumero.value,
        "bairro" : inputBairro.value,
        "localidade" : inputLocalidade.value,
        "estado" : inputEstado.value,
        "uf" : inputUF.value
    }

    console.log("meus dados do formulario:",json)

}

 inputCep.addEventListener("change",buscarCep);

async function buscarCep(event) {
    const cep = event.target.value
    
    if(cep.length == 8){
    
        const url = `https://viacep.com.br/ws/${cep}/json`
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)

        inputLogradouro.value = json.logradouro
        inputCep.value = json.cep
        inputBairro.value = json.bairro
        inputLocalidade.value = json.localidade
        inputComplemento.value = json.complemento
        inputEstado.value = json.estado
        inputUF.value = json.uf
    }
    
}