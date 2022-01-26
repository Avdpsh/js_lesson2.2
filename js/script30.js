let mushroomСolor = prompt('Введите цвет гриба (белый, желтый, красный, коричневый):', '');
mushroomСolor = mushroomСolor.toUpperCase().trim();
let skirt = prompt('Введите наличие юбки на грибе (есть/нет):', '');
skirt = skirt.toUpperCase().trim();

switch (mushroomСolor) {
    case 'БЕЛЫЙ':
        if ((skirt) == 'НЕТ')
            alert ('Вы нашли белый гриб');
        else if ((skirt) == 'ЕСТЬ')
                 alert ('Может это поганка какая?');
             else
                 alert('Неверный ввод наличия юбки');
        break;
    case 'КРАСНЫЙ':
        if ((skirt) == 'НЕТ')
            alert ('Может это подосиновик?');
        else if ((skirt) == 'ЕСТЬ')
                 alert ('А не мухомор ли это?');
             else
                 alert('Неверный ввод наличия юбки');
        break;
    case 'ЖЕЛТЫЙ':
    case 'КОРИЧНЕВЫЙ':
        alert('С грибами надо быть внимательными');
        break;
    default:
        alert('Неверный ввод данных');
        break;
}
