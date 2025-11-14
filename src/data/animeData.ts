export interface Anime {
  id: number;
  title: string;
  image: string;
  rating: number;
  genre: string[];
  year: number;
  episodes: number;
  status: 'ongoing' | 'completed' | 'upcoming';
  studio: string;
  description: string;
  characters?: number[];
}

export interface Character {
  id: number;
  name: string;
  image: string;
  role: string;
  anime: number[];
  description: string;
  voiceActor: string;
}

export const animeDatabase: Anime[] = [
  {
    id: 1,
    title: 'Небесні воїни',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/427f73f8-a7a7-472f-8206-2da76182a97a.jpg',
    rating: 9.2,
    genre: ['Екшн', 'Фентезі', 'Пригоди'],
    year: 2024,
    episodes: 24,
    status: 'ongoing',
    studio: 'SkyWorks Animation',
    description: 'Епічна історія про групу воїнів, які борються за захист свого світу від темних сил. Кожен герой володіє унікальними здібностями та стикається з власними демонами.',
    characters: [1, 2, 3]
  },
  {
    id: 2,
    title: 'Магічний світанок',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/e1f48676-9ad2-4573-8cc6-b37954ce17d8.jpg',
    rating: 8.7,
    genre: ['Фентезі', 'Романтика', 'Драма'],
    year: 2023,
    episodes: 12,
    status: 'completed',
    studio: 'DreamLight Studios',
    description: 'Романтична історія про магію, яка пробуджується з першими променями сонця. Молода чарівниця відкриває для себе справжню силу кохання.',
    characters: [2, 4]
  },
  {
    id: 3,
    title: 'Легенда про героя',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/69ef0d8c-506e-4c56-abd4-128e338744e6.jpg',
    rating: 9.5,
    genre: ['Екшн', 'Пригоди', 'Комедія'],
    year: 2024,
    episodes: 36,
    status: 'ongoing',
    studio: 'HeroTales Production',
    description: 'Веселі пригоди героя, який намагається врятувати світ, але постійно потрапляє у кумедні ситуації. Найкраще аніме року!',
    characters: [1, 5, 6]
  },
  {
    id: 4,
    title: 'Темна сторона місяця',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/427f73f8-a7a7-472f-8206-2da76182a97a.jpg',
    rating: 8.9,
    genre: ['Драма', 'Жахи', 'Фентезі'],
    year: 2023,
    episodes: 13,
    status: 'completed',
    studio: 'Moonlight Pictures',
    description: 'Темна та атмосферна історія про таємниці, які ховає нічне небо. Що станеться, коли межа між світами зникне?',
    characters: [3, 7]
  },
  {
    id: 5,
    title: 'Школа магії',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/e1f48676-9ad2-4573-8cc6-b37954ce17d8.jpg',
    rating: 8.4,
    genre: ['Комедія', 'Романтика', 'Фентезі'],
    year: 2024,
    episodes: 24,
    status: 'ongoing',
    studio: 'Magic Academy Films',
    description: 'Життя учнів престижної школи магії сповнене не лише навчання, а й романтики, дружби та незабутніх пригод.',
    characters: [4, 5, 8]
  },
  {
    id: 6,
    title: 'Самурай без меча',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/69ef0d8c-506e-4c56-abd4-128e338744e6.jpg',
    rating: 9.1,
    genre: ['Екшн', 'Драма', 'Пригоди'],
    year: 2023,
    episodes: 26,
    status: 'completed',
    studio: 'Bushido Animation',
    description: 'Історія самурая, який втратив свій меч, але знайшов щось набагато цінніше. Філософське та захоплююче аніме.',
    characters: [1, 6]
  },
  {
    id: 7,
    title: 'Космічні мандрівники',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/427f73f8-a7a7-472f-8206-2da76182a97a.jpg',
    rating: 8.8,
    genre: ['Пригоди', 'Фантастика', 'Комедія'],
    year: 2024,
    episodes: 12,
    status: 'ongoing',
    studio: 'Stellar Works',
    description: 'Команда мандрівників досліджує далекі галактики та зустрічає незвичайних інопланетян. Космічні пригоди починаються!',
    characters: [5, 7, 8]
  },
  {
    id: 8,
    title: 'Драконячий клан',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/69ef0d8c-506e-4c56-abd4-128e338744e6.jpg',
    rating: 9.3,
    genre: ['Фентезі', 'Екшн', 'Драма'],
    year: 2023,
    episodes: 24,
    status: 'completed',
    studio: 'Dragon Tales Inc',
    description: 'Епічна сага про клан воїнів-драконів, які охороняють древні артефакти. Битви, магія та драма на найвищому рівні.',
    characters: [1, 2, 3]
  },
  {
    id: 9,
    title: 'Весняне кохання',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/e1f48676-9ad2-4573-8cc6-b37954ce17d8.jpg',
    rating: 8.2,
    genre: ['Романтика', 'Драма', 'Комедія'],
    year: 2024,
    episodes: 13,
    status: 'ongoing',
    studio: 'SpringHeart Studios',
    description: 'Романтична історія двох людей, які зустрілися навесні. Чи зможе їхнє кохання витримати випробування долі?',
    characters: [4, 6]
  },
  {
    id: 10,
    title: 'Підземне місто',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/427f73f8-a7a7-472f-8206-2da76182a97a.jpg',
    rating: 8.6,
    genre: ['Пригоди', 'Жахи', 'Фентезі'],
    year: 2023,
    episodes: 12,
    status: 'completed',
    studio: 'Underground Films',
    description: 'Дослідники виявляють древнє підземне місто, сповнене таємниць та небезпек. Що чекає їх у темряві?',
    characters: [3, 7, 8]
  },
  {
    id: 11,
    title: 'Міська легенда',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/69ef0d8c-506e-4c56-abd4-128e338744e6.jpg',
    rating: 8.5,
    genre: ['Жахи', 'Драма', 'Містика'],
    year: 2024,
    episodes: 24,
    status: 'ongoing',
    studio: 'Urban Myths Animation',
    description: 'Міські легенди оживають у цьому містичному аніме. Хто наважиться дізнатися правду?',
    characters: [2, 5]
  },
  {
    id: 12,
    title: 'Небесні піраті',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/e1f48676-9ad2-4573-8cc6-b37954ce17d8.jpg',
    rating: 9.0,
    genre: ['Пригоди', 'Екшн', 'Фентезі'],
    year: 2023,
    episodes: 36,
    status: 'completed',
    studio: 'SkyPirates Studio',
    description: 'Пірати мандрують небесами на летючих кораблях у пошуках найбільшого скарбу всіх часів.',
    characters: [1, 5, 6, 7]
  }
];

export const charactersDatabase: Character[] = [
  {
    id: 1,
    name: 'Кайто Такаші',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/625a9568-b61d-4f2a-9bd8-0b213f994619.jpg',
    role: 'Головний герой',
    anime: [1, 3, 6, 8, 12],
    description: 'Відважний воїн з таємничим минулим. Володіє унікальною здатністю контролювати елементи.',
    voiceActor: 'Такахіро Сакурай'
  },
  {
    id: 2,
    name: 'Аяно Міцукі',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/fad2ef88-5d08-4bcd-b4bc-36dfb631d259.jpg',
    role: 'Чарівниця',
    anime: [1, 2, 8, 11],
    description: 'Талановита магиня, яка прагне стати найсильнішою в світі. Її магія світла рятує друзів у скрутні моменти.',
    voiceActor: 'Кана Ханадзава'
  },
  {
    id: 3,
    name: 'Рен Куросакі',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/625a9568-b61d-4f2a-9bd8-0b213f994619.jpg',
    role: 'Антигерой',
    anime: [1, 4, 8, 10],
    description: 'Загадковий воїн з темним минулим. Його справжні наміри залишаються таємницею.',
    voiceActor: 'Юкі Каджі'
  },
  {
    id: 4,
    name: 'Сакура Ямамото',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/28f6e65a-4c90-4a25-aba9-4d8ca05f46e7.jpg',
    role: 'Учениця',
    anime: [2, 5, 9],
    description: 'Весела та енергійна студентка школи магії. Мріє стати найкращою чарівницею покоління.',
    voiceActor: 'Айанє Сакура'
  },
  {
    id: 5,
    name: 'Хіроші Танака',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/625a9568-b61d-4f2a-9bd8-0b213f994619.jpg',
    role: 'Комік',
    anime: [3, 5, 7, 11, 12],
    description: 'Комічний персонаж, який завжди піднімає настрій команді. Але за його усмішкою ховається справжня сила.',
    voiceActor: 'Томокадзу Суґіта'
  },
  {
    id: 6,
    name: 'Юкі Шімідзу',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/28f6e65a-4c90-4a25-aba9-4d8ca05f46e7.jpg',
    role: 'Майстер меча',
    anime: [3, 6, 9, 12],
    description: 'Талановита фехтувальниця, яка присвятила життя вдосконаленню майстерності. Її швидкість неперевершена.',
    voiceActor: 'Маая Учіда'
  },
  {
    id: 7,
    name: 'Акіра Фудзіта',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/fad2ef88-5d08-4bcd-b4bc-36dfb631d259.jpg',
    role: 'Мудрець',
    anime: [4, 7, 10, 12],
    description: 'Старий мудрець, який володіє древніми знаннями. Його поради часто рятують героїв від загибелі.',
    voiceActor: 'Акіо Оцука'
  },
  {
    id: 8,
    name: 'Ріна Ходзукі',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/28f6e65a-4c90-4a25-aba9-4d8ca05f46e7.jpg',
    role: 'Цілителька',
    anime: [5, 7, 10],
    description: 'Добра та турботлива цілителька, яка допомагає всім, хто потребує. Її магія зцілення рятує життя.',
    voiceActor: 'Саорі Хаямі'
  }
];

export const genres = [
  'Усі',
  'Екшн',
  'Фентезі',
  'Романтика',
  'Комедія',
  'Драма',
  'Жахи',
  'Пригоди',
  'Фантастика',
  'Містика'
];

export const studios = [
  'Усі студії',
  'SkyWorks Animation',
  'DreamLight Studios',
  'HeroTales Production',
  'Moonlight Pictures',
  'Magic Academy Films',
  'Bushido Animation',
  'Stellar Works',
  'Dragon Tales Inc',
  'SpringHeart Studios',
  'Underground Films',
  'Urban Myths Animation',
  'SkyPirates Studio'
];
