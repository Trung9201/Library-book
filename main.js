const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnAdd = $('.btn-add')
const formAdd = $('.form-add')
const btnSubmit = $('.btn-submit')

btnAdd.onclick = () => {
    formAdd.style.display = 'block'
}

btnSubmit.onclick = () => {
    formAdd.style.display = 'none'
}