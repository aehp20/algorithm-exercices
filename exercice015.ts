let GLOBAL_CONTEXT = {};

function memoizeCalculation() {
  const store = new WeakMap();
  return function calculate(params: number) {
    const context = this || GLOBAL_CONTEXT;
    const { parameters, value } = store.get(context) ?? {};
    if (parameters !== params) {
      const storedValue = 2 * params;
      store.set(context, {
        parameters: params,
        value: storedValue,
      });
      console.log("Calculation");
      return storedValue;
    }
    console.log("Memoized calculation");
    return value;
  };
}

// const calculate = memoizeCalculation();

// console.log(calculate(10));
// console.log(calculate(10));
// console.log(calculate(10));
// console.log(calculate(20));
// console.log(calculate(20));

const object1 = {};

const calculate = memoizeCalculation.call(object1);

console.log(calculate(10));
console.log(calculate(10));
console.log(calculate(10));
console.log(calculate(20));
console.log(calculate(20));
