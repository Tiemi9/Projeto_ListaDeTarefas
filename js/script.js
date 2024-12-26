const form = document.querySelector('#toDo-form')
const taskTitleInput = document.querySelector("#task-title-input")
const taskButton = document.querySelector("#task-title-button")
const toDoListUl = document.querySelector("#toDO-list")

form.addEventListener('submit', (event) => {
    event.preventDefault() //para evitar o recarregamento da página que é a config. padrão
    
    const taskTitle = taskTitleInput.value

    if (taskTitle.length < 5) {
        alert('Sua tarefa precisa ter, pelo menos, 5 caractéres! 😉')
        return;
    }
    console.log(taskTitle)
})

// taskButton.addEventListener('click', () => {
//     console.log('clicou')
// }) 

