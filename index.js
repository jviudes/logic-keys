const operations = require('./operations');

function checkKey(object, key) {
  const subKeys = key.split('.');
  for (const subKey of subKeys) {
    if (typeof object[subKey] !== 'string' && !(object[subKey] instanceof Array)) {
      object = object[subKey];
    }
    if (!object) return false;
  }
  return true;
}

function checkOperation(result, key, operation, object = false) {
  const operationFunction = operations.get(operation);
  if (!operationFunction) throw new Error('ReferenceError: operation is not defined');
  if (typeof result === 'undefined') {
    return checkKey(object, key);
  }
  if (object) return operationFunction(result, checkKey(object, key));
  return operationFunction(result, key);
}

function evaluate(logicBlock, object) {
  const operation = logicBlock.shift();
  let resultLogic;
  for (const block of logicBlock) {
    if (block instanceof Array) {
      resultLogic = checkOperation(resultLogic, evaluate(block, object), operation);
    } else {
      resultLogic = checkOperation(resultLogic, block, operation, object);
    }
  }
  return resultLogic;
}

module.exports = evaluate;
