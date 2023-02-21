const array = ["a", "b", "c", "d"];
const ob = array.slice(-4, -3);
console.log(ob);

//array.slice make a shallow copy of input array and returns a new array.
//if the start index is negative, => start+array.length.
// the same goes for end param.
