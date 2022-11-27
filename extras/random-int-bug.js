// https://github.com/sindresorhus/random-int/issues/7

import randomInteger from "random-int";

// min 10 & max 5. Shouldn't it throw an error?
const number = randomInteger(10, 5);

console.log(number);
