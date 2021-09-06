const $formAddTodo = document.querySelector('.form-add-todo')
const $todosContainer = document.querySelector('.todos-container')

const todoList = []

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

const createTodoList =  event => {
    if (event.key === "Enter") {
        event.preventDefault()

        const todo = $formAddTodo.add.value

        todoList.push(todo)
               
        addTodoListInHTML(todoList)
    }
}

$formAddTodo.addEventListener('keypress', createTodoList)