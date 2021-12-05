// Задание 5
console.log('ЗАДАНИЕ 5')

let a = 10,
    b = 2;

let sumAB = a + b,
    difAB = a - b,
    mulAB = a * b,
    divAB = a / b;
console.log(sumAB, difAB, mulAB, divAB, 'Задание 5');

if (sumAB > 1) { sumAB = sumAB**2; }
console.log(sumAB, 'Задание 5');


// Задание 6
console.log('ЗАДАНИЕ 6')

if ((2 < a && a < 11) || (6 <= b && b < 14)) { 
    console.log('Верно');
} else {
    console.log('Неверно');
}