let mushroomСolor = prompt('Введите цвет гриба (белый, желтый, красный, коричневый):', '')
let skirt = prompt('Введите наличие юбки на грибе (есть/нет):', '');

    switch (mushroomСolor.toUpperCase().trim()) {
      case 'БЕЛЫЙ':
        if (skirt.trim().toUpperCase() == 'НЕТ')
          alert('Вы нашли белый гриб');
        else {
          alert('Введены неверные данные: Проверьте наличие юбки');
        }
        break;
      case 'КРАСНЫЙ':
        if (skirt.trim().toUpperCase() == 'ЕСТЬ')
          alert('А не мухомор ли это');
        else if (skirt.trim().toUpperCase() == 'НЕТ')
          alert('может это подосиновик');
        else {
          alert('Введены неверные данные: Проверьте наличие юбки');
        }
        break;
      case 'ЖЕЛТЫЙ':
      case 'КОРИЧНЕВЫЙ':
        alert('С грибами надо быть внимательными');
        break;
      default:
        alert('Введите корректные данные');
        break;
    }