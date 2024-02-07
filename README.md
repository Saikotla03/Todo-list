**Todo-list**:
**Project Overview**:
This is a simple to-do list application. It allows users to manage their tasks by adding new tasks, marking tasks as done, and deleting tasks. The application is designed to provide a user-friendly interface for organizing tasks efficiently.
**Features**: 
Add new tasks to the list. - Mark tasks as completed. - Delete tasks from the list.  
**Technologies Used**: 
Python - Flask - HTML - CSS - JavaScript - SQLAlchemy

**Issue with Marking Tasks as Done:**
Currently, we're experiencing an issue with marking tasks as done. Despite implementing the functionality to mark tasks as done in our Flask routes and updating the database accordingly, the "mark done" feature is not working as expected. When users attempt to mark a task as done, the status of the task is not being updated in the database, and the task remains unchanged.

Potential Causes of the Issue:
There could be an issue with our database configuration or the way we're interacting with the database using SQLAlchemy.

**To resolve this issue**
Reviewed and debugged our Flask routes to ensure that the "mark done" functionality is implemented correctly.
Inspected the database to verify if tasks are being updated properly when the "mark done" action is triggered.
Added error handling to our Flask routes to identify any errors or exceptions occurring during the "mark done" process.
Tested the application thoroughly to identify any other potential issues or inconsistencies.
