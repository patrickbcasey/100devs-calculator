class Calculator {
  constructor() {
      this.a
      this.b
      this.operator
  }

  add() {
      return +this.a + +this.b
  }
  subtract() {
      return +this.a - +this.b
  }
  multiply() {
      return +this.a * +this.b
  }
  divide() {
      return +this.a / +this.b
  }
}

document.querySelector('.number').addEventListener('click', number)
document.querySelector('#equals').addEventListener('click', )
document.querySelector('.operator').addEventListener('click', storeOperator)

function storeOperator() {
  calculator.a = document.querySelector('#output')
  calculator.operator = toString() // what did I click on
}

function equals() {
  calculator.b = document.querySelector('#output')
  document.querySelector('#output') = switch(calculator.operator) {
      case '+':
          calculator.add()
          break
      case '-':
          calculator.subtract()
          break
      case '*':
          calculator.multiply()
          break
      case '/':
          calculator.divide()
          break
  }
}

function number() {
  document.querySelector('#output') += 
}