const displaySect = document.querySelector("#display")

class Calculator {
    constructor() {
        this.__firstNum;
        this.__secondNum;
        this.__operator = '';
        this.display = ''
    }

     addToDisplay(event) {
        if(event.target.textContent === "." && this.display.includes(".")) {
            displaySect.innerText = "Error"
        } else {
            this.display += event.target.textContent
            displaySect.innerText = this.display
        }
    }
    equals() {
        this.secondNum = parseFloat(this.display)
        const ans = this.useOperator(this.firstNum, this.secondNum)
        this.display = ans
        displaySect.innerText = this.display
        return ans
    }
    
    getOperator(event) {
        this.operator = event.target.textContent
        this.firstNum = parseFloat(this.display)
        this.display = ''
    }

    useOperator(a, b) {
        switch(this.operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if(b === 0) {
                    return "Divide by Zero Err"
                }
                return a / b;
            case '':
                return a
        }
    }

    get firstNum() {
        return this.__firstNum
    }

    set firstNum(num) {
        this.__firstNum = num
    }
    get secondNum() {
        return this.__secondNum
    }

    set secondNum(num) {
        this.__secondNum = num
    }

    get operator() {
        return this.__operator
    }

    set operator(op) {
        this.__operator = op
    }
}


const calc = new Calculator([0,0,1])

document.querySelector("#zero").addEventListener("click", function (event) {calc.addToDisplay(event)})
document.querySelector("#one").addEventListener("click", function (event) {calc.addToDisplay(event)})
document.querySelector("#two").addEventListener("click", function (event) {calc.addToDisplay(event)})
document.querySelector("#three").addEventListener("click", function (event) {calc.addToDisplay(event)})
document.querySelector("#four").addEventListener("click", function (event) {calc.addToDisplay(event)})
document.querySelector("#five").addEventListener("click", function (event) {calc.addToDisplay(event)})
document.querySelector("#six").addEventListener("click", function (event) {calc.addToDisplay(event)})
document.querySelector("#seven").addEventListener("click", function (event) {calc.addToDisplay(event)})
document.querySelector("#eight").addEventListener("click", function (event) {calc.addToDisplay(event)})
document.querySelector("#nine").addEventListener("click", function (event) {calc.addToDisplay(event)})
document.querySelector("#dot").addEventListener("click", function (event) {calc.addToDisplay(event)})

document.querySelector("#plus").addEventListener("click", function (event) {calc.getOperator(event)})
document.querySelector("#minus").addEventListener("click", function (event) {calc.getOperator(event)})
document.querySelector("#divide").addEventListener("click", function (event) {calc.getOperator(event)})
document.querySelector("#mult").addEventListener("click", function (event) {calc.getOperator(event)})

document.querySelector("#equal").addEventListener("click", function () {calc.equals()})
