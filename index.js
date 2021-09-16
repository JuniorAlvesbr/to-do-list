const $formSearch = document.querySelector('.form-search')
const $formAddTodo = document.querySelector('.form-add-todo')
const $todosContainer = document.querySelector('.todos-container')

const todoList = ["Assistir Breakin Bad", "Planejar aulas", "Fazer exercícios fisicos"]

const addItemToTodoList =  event => {
    event.preventDefault()
    const todo = event.target.add.value.trim()
    
    todoList.push(todo)
    addTodoListInHTML(todoList)

    event.target.reset()
}

function removeItemList(event) {
    const todo = event.target.previousElementSibling.innerHTML

    const removeIndex = todoList.indexOf(todo)
    todoList.splice(removeIndex, 1)
    
    addTodoListInHTML(todoList)
}

function addTodoListInHTML(array) {
    const htmlList = array.map(item => (
            `<li class="list-group-item">
                <span>${item}</span>
                <i class="far fa-trash-alt delete"
                onclick="removeItemList(event)"></i>
            </li>`
        )
    )
    
    $todosContainer.innerHTML = htmlList.join(' ')
}

const formSearch = event => {
    event.preventDefault()
    const searchWord = $formSearch.search.value.toLowerCase()

    const listWordMatch = todoList.filter(item => item.toLowerCase().includes(searchWord))
    addTodoListInHTML(listWordMatch)

}

$formAddTodo.addEventListener('submit', addItemToTodoList)
$formSearch.addEventListener('input', formSearch)
addTodoListInHTML(todoList)