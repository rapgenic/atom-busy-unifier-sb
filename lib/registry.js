'use babel';

import EventEmitter from 'events';

export default class Registry extends EventEmitter {
  constructor() {
    super();
    this.tasks = [];
  }

  begin(id, description) {
    const task = {
      id,
      description
    };
    this.tasks.push(task);
    this.emit('begin', task);
  }

  end(id, success = true) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (-1 === index) {
      return;
    }

    const task = this.tasks.splice(index, 1)[0];
    this.emit('end', task);
  }
}
