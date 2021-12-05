// Задание 1

let name = prompt('Введите ваше имя', 'Денис'),
    age = prompt('Введите ваш возраст', '28'),
    city = prompt('Введите город проживания', 'Минск'),
    phone = prompt('Введите ваш номер мобильного телефона', '+37529-306-83-68'),
    email = prompt('Введите вашу электронную почту', 'd.yudenko22@yandex.by'),
    company = prompt('Введите ваше место работы', 'НП ООО ЭНЕРГОПРИБОР');

    alert(`«Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.»`);
    document.write(`«Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.»`);


// Задание 2
console.log('ЗАДАНИЕ 2')

let yearBirth = 2021 - +age;
    console.log(yearBirth);
    confirm(`Кстати, теперь я знаю год твоего рождения;) ${yearBirth}год. Верно?`);
    document.write(` ${name} родился в ${yearBirth} году.`);
