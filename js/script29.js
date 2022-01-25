let month = prompt('Введите месяц', '');
    switch (month.trim()) {
      case '12':
      case 'декабрь':
      case '1':
      case 'январь':
      case '2':
      case 'февраль':
        alert('Зима');
        break;
      case '3':
      case 'март':
      case '4':
      case 'апрель':
      case '5':
      case 'май':
        alert('Весна');
        break;
      case '6':
      case 'июнь':
      case '7':
      case 'июль':
      case '8':
      case 'август':
        alert('Лето');
        break;
      case '9':
      case 'сентябрь':
      case '10':
      case 'октябрь':
      case '11':
      case 'ноябрь':
        alert('Осень');
        break;
      default:
        alert('Введите название или номер месяца от 1 до 12 включительно')
        break;
    }