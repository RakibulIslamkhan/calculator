const calculatorButtons = document.querySelectorAll('#calculator-table button');
let calculation = '';

calculatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent.trim();
    switch (buttonValue) {
      case 'C':
        calculation = '';
        break;
      case '⌫':
        calculation = calculation.slice(0, -1);
        break;
      case '%':
        try {
          calculation = (eval(calculation) / 100).toString();
        } catch (error) {
          alert('Invalid calculation');
        }
        break;
      case '+/-':
        calculation = calculation.includes('-') ? calculation.slice(1) : '-' + calculation;
        break;
      case '=':
        try {
          calculation = eval(calculation).toString();
        } catch (error) {
          alert('Invalid calculation');
        }
        break;
      default:
        calculation += buttonValue;
        break;
    }
    document.querySelector('.display').value = calculation;
  });
});
