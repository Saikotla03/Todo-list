from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

tasks = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_task', methods=['POST'])
def add_task():
    task_content = request.form['task']
    tasks.append(task_content)
    return jsonify({'message': 'Task added successfully'})

@app.route('/delete_task', methods=['POST'])
def delete_task():
    index = int(request.form['index'])
    del tasks[index]
    return jsonify({'message': 'Task deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
