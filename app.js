const inputBox = document.getElementById('inputBox')
const addBtn = document.getElementById('submit')
const cont = document.getElementById('task-todo-container')
const hide_item = document.getElementById('hideItems')
const itemcounter = document.getElementById('taskitemcounter')
const clearBtn = document.getElementById('clearBtn')
let num = 0
addBtn.addEventListener('click', addtasks)
document.addEventListener('keypress', e => {
    if (e.keyCode == 13) {
        addtasks()
    }
})
function addtasks() {
    if (inputBox.value == "") {
        alert('write something!!')
    }

    if (inputBox.value !== "") {
        createElement()
        inputBox.value = "";
        num++
        itemcounter.innerHTML = num
    }

}
function createElement() {
    const taskCont = document.createElement('div');
    taskCont.setAttribute('class', 'taskDiv');
    const itemCont = document.createElement('div');
    itemCont.setAttribute('class', 'itemDiv');
    const checkBoxinput = document.createElement('input');
    checkBoxinput.type = 'checkbox';
    const btnCont = document.createElement('div')
    btnCont.setAttribute('class', 'btnCont')
    const taskToDo = document.createElement('label');
    taskToDo.setAttribute('class', 'taskName');
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'remove');
    deleteBtn.innerHTML = 'remove'
    taskToDo.value = inputBox.value;
    taskToDo.innerHTML = taskToDo.value;
    cont.appendChild(taskCont);
    taskCont.appendChild(itemCont);
    taskCont.appendChild(btnCont);
    itemCont.appendChild(checkBoxinput);
    itemCont.appendChild(taskToDo);
    btnCont.appendChild(deleteBtn);
    let checked = 'false'
    checkBoxinput.addEventListener('click', () => {
        if (checked == 'false') {
            taskToDo.style.textDecoration = 'line-through'
            checked = 'true'
            num--
            itemcounter.innerHTML = num;
        }else {
            taskToDo.style.textDecoration = 'none'
            checked = 'false'
            num++
            itemcounter.innerHTML = num;
        }
    })
    deleteBtn.addEventListener('click', () => {
        taskCont.remove()
        inputBox.focus;
        if (num == 0) {
            num++
            itemcounter.innerHTML = num
        }else{
            num--
            itemcounter.innerHTML = num 
        } 
    })
    clearBtn.addEventListener('click', () => {
        taskCont.remove()
        num = 0
        itemcounter.innerHTML = num
    })
    
 
}