const day = require('birthday-calculator');

const date = new Date('2004,10,21');
const result = day.getDayWhenBorn(date);
console.log(result);