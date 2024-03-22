const marvel_heros = ["dr.Strange", "SpiderMan","IronMan"]
const dc_heros = ["BatMan", "HomeLander", "Superman"];

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const hhh = marvel_heros.concat(dc_heros)
// console.log(hhh);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]

const real_another_array = anotherArray.flat(Infinity)
//console.log(real_another_array);

console.log(dc_heros);