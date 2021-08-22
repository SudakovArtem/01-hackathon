import { Module } from '@/core/module';
import { random } from '@/utils';

export class MessageModule extends Module {
  #messages;
  constructor(type, text) {
    super(type, text);
    this.#messages = [
      {
        mess: 'Определить свою цель – это как найти Полярную звезду. Она станет для вас ориентиром, если вы ненароком собьетесь с пути.',
        cite: 'Маршалл Димок',
      },
      {
        mess: 'С человеком хорошим не бывает ничего плохого ни при жизни, ни после смерти.',
        cite: 'Сократ',
      },
      {
        mess: 'Суть жизни – найти самого себя.',
        cite: 'Мухаммад Икбал',
      },
      {
        mess: 'Смерть – это стрела, пущенная в тебя, а жизнь – то мгновенье, что она до тебя летит.',
        cite: 'Аль-Хусри',
      },
      {
        mess: 'В диалоге с жизнью важен не ее вопрос, а наш ответ.',
        cite: 'Марина Цветаева',
      },
      {
        mess: 'Что бы там ни было, никогда не принимайте жизнь слишком всерьез – вам из нее живьем все равно не выбраться.',
        cite: 'Кин Хаббард',
      },
      {
        mess: 'Жизнь человека имеет смысл лишь в той степени, насколько она помогает сделать жизни других людей красивее и благороднее. Жизнь священна. Это наивысшая ценность, которой подчинены все прочие ценности.',
        cite: 'Альберт Эйнштейн',
      },
      {
        mess: 'Жизнь как пьеса в театре: важно не то, сколько она длится, а насколько хорошо сыграна.',
        cite: 'Сенека',
      },
      {
        mess: 'Плохо живут те, которые всю жизнь лишь собираются жить.',
        cite: 'Публий Сир',
      },
      {
        mess: 'Жизнь – это то, что проходит мимо нас, пока мы строим планы.',
        cite: 'Джон Леннон',
      },
    ];
  }

  #randomMessage() {
    return this.#messages[random(0, this.#messages.length - 1)];
  }

  randomColor() {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(random(0, 255));
    }
    return arr.join(', ');
  }

  #renderMessage() {
    const message = this.#randomMessage();
    const blockquote = document.createElement('blockquote');
    blockquote.id = 'message';
    blockquote.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    max-width: ${random(200, 1000)}px;
    width: 100%;
    padding: 25px;
    border-radius: 20px;
    font-size: 25px;
    background-color: rgb(${this.randomColor()});
    `;
    const paragraph = document.createElement('p');
    paragraph.textContent = message.mess;
    paragraph.style.marginBottom = '20px';
    const cite = document.createElement('cite');
    cite.textContent = message.cite;

    blockquote.append(paragraph, cite);
    document.body.append(blockquote);
  }

  trigger() {
    this.#renderMessage();
    const message = document.body.querySelector('#message')
    setTimeout(() => {
      if (message) {
        message.remove()
      }
    }, 8000);
  }
}
