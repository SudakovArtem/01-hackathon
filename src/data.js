const messages = [
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
]

const pianoKeys = [
  {key: 'w', note: 'C', text: 'C'},
  {key: 'b', note: 'Cs', text: 'C#'},
  {key: 'w', note: 'D', text: 'D'},
  {key: 'b', note: 'Ds', text: 'D#'},
  {key: 'w', note: 'E', text: 'E'},
  {key: 'w', note: 'F', text: 'F'},
  {key: 'b', note: 'Fs', text: 'F#'},
  {key: 'w', note: 'G', text: 'G'},
  {key: 'b', note: 'Gs', text: 'G#'},
  {key: 'w', note: 'A', text: 'A'},
  {key: 'b', note: 'As', text: 'A#'},
  {key: 'w', note: 'B', text: 'B'},
]

const pianoAudio = [
  {id: 'C', src: 'https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/C.wav'},
  {id: 'Cs', src: 'https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Cs.wav'},
  {id: 'D', src: 'https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/D.wav'},
  {id: 'Ds', src: 'https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Ds.wav'},
  {id: 'E', src: 'https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/E.wav'},
  {id: 'F', src: 'https://res.cloudinary.com/dspfsamgq/video/upload/v1584002890/piano/F.wav'},
  {id: 'Fs', src: 'https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Fs.wav'},
  {id: 'G', src: 'https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/G.wav'},
  {id: 'Gs', src: 'https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/Gs.wav'},
  {id: 'A', src: 'https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/A.wav'},
  {id: 'As', src: 'https://res.cloudinary.com/dspfsamgq/video/upload/v1584002888/piano/As.wav'},
  {id: 'B', src: 'https://res.cloudinary.com/dspfsamgq/video/upload/v1584002889/piano/B.wav'}
]

const sounds = [
  'src/audio/sound-1.mp3',
  'src/audio/sound-2.mp3',
  'src/audio/sound-3.mp3',
  'src/audio/sound-4.mp3',
  'src/audio/sound-5.mp3',
  'src/audio/sound-6.mp3',
  'src/audio/sound-7.mp3',
  'src/audio/sound-8.mp3',
  'src/audio/sound-9.mp3',
  'src/audio/sound-10.mp3',
]

const messageBackgrounds = [
    '#F08080', '#7FFF00', '#FFB6C1', '#FFFF00', '#7FFFD4', '#DA70D6', '#FFDEAD', '#F5F5DC'
]

export {messages, pianoKeys, pianoAudio, sounds, messageBackgrounds}
