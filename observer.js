class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data) {
    this.observers.forEach((func) => func(data));
  }
}

class Store extends Observable {
  constructor() {
    super();
    this.data = {};
  }

  setValue(prop, value) {
    Reflect.set(this.data, prop, value);
    this.notify(this.data);
  }
}

const store = new Store();

store.subscribe((data) => {
  console.log(`Changed component to <button>${data.userName}</button>`);
});
store.subscribe((data) => {
  console.log(`Changed component to <p>${data.userName}</p>`);
});

store.setValue('userName', 'Jack');
