import { calculateArea } from "./third-task.js";
import { yearUntilRetirement } from "./first-task.js";
import addNumber from "./second-task.js";
import makeAjaxRequest from "./four-task.js";
// After Change ES6 And Simply/Clean Code

// 1
yearUntilRetirement({year: 1987, firstName: 'John'});


// 2.
console.log(addNumber(1,2,3,4,5,6,7));


// 3.
let phi = 3.14;
let power = 2;
let radius = 0;
radius = 21;
let area21 = calculateArea({radius: radius, power: 2, phi });
radius = 7;
let area7 = calculateArea({radius: radius, power: 2,phi });
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ' ${area7}`);

// 4.

makeAjaxRequest('www.google.com');