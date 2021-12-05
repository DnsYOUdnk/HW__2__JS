// Задание 7
console.log('ЗАДАНИЕ 7')

let n = prompt('Введите число 0 до 59', '23');
    if ('' == n || n === null) {
        console.log('отменено');
        alert('Отменено');
    } else {
        if (0 <= n && n <= 14) {
            console.log('n попадает в первую четверть')
        } else if (15 <= n && n <= 29) {
            console.log('n попадает во вторую четверть')
        } else if (30 <= n && n <= 44) {
            console.log('n попадает в третью четверть')
        } else if (45 <= n && n <= 59) {
            console.log('n попадает в четвертую четверть')
        }  else {
            alert('Повторите');
        }
    }


// Задание 8
console.log('ЗАДАНИЕ 8')

let day = prompt('Введите число 1 до 31', '23');

    if (1 <= day && day <= 10) {
        console.log('day попадает в первую декаду месяца');
    } else if (11 <= day && day <= 20) {
        console.log('day попадает во вторую декаду месяца');
    } else if (21 <= day && day <= 31) {
        console.log('day попадает в третью декаду месяца');
    } else {
        alert('Отмена');
    }

