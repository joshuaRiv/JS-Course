let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
// console.log({videojuegos});
// console.log(videojuegos[0]);

let arregloCosas = [
    true,
    123,
    "Fernando",
    3,
    function () {},
    ()=>{},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light', ['Dr. Willy', 'Woodman']]
];

console.log(arregloCosas);
let lastFromArr = arregloCosas[arregloCosas.length - 1];
console.log(lastFromArr);
let lastFromSub = lastFromArr.pop();
console.log(lastFromSub);
let lastFromSuperSub = lastFromSub.pop();
console.log(lastFromSuperSub);
console.log(arregloCosas);
