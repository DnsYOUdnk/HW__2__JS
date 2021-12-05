// Задание 3
console.log('ЗАДАНИЕ 3')

let number1 = prompt('Введите число','2');
    number2 = prompt('Введите число','3'),
    number3 = prompt('Введите число','9'),
    number4 = prompt('Введите число','9'),
    number5 = prompt('Введите число','2'),
    number6 = prompt('Введите число','3');

let sum123 = +number1 + +number2 + +number3,
    sum456 = +number4 + +number5 + +number6;
    console.log(sum123);
    console.log(sum456);

if (sum123 == sum456) { 
        alert('Да'); 
        console.log('Да');
    }  else { 
        alert('Нет');
        console.log('Нет');
    }

