const calculator = {
  sum: (a, b) => {
    if(typeof a  === 'number' && typeof b  === 'number') {
      return a + b;
    }
    return 'Error';
  },
  mul: (a, b) => {
    if(typeof a === 'number' && typeof b === 'number') {
      return a*b;
    }
    return 'Error';
  },
  div: (a, b) => {
    if(typeof a === 'number' && typeof  b === 'number'){
      if (b === 0) {
        return "No hago cosas de derivadas";
      }
      return a / b;
    }
     return 'Error';
  }

};

module.exports = calculator;
