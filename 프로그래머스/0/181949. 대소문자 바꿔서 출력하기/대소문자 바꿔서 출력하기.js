const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    
    str = input[0];
    const strArr = str.split("");
    const isUpperCase = str => str === str.toUpperCase();
    const isLowerCase = str => str === str.toLowerCase();
    const toggleCase = (str) => {
        return strArr.map(item => {
            return isUpperCase(item) ? item.toLowerCase() : item.toUpperCase()
        }).join("")
    };
    

    const result = toggleCase(str);
    console.log(result)
});



