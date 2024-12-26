const form = document.querySelector('#toDo-form')
const taskTitleInput = document.querySelector("#task-title-input")
const taskButton = document.querySelector("#task-title-button")
const toDoListUl = document.querySelector("#toDo-list")

let tasks = []

form.addEventListener('submit', (event) => {
    event.preventDefault() //para evitar o recarregamento da página que é a config. padrão
    
    const taskTitle = taskTitleInput.value

    if (taskTitle.length < 5) {
        alert('Sua tarefa precisa ter, pelo menos, 5 caractéres! 😉')
        return
    }

    //add tarefas no array
    tasks.push(taskTitle)

    //add tarefas no HTML
    const li = document.createElement('li')
    li.textContent = taskTitle

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')

    toDoListUl.appendChild(checkbox)
    toDoListUl.appendChild(li)


    

})

// taskButton.addEventListener('click', () => {
//     console.log('clicou')
// }) 

