// Defino todas las referencias a los botones y elementos del DOM
const resultScreenCalculator = document.getElementById('result_screen_calculator')

// Botones numéricos
const btn_7 = document.getElementById('btn_7')
const btn_8 = document.getElementById('btn_8')
const btn_9 = document.getElementById('btn_9')
const btn_4 = document.getElementById('btn_4')
const btn_5 = document.getElementById('btn_5')
const btn_6 = document.getElementById('btn_6')
const btn_1 = document.getElementById('btn_1')
const btn_2 = document.getElementById('btn_2')
const btn_3 = document.getElementById('btn_3')
const btn_0 = document.getElementById('btn_0')

// Botones operacionales
const btn_add_operation = document.getElementById('add_operation')
const btn_substract_operation = document.getElementById('substract_operation')
const btn_multiply_operation = document.getElementById('multiply_operation')
const btn_clear_button = document.getElementById('clear_button')
const btn_equals_button = document.getElementById('equals_button')
const btn_division_operation = document.getElementById('division_operation')

// Referencias destinadas a las operaciones
let lastOperand = null;
let operationToDo = null;
let lastOperationWasEquals = null


// Eventos para el muestreo de números en pantalla (botones numéricos)
btn_7.addEventListener('click', function() {
    if (resultScreenCalculator.textContent == '0') {
        resultScreenCalculator.textContent = '7'
    } else {
        if (!lastOperationWasEquals) {
            let numsResultArray = resultScreenCalculator.textContent.split("")
            numsResultArray.push('7')
            resultScreenCalculator.textContent = numsResultArray.join("")
        } else {
            resultScreenCalculator.textContent = '7'
            lastOperationWasEquals = null
        }
        
    }
})

btn_8.addEventListener('click', function() {
    if (resultScreenCalculator.textContent == '0') {
        resultScreenCalculator.textContent = '8'
    } else {
        if (!lastOperationWasEquals) {
            let numsResultArray = resultScreenCalculator.textContent.split("")
            numsResultArray.push('8')
            resultScreenCalculator.textContent = numsResultArray.join("")
        } else {
            resultScreenCalculator.textContent = '8'
            lastOperationWasEquals = null
        }
    }
})

btn_9.addEventListener('click', function() {
    if (resultScreenCalculator.textContent == '0') {
        resultScreenCalculator.textContent = '9'
    } else {
        if (!lastOperationWasEquals) {
            let numsResultArray = resultScreenCalculator.textContent.split("")
            numsResultArray.push('9')
            resultScreenCalculator.textContent = numsResultArray.join("")
        } else {
            resultScreenCalculator.textContent = '9'
            lastOperationWasEquals = null
        }
    }
})

btn_4.addEventListener('click', function() {
    if (resultScreenCalculator.textContent == '0') {
        resultScreenCalculator.textContent = '4'
    } else {
        if (!lastOperationWasEquals) {
            let numsResultArray = resultScreenCalculator.textContent.split("")
            numsResultArray.push('4')
            resultScreenCalculator.textContent = numsResultArray.join("")
        } else {
            resultScreenCalculator.textContent = '4'
            lastOperationWasEquals = null
        }
    }
})

btn_5.addEventListener('click', function() {
    if (resultScreenCalculator.textContent == '0') {
        resultScreenCalculator.textContent = '5'
    } else {
        if (!lastOperationWasEquals) {
            let numsResultArray = resultScreenCalculator.textContent.split("")
            numsResultArray.push('5')
            resultScreenCalculator.textContent = numsResultArray.join("")
        } else {
            resultScreenCalculator.textContent = '5'
            lastOperationWasEquals = null
        }
    }
})

btn_6.addEventListener('click', function() {
    if (resultScreenCalculator.textContent == '0') {
        resultScreenCalculator.textContent = '6'
    } else {
        if (!lastOperationWasEquals) {
            let numsResultArray = resultScreenCalculator.textContent.split("")
            numsResultArray.push('6')
            resultScreenCalculator.textContent = numsResultArray.join("")
        } else {
            resultScreenCalculator.textContent = '6'
            lastOperationWasEquals = null
        }
    }
})

btn_1.addEventListener('click', function() {
    if (resultScreenCalculator.textContent == '0') {
        resultScreenCalculator.textContent = '1'
    } else {
        if (!lastOperationWasEquals) {
            let numsResultArray = resultScreenCalculator.textContent.split("")
            numsResultArray.push('1')
            resultScreenCalculator.textContent = numsResultArray.join("")
        } else {
            resultScreenCalculator.textContent = '1'
            lastOperationWasEquals = null
        }
    }
})

btn_2.addEventListener('click', function() {
    if (resultScreenCalculator.textContent == '0') {
        resultScreenCalculator.textContent = '2'
    } else {
        if (!lastOperationWasEquals) {
            let numsResultArray = resultScreenCalculator.textContent.split("")
            numsResultArray.push('2')
            resultScreenCalculator.textContent = numsResultArray.join("")
        } else {
            resultScreenCalculator.textContent = '2'
            lastOperationWasEquals = null
        }
    }
})

btn_3.addEventListener('click', function() {
    if (resultScreenCalculator.textContent == '0') {
        resultScreenCalculator.textContent = '3'
    } else {
        if (!lastOperationWasEquals) {
            let numsResultArray = resultScreenCalculator.textContent.split("")
            numsResultArray.push('3')
            resultScreenCalculator.textContent = numsResultArray.join("")
        } else {
            resultScreenCalculator.textContent = '3'
            lastOperationWasEquals = null
        }
    }
})

btn_0.addEventListener('click', function() {
    if (resultScreenCalculator.textContent == '0') {
        resultScreenCalculator.textContent = '0'
    } else {
        if (!lastOperationWasEquals) {
            let numsResultArray = resultScreenCalculator.textContent.split("")
            numsResultArray.push('0')
            resultScreenCalculator.textContent = numsResultArray.join("")
        } else {
            resultScreenCalculator.textContent = '0'
            lastOperationWasEquals = null
        }
    }
})


// Eventos para el muestreo de números en pantalla (botones operacionales)
btn_clear_button.addEventListener('click', function() {
    resultScreenCalculator.textContent = 0

    // Reasigno el valor de 'operationToDo' y 'lastOperand'
    operationToDo = null
    lastOperand = null
    lastOperationWasEquals = null
})

btn_equals_button.addEventListener('click', function() {

    if (!operationToDo) {
        // No aplico ningún cambio
    } else {
        if (operationToDo == 'division') {
            let secondOperand = resultScreenCalculator.textContent

            let result = parseInt(lastOperand) / parseInt(secondOperand)
            resultScreenCalculator.textContent = result

            // Reasigno el valor de 'operationToDo' y 'lastOperand'
            operationToDo = null
            lastOperand = result
            lastOperationWasEquals = true
            

        } else if (operationToDo == 'multiply') {
            let secondOperand = resultScreenCalculator.textContent

            let result = parseInt(lastOperand) * parseInt(secondOperand)
            resultScreenCalculator.textContent = result

            // Reasigno el valor de 'operationToDo' y 'lastOperand'
            operationToDo = null
            lastOperand = result
            lastOperationWasEquals = true

        } else if (operationToDo == 'substract') {
            let secondOperand = resultScreenCalculator.textContent

            let result = parseInt(lastOperand) - parseInt(secondOperand)
            resultScreenCalculator.textContent = result

            // Reasigno el valor de 'operationToDo' y 'lastOperand'
            operationToDo = null
            lastOperand = result
            lastOperationWasEquals = true

        } else if (operationToDo == 'add') {
            let secondOperand = resultScreenCalculator.textContent

            let result = parseInt(lastOperand) + parseInt(secondOperand)
            resultScreenCalculator.textContent = result

            // Reasigno el valor de 'operationToDo' y 'lastOperand'
            operationToDo = null
            lastOperand = result
            lastOperationWasEquals = true

        } else {
            alert('No se ha seleccionado ninguna operación.')
        }
    }
})

btn_division_operation.addEventListener('click', function() {

    if (resultScreenCalculator.textContent != "") {
        // Marco el valor actual en pantalla como pri mer operando
        lastOperand = resultScreenCalculator.textContent

        // Actualizo el valor de la variable que referencia a la operación
        operationToDo = 'division'

        // Limpio el contenido en pantalla
        resultScreenCalculator.textContent = ""
    } else {
        // Actualizo el valor de la variable que referencia a la operación
        operationToDo = 'division'
    }
    
})

btn_multiply_operation.addEventListener('click', function() {

    if (resultScreenCalculator.textContent != "") {
        // Marco el valor actual en pantalla como pri mer operando
        lastOperand = resultScreenCalculator.textContent

        // Actualizo el valor de la variable que referencia a la operación
        operationToDo = 'multiply'

        // Limpio el contenido en pantalla
        resultScreenCalculator.textContent = ""
    } else {
        // Actualizo el valor de la variable que referencia a la operación
        operationToDo = 'multiply'
    }
})

btn_substract_operation.addEventListener('click', function() {

    if (resultScreenCalculator.textContent != "") {
        // Marco el valor actual en pantalla como pri mer operando
        lastOperand = resultScreenCalculator.textContent

        // Actualizo el valor de la variable que referencia a la operación
        operationToDo = 'substract'

        // Limpio el contenido en pantalla
        resultScreenCalculator.textContent = ""
    } else {
        // Actualizo el valor de la variable que referencia a la operación
        operationToDo = 'substract'
    }
})

btn_add_operation.addEventListener('click', function() {

    if (resultScreenCalculator.textContent != "") {
        // Marco el valor actual en pantalla como pri mer operando
        lastOperand = resultScreenCalculator.textContent

        // Actualizo el valor de la variable que referencia a la operación
        operationToDo = 'add'

        // Limpio el contenido en pantalla
        resultScreenCalculator.textContent = ""
    } else {
        // Actualizo el valor de la variable que referencia a la operación
        operationToDo = 'add'
    }
})