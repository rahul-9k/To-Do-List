document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the task input value
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        // Create new task item
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            taskItem.classList.toggle('completed');
        });
        
        // Task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            taskItem.remove();
        });
        
        // Assemble task item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteBtn);
        
        // Add to task list
        document.getElementById('task-list').appendChild(taskItem);
        
        // Clear input
        taskInput.value = '';
    }
});