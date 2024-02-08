import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {

    button.addEventListener("click", handleClick)

})


const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})


function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}

var botaoCopiar = document.getElementById('room-id');

botaoCopiar.addEventListener('click', function () {
    var textoParaCopiar = this.dataset.id;
    var inputTemporario = document.createElement('input');
    inputTemporario.setAttribute('value', textoParaCopiar);
    document.body.appendChild(inputTemporario);
    inputTemporario.select();

    try {
        var copiado = document.execCommand('copy');
        var mensagem = copiado ? 'Texto copiado!' : 'Não foi possível copiar o texto.';
        console.log(mensagem);
    } catch (erro) {
        console.error('Erro ao copiar o texto: ', erro);
    }
    document.body.removeChild(inputTemporario);
});
