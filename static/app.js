$(document).ready(function() {
    $('#todo-form').submit(function(event) {
        event.preventDefault();
        var taskInput = $('#todo-input').val();
        $.ajax({
            type: 'POST',
            url: '/add_task',
            data: {task: taskInput},
            success: function(response) {
                console.log(response);
                $('#todo-list').append('<li>' + taskInput + '<button class="delete-btn">Delete</button></li>');
                $('#todo-input').val('');
            },
            error: function(error) {
                console.log(error);
            }
        });
    });

    $(document).on('click', '.delete-btn', function() {
        var index = $(this).parent().index();
        $.ajax({
            type: 'POST',
            url: '/delete_task',
            data: {index: index},
            success: function(response) {
                console.log(response);
                $('#todo-list').children().eq(index).remove();
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
