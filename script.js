const addBtn = document.querySelector('#push')
const input = document.querySelector('input')
const delBtn = document.querySelectorAll('.delete')
const tasks = document.querySelector('#tasks')

function addTodoToUI(newTodo){
    const div1 = document.createElement('div')
        const div2 = document.createElement('div')
        div1.classList.add('task')
        const span = document.createElement('span')
        span.id = 'taskname'
        span.textContent =`${newTodo}`
        div1.appendChild(span)
        div1.appendChild(div2)
        div2.classList.add('actions')
        const btn1 = document.createElement('button')
        const btn2 = document.createElement('button')
        const i1= document.createElement('i')
        const i2= document.createElement('i')
        btn1.classList.add('complete')
        btn2.classList.add('delete')
        i1.classList.add('fa-solid', 'fa-check')
        i2.classList.add('far', 'fa-trash-alt')
        btn1.appendChild(i1)
        btn2.appendChild(i2)
        div2.appendChild(btn1)
        div2.appendChild(btn2)
        tasks.appendChild(div1)
        btn2.addEventListener('click',e =>{
            const answer = confirm('Are you sure you want to delete')
            if(answer){
                e.currentTarget.parentNode.parentNode.remove()
            }
                
            
        })
        btn1.addEventListener('click',e=>{
            const answer = confirm('Are you sure you completed task')
            if(answer){
                e.currentTarget.parentNode.parentNode.classList.add('done')
            }
        })
        input.value = ''
}

const createList = function(){
    if(input.value.length === 0){
        console.log(input.value.length);
        alert('Pls write something')
    }else{
        addTodosToStorage(input.value)
        addTodoToUI(input.value)
    }
   
}

addBtn.addEventListener('click',createList)
document.addEventListener('keydown',e=>{
    if(e.key ==='Enter'){
        createList()
    }
})
window.addEventListener('DOMContentLoaded',loadAllTodosToUI)

function getTodosFromStorage(){
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos
}

function addTodosToStorage(newTodo){
    let todos = getTodosFromStorage()
    todos.push(newTodo)
    localStorage.setItem('todos',JSON.stringify(todos))
}

function loadAllTodosToUI(){
    let todos = getTodosFromStorage()
    todos.forEach(todo => {
        addTodoToUI(todo)
    })
}