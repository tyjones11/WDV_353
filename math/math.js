const sum = (a, b) => {
    return a + b}

const sub = (a, b) => {
    return a - b}

const mult = (a, b) => {
    return a * b}

const div = (a, b) => {
    return a/b }

const sqrt = (a) => {
    return a/4 }

const max = (a,b) => {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }}

module.exports = {
    sum,
    sub,
    mult,
    div,
    sqrt,
    max
}