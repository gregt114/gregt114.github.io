
import  {parse_function} from './utils.js';
import  {integrate} from './math.js';

// Get user input
let submit = document.getElementById('submit');
submit.onclick = function() {
    let func = parse_function('func-input', 'x');
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;
    let n = document.getElementById('samples').value;
    let method = document.getElementById('method').value;
    let result = document.getElementById('result')

    result.value = " " + integrate(func, Number(start), Number(end), Number(n), method);

};

