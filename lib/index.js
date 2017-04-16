'use babel';

import Registry from './registry';

export default {
  activate() {
    this.registry = new Registry();

    this.registry.on('begin', ::this.beginTask);
    this.registry.on('end', ::this.endTask);
  },

  consumeSignal(registry) {
    this.provider = registry.create();
  },

  provideRegistry() {
    return this.registry;
  },

  beginTask(task) {
    this.provider.add(task.description);
  },

  endTask(task) {
    this.provider.remove(task.description);
  }
};
