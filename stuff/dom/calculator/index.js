var keysBox = document.querySelector('.keys')

// ===== CREATING TEMPLATE =====

for (var i = 0; i < 15; i++) {
    var div = document.createElement('div')
    div.className = 'keys__num'
    switch (i) {
        case 0: div.innerText = '7'; break;
        case 1: div.innerText = '8'; break;
        case 2: div.innerText = '9'; break;
        case 3: div.innerText = 'X'; div.className = 'keys__operator'; break;
        case 4: div.innerText = '4'; break;
        case 5: div.innerText = '5'; break;
        case 6: div.innerText = '6'; break;
        case 7: div.innerText = '-'; div.className = 'keys__operator'; break;
        case 8: div.innerText = '1'; break;
        case 9: div.innerText = '2'; break;
        case 10: div.innerText = '3'; break;
        case 11: div.innerText = '+'; div.className = 'keys__operator'; break;
        case 12: div.innerText = '0'; break;
        case 13: div.innerText = '/'; div.className = 'keys__operator'; break;
        case 14: div.innerText = '='; div.className = 'keys__equal'; break;
    }
    keysBox.appendChild(div)
}

// ===== LOGICS =====

// Vars
var display = document.querySelector('.display')
var nums = document.querySelectorAll('.keys__num')
var operators = document.querySelectorAll('.keys__operator')
var equal = document.querySelector('.keys__equal')

// Add event listeners
for (var i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', function (e) {
        if (display.innerText === '0') display.innerText = e.target.innerText
        else display.innerText += e.target.innerText
    })
}

for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function (e) {
        var input = display.innerText.split(' ')
        if (input.length > 1) {
            var result = calculate(input[0], input[1], input[2])
            return display.innerText = result
        } else {
            display.innerText += e.target.innerText
        }
    })
}

equal.addEventListener('click', function () {
    var input = display.innerText.split('')
    var result = calculate(input[0], input[1], input[2])
    return display.innerText = result
})

function calculate(num1, operator, num2) {
    switch (operator) {
        case 'X':
            return num1 * num2
            break;
        case '/':
            return num1 / num2
            break;
        case '+':
            return Number(num1) + Number(num2)
            break;
        case '-':
            return num1 - num2
            break;
        default:
            break;
    }
}




