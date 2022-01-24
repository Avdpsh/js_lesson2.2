let where = window.prompt('куда заглянем сегодня?', 'Введите слово.');

switch (where.toUpperCase()) {
  case 'ВКОНТАКТЕ':
  case 'ВК':
  case 'VKONTAKTE':
  case 'VK':
    window.location = "https://www.vk.com";
    break;
  case 'ТИКТОК':
  case 'TIKTOK':
    window.location = "https://www.tiktok.com";
    break;
  case 'ФЕЙСБУК':
  case 'FACEBOOK':
  case 'FB':
    window.location = "https://www.facebook.com";
    break;
  case 'ИНСТАГРАМ':
  case 'INSTAGRAM':
    window.location = "https://www.instagram.com";
    break;
  case 'ТВИТТЕР':
  case 'TWITTER':
  case 'TW':
    window.location = "https://www.twitter.com";
    break;
  default:
    window.location = "https://itiu.bsu.by";
    break;
}