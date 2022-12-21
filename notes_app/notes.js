let addBtn = document.querySelector('#add')
let delBtn = document.querySelector('#rmv')
let container = document.querySelector('.note-holder')

let note = 
    '<div class="note">'+
        '<div class="header">'+
            '<div class="buttons">'+
                '<div class="note-btn edit">|||</div>'+
                '<div class="note-btn close">X</div>'+
            '</div>'+
        '</div>'+
        '<div class="section">'+
            '<textarea id ="text" name="text" id="text" cols="30" rows="10" class="text" placeholder="Enter note..." ></textarea>'+
        '</div>'+
    '</div>'




addBtn.addEventListener('click', addNote)
delBtn.addEventListener('click', remNotes)
document.addEventListener('click', deleteNote)
document.addEventListener('click', editNote)
// document.addEventListener('click', important)



function addNote() {
    var div = document.createElement('div')
    div.innerHTML = `${note}`
    container.classList.add('visible')
    delBtn.classList.remove('invisible')
    container.appendChild(div) 
    disableEdit()
}

function disableEdit() {
    let textNote = container.lastChild.lastChild.lastChild.lastChild
    textNote.onchange = () => {
        textNote.disabled = true
    }
}

function remNotes() {
    container.innerHTML = ""
    // delBtn.classList.add('invisible')
}

function deleteNote(event) {
    let element = event.target
    if(element.classList.contains("close")) {
        element.parentNode.parentNode.parentNode.parentNode.remove()
    }
}

function editNote(event) {
    let element = event.target
    if(element.classList.contains("edit")) {
        element.parentNode.parentNode.nextSibling.lastChild.disabled = false
        element.parentNode.parentNode.nextSibling.lastChild.focus()
    }
}



// function important(event) {
//     let element = event.target
//     if(element.classList.contains("important")) {
//         element.parentNode.parentNode.parentNode.parentNode.classList.add('important')
//     }
// }