const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnAdd = $('.btn-add')
const formAdd = $('.form-add')
const btnSubmit = $('.btn-submit')
const listBook = $('.content')
const title = $('#title')
const author = $('#author')
const pages = $('#pages')
const checkbox = $('#cbx')

let myLib = []
let isCheck = false
let bookTitle = bookAuthor = bookPages = ''
let id = 0


function setLib(){
    myLib.push(setBook())
}

function setBook() {
    return {
        'title': bookTitle,
        'author': bookAuthor,
        'pages': bookPages,
        'isCheck': isCheck 
    }
}

function setLocalStorage() {
    const jsonLib = JSON.stringify(myLib)
    localStorage.setItem('library', jsonLib)
}

function getValueLib() {
    bookTitle = title.value
    bookAuthor = author.value
    bookPages = pages.value
    isCheck = checkbox.checked
}

function resetValueLib() {
    title.value = ''
    author.value = ''
    pages.value = ''
    checkbox.checked = false
}

function createBook() {
    const div = document.createElement('div')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const btnCheck = document.createElement('button')
    const btnRemove = document.createElement('button')
    div.classList.add('book')
    div.id = `book${id + 1}`
    listBook.appendChild(div)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(btnCheck)
    div.appendChild(btnRemove)
    id++
    p1.textContent = bookTitle
    p2.textContent = bookAuthor
    p3.textContent = bookPages
    if(isCheck){
        btnCheck.textContent = "Readed"
        btnCheck.classList.add('success')
    }
    else{
        btnCheck.textContent = "Haven't Read"
        btnCheck.classList.add('error')
    }
    btnRemove.classList.add('remove')
    btnRemove.id = `remove${id}`
    btnRemove.textContent = "Remove"
}

btnAdd.onclick = () => {
    formAdd.style.display = 'block'
}

function removeBook(id){
    listBook.removeChild($(`#book${id}`))
}

btnSubmit.onclick = (e) => {
    formAdd.style.display = 'none'
    e.preventDefault()
    getValueLib()
    createBook()
    resetValueLib()
    setLib()
    const getAllRemoveBtn = $$('.remove');
    getAllRemoveBtn.forEach((presentRemoveBtn,index) => presentRemoveBtn.onclick = () =>{
        removeBook(index+1)
        myLib = myLib.filter((_,i)=>i!==index)
        id--
        setLocalStorage()
    })
    setLocalStorage()
}