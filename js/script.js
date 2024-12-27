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
    tasks.push({
        title:taskTitle,
        done: false,
    })

    console.log(tasks)

    //add tarefas no HTML
    // const li = document.createElement('li')
    // li.textContent = taskTitle

    // const checkbox = document.createElement('input')
    // checkbox.setAttribute('type', 'checkbox')

    // toDoListUl.appendChild(checkbox)
    // toDoListUl.appendChild(li)

    const li = document.createElement('li')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.addEventListener('change', (event) => {
        const liToToggle = event.target.parentElement
        const arrayToToggle = liToToggle.querySelector('span')
        const done = event.target.checked

        if (done) {
            arrayToToggle.style.textDecoration = 'line-through'
        } else {
            arrayToToggle.style.textDecoration = 'none'
        }

        tasks = tasks.map(t => {
            if (t.title === arrayToToggle.textContent) {
                return {
                    title: t.title,
                    done: !t.true
                }
            }
            return t
        })
        console.log(tasks)
    })

    const task = document.createElement('span')
    task.textContent = taskTitle
    
    const button = document.createElement('button')
    button.textContent = 'Remover'
    button.addEventListener('click', (event) => {
        const liToRemove = event.target.parentElement
        const arrayToRemove = liToRemove.querySelector('span').textContent
        
        tasks = tasks.filter(t => t.title !== arrayToRemove)

        toDoListUl.removeChild(liToRemove)

        console.log(tasks)
    })
    
    li.appendChild(checkbox)
    li.appendChild(task)
    li.appendChild(button)

    toDoListUl.appendChild(li)


})

// taskButton.addEventListener('click', () => {
//     console.log('clicou')
// }) 

