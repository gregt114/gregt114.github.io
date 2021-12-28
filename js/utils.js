
// f(str: string): boolean
// parse_function allows execution of arbitrary js code,
// so need to ensure the string is safe before creating a function.
function isSafe(str){
    // Banned strings from input
    let banned = [':', ';', '?', '!', '@', '#', '$', '%', '^', '&', '_', '=',
                '{', '}', '[', ']', '|', '~', '\`', '\"', '\'', '\\',
                'document', 'console', 'let', 'var', 'const', 'null', 'undefined',
                'script'];
    for(let i=0; i < banned.length; i++){
        if(str.includes(banned[i])){
            return false;
        }
    }
    return true;
}

// f(str: string, variable: string): g(x: num) => number
// str is a string representing the ID of HTML element
// variable is a string of length 1 containing the variable used
// Takes string from user and parses the string into a javascript function
function parse_function(str, variable){
    if(variable.length !== 1) {throw 'Variable string must be of length 1';}
    let text = document.getElementById(str).value;
    let f;
    if (! isSafe(text)){
        alert('The function entered is not a valid input');
        return;
    }
    return new Function(variable, `return ${text};`)
}


export { parse_function };