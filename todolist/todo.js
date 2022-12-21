
let add = document.querySelector('#add')
let input = document.querySelector('#input')
let listItems = document.querySelector('#section')
let del = document.createElement('input')
del.setAttribute('type', 'submit')
del.innerText = 'DEL'


add.addEventListener('click', newItem)
input.addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        newItem()
    }
})


function newItem() {

    if (input.value === "") {
        alert('Add Something')
    } else addItem()
}

function addItem() {
    let item = document.createElement('div')
    let text = document.createElement('span')
    let del = document.createElement('button')

    text.innerText = input.value
    del.innerText = 'X'

    item.appendChild(text)
    item.appendChild(del)
    listItems.appendChild(item)

    item.classList.add('items')
    del.classList.add('btn')    
    text.classList.add('text')

    input.value = ""
    del.addEventListener('click', deleteItem)
    function deleteItem() {  
        listItems.removeChild(item)
    }
 }
