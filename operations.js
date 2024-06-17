document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.button[data-value]').forEach(button => {
        button.addEventListener('click', () => insert(button.getAttribute('data-value')));
    });

    document.getElementById('clean').addEventListener('click', clean);
    document.getElementById('back').addEventListener('click', back);
    document.getElementById('equals').addEventListener('click', calculate);
});

function insert(num) {
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function clean() {
    document.getElementById('result').innerHTML = "";
}

function back() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}

function calculate() {
    var result = document.getElementById('result').innerHTML;
    if (result) {
        document.getElementById('result').innerHTML = eval(result);
    } else {
        document.getElementById('result').innerHTML = "Nothing...";
    }
}
