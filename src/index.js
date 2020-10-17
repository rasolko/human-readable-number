module.exports = function toReadable(number) {
    let arr = number.toString().split('').reverse();
    let result = [];
    arr.map((item, index) => {
        if (index === 0 && arr[1] === '1') {
            if (item === '0') result.push('ten')
            else if (item === '1') result.push('eleven')
            else if (item === '2') result.push('twelve')
            else if (item === '3') result.push('thirteen')
            else if (item === '4') result.push('fourteen')
            else if (item === '5') result.push('fifteen')
            else if (item === '6') result.push('sixteen')
            else if (item === '7') result.push('seventeen')
            else if (item === '8') result.push('eighteen')
            else if (item === '9') result.push('nineteen')
        } else if (index === 0) {
            if (item === '0' && arr.length === 1) result.push('zero')
            else if (item === '1') result.push('one')
            else if (item === '2') result.push('two')
            else if (item === '3') result.push('three')
            else if (item === '4') result.push('four')
            else if (item === '5') result.push('five')
            else if (item === '6') result.push('six')
            else if (item === '7') result.push('seven')
            else if (item === '8') result.push('eight')
            else if (item === '9') result.push('nine')
        } else if (index === 1) {
            if (item === '2') result.push('twenty')
            else if (item === '3') result.push('thirty')
            else if (item === '4') result.push('forty')
            else if (item === '5') result.push('fifty')
            else if (item === '6') result.push('sixty')
            else if (item === '7') result.push('seventy')
            else if (item === '8') result.push('eighty')
            else if (item === '9') result.push('ninety')
        } else if (index === 2) {
            if (item === '1') result.push('one hundred')
            else if (item === '2') result.push('two hundred')
            else if (item === '3') result.push('three hundred')
            else if (item === '4') result.push('four hundred')
            else if (item === '5') result.push('five hundred')
            else if (item === '6') result.push('six hundred')
            else if (item === '7') result.push('seven hundred')
            else if (item === '8') result.push('eight hundred')
            else if (item === '9') result.push('nine hundred')
        } 
    })
    console.log(result);
    console.log(result.reverse());
    return result.join(' ');

}
