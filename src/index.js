const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const space = '**********';
    const words = expr.split(space);
    const resWords = [];
    words.forEach((item, i) => {
        resWords.push([]);
        for (let j = 0; j < item.length; j = j + 10) {
            let char = item.slice(j, j + 10);
            for (let k = 0; k <= 5; k++) {
                char = char.replace('00', '');
                char = char.replace('10', '.');
                char = char.replace('11', '-');
            }
            resWords[i].push(MORSE_TABLE[char]);
        }
        resWords.splice(i, 1, resWords[i].join(''))
    })
    return resWords.join(' ');
}

module.exports = {
    decode
}