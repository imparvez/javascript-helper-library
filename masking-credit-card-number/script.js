// Masking Credit Card Number

function maskCC(number) {
    // Returning undefined when the pattern isn't matched
    // 1. number should be a string, for now.
    // 2. number should be of length 16.
    // 3. number each character should represents a number itself.
    if(!(
        typeof number === 'string'
        && number.length === 16
        && number.split('').map(Number).every(n => !isNaN(n))
    )) {
        return;
    }

    return [
        ...new Array(3).fill('****'),
        number.slice(-4),
    ].join('-')
}

console.log(maskCC('1234567890123456'));
// ****-****-****-3456
console.log(maskCC('aaaaaaaaaaaaaaaa'));
// undefined