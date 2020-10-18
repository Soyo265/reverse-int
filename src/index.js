module.exports = function reverse (n) {
    let number = Math.abs(n);
    return parseInt(number
        .toString()
        .split('')
        .reverse()
        .join(''));
}
