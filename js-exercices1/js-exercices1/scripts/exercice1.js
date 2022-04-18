'use strict';

// une liste pour des tests
const numbers = [2, 3, 5, 4, 10, 6];
numbers.forEach(element => console.log(element));

/********** EXERCICE 0 ***********************/
console.log(` *** EXERCICE 0 *** `);
/* computes the double of its parameter
 * @param x (number) a number
 * @return (number) the double of *x*
*/
const example = x => x * 2;
// tests
console.log(`example(10) : ${example(10)}`);
console.log(`example(21) : ${example(21)}`);



/* filter and keep the elements of *list* smaller than *max*
 * @param list (Array) list of elements
 * @param max (Any) upper bound filter value
 * @return (Array) list of elements of *list* smaller than *max*
*/
const example2 = (list, max) => list.filter( elt => elt < max );
// tests
console.log(`example2(numbers, 5) : ${example2(numbers, 5)}`);

/*********************************************/

/********** EXERCICE 1 ***********************/
console.log(` *** EXERCICE 1 *** `);
const persons = [ {name : 'timoleon', age : 12 }, {name : 'bilbo', age : 111 }, {name : 'frodo', age : 33 }];
console.log(persons[1]);
persons.forEach(p => console.log(`${p.name} a ${p.age} ans`));

const myForEach = function(liste,func) {
 for(let i in liste) {
 	func(liste[i]);
 	}
 };
myForEach(numbers,console.log);
myForEach(persons,p => {console.log(`${p.name} a ${p.age} ans`)});
/*********************************************/


/********** EXERCICE 2 ***********************/
console.log(` *** EXERCICE 2 *** `);
console.log(numbers.map(x => x*10));
const multiples = (n,l) => l.map(x => x*n);
console.log(multiples(10,numbers));
const multiples5 =(l) => l.map(x => x*5);
console.log(multiples5(numbers));
const multiplesFactory = factor => (l => multiples(factor,l));
console.log(multiplesFactory(100)(numbers));
/*********************************************/


/********** EXERCICE 3 ***********************/
console.log(` *** EXERCICE 3 *** `);


/*********************************************/


/********** EXERCICE 4 ***********************/
console.log(` *** EXERCICE 4 *** `);


/*********************************************/

/********** EXERCICE 5 ***********************/
console.log(` *** EXERCICE 5 *** `);


/*********************************************/

/********** EXERCICE 6 ***********************/
console.log(` *** EXERCICE 6 *** `);


/*********************************************/

/********** EXERCICE 7 ***********************/
console.log(` *** EXERCICE 7 *** `);

const lesInvites = ['Tim Oleon', 'Timo Leon', 'Bilbo', 'Frodo', 'Sam', 'Merry', 'Pippin']
const lesReponses = [
                  {nom : 'Sam', present : 'oui'},
                  {nom : 'Tim Oleon', present : 'non'},
                  {nom : 'Bilbo', present : 'oui'},
                  {nom : 'Frodo', present : 'oui'},
                  {nom : 'Timo Leon', present : 'non'},
                 ];

/*********************************************/

/********** EXERCICE 8 ***********************/
console.log(` *** EXERCICE 8 *** `);



/*********************************************/
