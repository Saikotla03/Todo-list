document.addEventListener('DOMContentLoaded', function() {
    const taskCheckboxes = document.querySelectorAll('.task-checkbox');
    taskCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const taskId = this.dataset.taskId;
            markTaskAsDone(taskId);
        });
    });
});

function markTaskAsDone(taskId) {
    fetch('/mark-done', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'task_id=' + encodeURIComponent(taskId),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            // Handle success (e.g., update UI)
            console.log('Task marked as done:', taskId);
        } else {
            console.error('Failed to mark task as done');
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
