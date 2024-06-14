// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import { sum as fns, add } from './02-video';

//больше пяти импортов
import * as data from './02-video';

const sum = 10;

console.log(sum);
console.log(fns(1, 2));
console.log(add(2, 2));
console.log(data);
console.log(data.add(5, 5));

import value from './02-video';
import {add, sum} from './02-video'

console.log(value);

console.log(add(12,12));
console.log(sum(20,30));


