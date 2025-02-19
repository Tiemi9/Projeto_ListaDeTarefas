const form = document.querySelector('#toDo-form')
const taskTitleInput = document.querySelector("#task-title-input")
const taskButton = document.querySelector("#task-title-button")
const toDoListUl = document.querySelector("#toDo-list")

let tasks = []

function renderTask(taskTitle, done = false) {
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
                    done: !t.done
                }
            }
            return t
        })

        localStorage.setItem('tasks', JSON.stringify(tasks))
    })

    checkbox.checked = done

    const task = document.createElement('span')
    task.textContent = taskTitle

    if (done) {
        task.style.textDecoration = 'line-through'
    }
    
    const button = document.createElement('button')
    button.textContent = 'Remover'
    button.addEventListener('click', (event) => {
        const liToRemove = event.target.parentElement
        const arrayToRemove = liToRemove.querySelector('span').textContent
        
        tasks = tasks.filter(t => t.title !== arrayToRemove)

        toDoListUl.removeChild(liToRemove)

        localStorage.setItem('tasks', JSON.stringify(tasks))
    })
    
    li.appendChild(checkbox)
    li.appendChild(task)
    li.appendChild(button)

    toDoListUl.appendChild(li)
}

window.onload = () => {
    const tasksOnLocalStorage = localStorage.getItem('tasks')
    
    if (!tasksOnLocalStorage) return

    tasks = JSON.parse(tasksOnLocalStorage)

    tasks.forEach(t => {
        renderTask(t.title, t.done)
    });
}

taskTitleInput.addEventListener('focus', () => {
    taskTitleInput.setAttribute('placeholder', '')
})
taskTitleInput.addEventListener('blur', () => {
    taskTitleInput.setAttribute('placeholder', 'Informe a sua tarefa...')
})


form.addEventListener('submit', (event) => {
    event.preventDefault() //para evitar o recarregamento da página que é a config. padrão
    
    const taskTitle = taskTitleInput.value

    if (taskTitle.length < 5) {
        alert('Sua tarefa precisa ter, pelo menos, 5 caractéres! 😉')
        taskTitleInput.value = ''
        return
    } else {
        taskTitleInput.value = ''
    }
    
    //add tarefas no array
    tasks.push({
        title:taskTitle,
        done: false,
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))

    //add tarefas no HTML
    // const li = document.createElement('li')
    // li.textContent = taskTitle

    // const checkbox = document.createElement('input')
    // checkbox.setAttribute('type', 'checkbox')

    // toDoListUl.appendChild(checkbox)
    // toDoListUl.appendChild(li)

    renderTask(taskTitle)
   
})