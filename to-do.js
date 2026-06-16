let todoList = JSON.parse(localStorage.getItem('todos')) || [];

displayElements();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateelement = document.querySelector('#todo-date'); 

    let todoItem = inputElement.value;
    let todoDate = dateelement.value;

    // console.log(todoItem);
    todoList.push({item : todoItem, duedate : todoDate});
    localStorage.setItem('todos', JSON.stringify(todoList));

    inputElement.value = '';
    dateelement.value = '';
    displayElements();
}

function displayElements(){
    
    let containerElements = document.querySelector('.todo-container');
    
    let newHtml = ''

    for(let i = 0; i<todoList.length; i++){
        let {item, duedate} = todoList[i];
        newHtml += `
        <div class="todo-card">
        <input type="checkbox" id="checkb">
        <span>${item}</span>
        <span>${duedate}</span>
        <button class="delete-btn" onclick="todoList.splice(${i},1);
                                            localStorage.setItem('todos', JSON.stringify(todoList)); 
                                            displayElements();">Delete</button>
        </div>
        `;
    }

    containerElements.innerHTML = newHtml;
}