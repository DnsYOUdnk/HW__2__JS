//Задание 10
console.log('ЗАДАНИЕ 10')

day = prompt('Введите число от 1 до 365', '');

if (1 <= day && day <= 31) {
    console.log('Месяц 1: Январь');
} else if (32 <= day && day <= 59) {
    console.log('Месяц 2: Февраль');
} else if (60 <= day && day <= 90) {
    console.log('Месяц 3: Март');
} else if (91 <= day && day <= 120) {
    console.log('Месяц 4: Апрель');
} else if (121 <= day && day <= 151) {
    console.log('Месяц 5: Май');
} else if (152 <= day && day <= 181) {
    console.log('Месяц 6: Июнь');
} else if (182 <= day && day <= 212) {
    console.log('Месяц 7: Июль');
} else if (213 <= day && day <= 243) {
    console.log('Месяц 8: Август');
} else if (244 <= day && day <= 273) {
    console.log('Месяц 9: Сентябрь');
} else if (274 <= day && day <= 304) {
    console.log('Месяц 10: Октябрь');
} else if (305 <= day && day <= 334) {
    console.log('Месяц 11: Ноябрь');
} else if (335 <= day && day <= 365) {
    console.log('Месяц 12: Декабрь');
} else {
    alert('Введено слишком большое значение');
}

switch (true) {
    case ((1 <= day && day <= 59) || (335 <= day && day <= 365)): 
        console.log('Зима');
        break;

    case (60 <= day && day <= 151): 
        console.log('Весна');
        break;

    case (152 <= day && day <= 243): 
        console.log('Лето');
        break;

    case (244 <= day && day <= 334): 
        console.log('Осень');
        break;
    default :
        console.log('Введено значение больше 365');
        break;
}

