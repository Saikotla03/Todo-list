from flask import Flask, render_template, request, jsonify
from models import db, Task

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'

# Initialize the database
db.init_app(app)

# Create the database tables
with app.app_context():
    db.create_all()

@app.route('/')
def index():
    tasks = Task.query.all()
    return render_template('index.html', tasks=tasks)

@app.route('/add-task', methods=['POST'])
def add_task():
    description = request.form['description']
    new_task = Task(description=description)
    db.session.add(new_task)
    db.session.commit()
    return jsonify(success=True)

@app.route('/mark-done', methods=['POST'])
def mark_done():
    task_id = int(request.form['task_id'])
    task = Task.query.get(task_id)
    if task:
        task.done = True
        db.session.commit()
        return jsonify(success=True)
    else:
        return jsonify(success=False, error="Task not found"), 404

@app.route('/delete-task', methods=['POST'])
def delete_task():
    task_id = int(request.form['task_id'])
    task = Task.query.get(task_id)
    if task:
        db.session.delete(task)
        db.session.commit()
        return jsonify(success=True)
    else:
        return jsonify(success=False, error="Task not found"), 404

if __name__ == '__main__':
    app.run(debug=True)
