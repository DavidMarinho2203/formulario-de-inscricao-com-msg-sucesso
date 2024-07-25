// Função para validar o email
function validacaoEmail(email) {
    const emailvalido = /^[a-zA-Z][\w.-]*@[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/gm
    if ((emailvalido.test(email))) {
        return true //  email valido
    }

    return false // email invalido

}

// obtendo o form
const form = document.querySelector("form")
// obtendo os containers (Principal e o Sucesso)
const containerPrincipal = document.getElementById('container__Principal')
const containerDeSucesso = document.getElementById("container__De__Sucesso")
// obtendo o local do erro.
const erroDeEmail = document.getElementById("erroDeEmail")

let salvarEmail // variável para salvar o email

form.addEventListener('submit', (e) => {
    e.preventDefault() // impede que o site seja recarregado.

    const email = form.inEmail.value
    if (validacaoEmail(email)) { // se o email for valido
        // mostrar o container de sucesso
        containerPrincipal.style.display = "none"
        containerDeSucesso.style.display = 'flex'
        salvarEmail = email
        // mostrar o email no container de sucesso
        const respStrong = document.getElementById('email-cadastrado')
        respStrong.textContent = salvarEmail
    } else { // se o email for invalido
        erroDeEmail.style.display = 'flex'
        form.inEmail.style.borderColor = 'red'
        setInterval(() => { // mostrar o erro e apagar o erro depois de 2.5s
            erroDeEmail.style.display = 'none'
            form.inEmail.style.borderColor = 'hsl(231, 7%, 60%)'
        }, 2500)
    }

})
// botão para limpar o formulário e mostrar o container principal.
document.querySelector('#btn_resetar').addEventListener('click', (e) => {
    containerPrincipal.style.display = "flex"
    containerDeSucesso.style.display = 'none'
    salvarEmail = ""
    form.reset()
})