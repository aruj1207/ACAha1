function appendValue(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function deleteLast() {
  let result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}

function calculate() {
  let expression = document.getElementById('result').value;

  try {
    let result = evalExpression(expression);
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function evalExpression(expression) {
  // Trigonometric functions
  expression = expression.replace(/sin/g, 'Math.sin');
  expression = expression.replace(/cos/g, 'Math.cos');
  expression = expression.replace(/tan/g, 'Math.tan');

  // Logarithmic functions
  expression = expression.replace(/log/g, 'Math.log');
  expression = expression.replace(/exp/g, 'Math.exp');

  return eval(expression);
}

  