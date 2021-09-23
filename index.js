const $formSearch = document.querySelector('.form-search')
const $formAddTodo = document.querySelector('.form-add-todo')
const $todosContainer = document.querySelector('.todos-container')

const todoList = ["Assistir Breakin Bad", "Planejar aulas", "Fazer exercícios fisicos"]

function addTodoListInHTML(array) {
    const htmlList = array.map(item => (
        `<li class="list-group-item">
            <span>${item}</span>
            <i class="far fa-trash-alt delete" data-trash="delete"></i>
        </li>`
    )
    )

    $todosContainer.innerHTML = htmlList.join(' ')
}

const addItemToTodoList = event => {
    event.preventDefault()
    const todo = event.target.add.value.trim()

    todoList.push(todo)
    addTodoListInHTML(todoList)

    event.target.reset()
}

function removeItemToTodoList(event) {
    const eventTarget = event.target

    if (eventTarget.dataset.trash) {

        const todo = eventTarget.previousElementSibling.innerHTML

        const removeIndex = todoList.indexOf(todo)
        todoList.splice(removeIndex, 1)

        addTodoListInHTML(todoList)
    }
}

const searchItemInTodoList = event => {
    event.preventDefault()
    const searchTerm = $formSearch.search.value.toLowerCase()

    const listWordMatch = todoList.filter(item => item.toLowerCase().includes(searchTerm))
    addTodoListInHTML(listWordMatch)
}

$formAddTodo.addEventListener('submit', addItemToTodoList)
$formSearch.addEventListener('input', searchItemInTodoList)
$todosContainer.addEventListener('click', removeItemToTodoList)

addTodoListInHTML(todoList)