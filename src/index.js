module.exports = function reverse (n) {
    let result = n.toString().split('');
    if (result[0] == "-") {
        result.shift();
    }
    result = result.reverse().join('');
    return +result;
}
