// Format Mobile Number

function formatNumber(number, format='xxx-xxx-xxxx') {
    var result = '',
        curIndex = 0;
    format.split('').map(char => {
        if(char.toLowerCase() === 'x') {
            result += number.charAt(curIndex);
            curIndex++;
        } else {
            result += char;
        }
    })
    return result;
}

console.log(formatNumber('9691443353'));
// 969-144-3353
console.log(formatNumber('9876543210', 'XXX-XXX-XX-XX'));
// 987-654-32-10