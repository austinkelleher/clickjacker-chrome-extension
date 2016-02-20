var calcButtonListeners = function(calcButton) {
    if (calcButton.value === '=') {
        calcButton.addEventListener('click', function() {
            document.calculator.ans.value = eval(document.calculator.ans.value); // jshint ignore:line
        });
    } else {
        calcButton.addEventListener('click', function() {
            document.calculator.ans.value += calcButton.value;
        });
    }
};

window.onload = function() {
    var buttons = document.querySelectorAll('input[type=button]');

    for (var i = 0; i < buttons.length; i++) {
        calcButtonListeners(buttons[i]);
    }
};
