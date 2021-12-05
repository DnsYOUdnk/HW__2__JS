// Задание 9
console.log('ЗАДАНИЕ 9')

let dayYear = prompt('Введите количество дней', '');

let year = dayYear / 365,
    month = year * 12,
    week = dayYear / 7,
    hours = dayYear * 24,
    minute = hours * 60,
    second = minute * 60;

if (year < 1) {
    console.log('Меньше года');
} else {
    console.log(year + ' год');
}

if (month < 1) {
    console.log('Меньше месяца');
} else {
    console.log(month + ' месяц');
}

if (week < 1) {
    console.log('Меньше недели');
} else {
    console.log(week + ' недель');
}

console.log(hours + ' час');
console.log(minute + ' минут');
console.log(second + ' секунд');