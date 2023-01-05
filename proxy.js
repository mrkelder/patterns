const formData = {
  name: '',
  age: null,
  isAdult: false,
};

const formDataProxy = new Proxy(formData, {
  get(obj, prop) {
    const value = obj[prop];
    return `\n${value} 😀`;
  },
  set(obj, prop, value) {
    switch (prop) {
      case 'name':
        obj.name = typeof value === 'string' ? value : 'No Name';
        break;
      case 'age':
        const isValidValue = !isNaN(+value);
        obj.age = isValidValue ? value : 0;
        obj.isAdult = !isValidValue ? false : value >= 18;
        break;
      default:
        console.log('This field is immutable');
        break;
    }
  },
});

formDataProxy.name = 123;
formDataProxy.age = '22d';

console.log(formDataProxy.name, formDataProxy.age, formDataProxy.isAdult);

formDataProxy.name = 'Jack';
formDataProxy.age = 12;

console.log(formDataProxy.name, formDataProxy.age, formDataProxy.isAdult);

formDataProxy.name = 'Jack';
formDataProxy.age = 18;

console.log(formDataProxy.name, formDataProxy.age, formDataProxy.isAdult);
