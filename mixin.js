const adobePhotoshopMixin = {
  saveImage(imageName) {
    console.log(`${this.computerId} has saved an image (${imageName}.png)`);
  },
};

const GPUMixin = {
  mineBitcoin: () => console.log('Getting rich'),
};

class Computer {
  static id = 1;

  constructor() {
    this.computerId = `computer_${Computer.id++}`;
  }
}

const macBook = new Computer();

Object.assign(macBook.__proto__, adobePhotoshopMixin);

macBook.saveImage('picturesque_sunset');

Object.assign(Computer.prototype, GPUMixin);

macBook.mineBitcoin();
