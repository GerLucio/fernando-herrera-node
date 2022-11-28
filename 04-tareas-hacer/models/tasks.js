const colors = require('colors');
const { showTask } = require('../helpers/messages');
const Task = require('./task');

class Tasks {
  list = [];

  get showList() {
    return this.list.map((task) => task.description);
  }

  constructor() {
    this.list = [];
  }

  createTask(description = '') {
    const task = new Task(description);

    this.list.push(task);
  }

  showTasks(status = 'all') {
    const tasks = this.list.filter((task) => {
      if (status === 'all') {
        return true;
      } else if (status === 'completed') {
        return task.completed;
      } else {
        return !task.completed;
      }
    });

    if (!tasks.length) {
      console.log('   Nothing to show\n');
      return;
    }

    tasks.forEach((task, index) => {
      const taskShowing = showTask(task, index);

      console.log(taskShowing);
    });

    console.log('\n');
  }

  deleteTask(id) {
    this.list = this.list.filter((task) => task.id !== id);
  }

  changeTasksStatus(tasks) {
    this.list.forEach((task) => {
      const markAsCompleted = tasks.find((item) => item.id === task.id);

      if (markAsCompleted && task.completed) {
        return;
      }

      task.completed = markAsCompleted ? new Date() : null;
    });
  }
}

module.exports = Tasks;
