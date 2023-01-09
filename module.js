const localVariable = 'some-secret-inner-value';

function makeHeavyCalculation() {
  return Math.random() * 100 * localVariable.charCodeAt(4);
}

function getWeather() {
  return makeHeavyCalculation();
}

exports.getWeather = getWeather;
