import { createStore } from "vuex";

export default createStore({
  state: {
    categories: [
      {
        id: 1,
        title: "soup",
        url: "./soup",
        name: "Супы",
        img: require("@/assets/img/soup.jpg"),
      },
      {
        id: 2,
        title: "vtoroe",
        url: "./vtoroe",
        name: "Второе",
        img: require("@/assets/img/vtoroe.jpg"),
      },
      {
        id: 3,
        title: "garnish",
        url: "./garnish",
        name: "Гарниры",
        img: require("@/assets/img/garnir.jpg"),
      },
      {
        id: 4,
        title: "salad",
        url: "./salad",
        name: "Салаты",
        img: require("@/assets/img/salad.jpg"),
      },
      {
        id: 5,
        title: "bakery",
        url: "./bakery",
        name: "Выпечка",
        img: require("@/assets/img/bakery.jpg"),
      },
      {
        id: 6,
        title: "drink",
        url: "./drink",
        name: "Напитки",
        img: require("@/assets/img/drink1.jpg"),
      },
    ],
    dishImg: [
      require("@/assets/img/dish4.jpg"),
      require("@/assets/img/dish2.jpg"),
      require("@/assets/img/dish3.jpg"),
      require("@/assets/img/dish1.jpg"),
      require("@/assets/img/dish5.jpg"),
      require("@/assets/img/dish6.jpg"),
      require("@/assets/img/dish7.jpg"),
      require("@/assets/img/dish8.jpg"),
      require("@/assets/img/dish9.jpg"),
      require("@/assets/img/dish10.jpg"),
      require("@/assets/img/dish11.jpg"),
      require("@/assets/img/dish12.jpg"),
      require("@/assets/img/dish13.jpg"),
      require("@/assets/img/dish14.jpg"),
      require("@/assets/img/dish15.jpg"),
      require("@/assets/img/dish16.jpg"),
      require("@/assets/img/dish17.jpg"),
      require("@/assets/img/dish18.jpg"),
      require("@/assets/img/dish19.jpg"),
      require("@/assets/img/dish20.jpg"),
    ],
    lifeHack: ['Всегда покупаю много зелени и овощей. Зелень мою сразу, обворачиваю в полотенце и убираю в холодильник. Теперь ее легко достать и положить сразу в тарелку.', 
    'Cразу же отвариваю 5-7 морковок. Она всегда пригодится.',
      'Готовлю гарнир с запасом или лучше два гарнира. Перекладываю в контейнер, и он может храниться 3-4 дня.',
      'Если нет готового источника белка, то всегда есть яйцо. Его можно пожарить на сухой сковороде буквально за 5 минут.',
      'Стараюсь есть 4-5 раз полноценные блюда и обходиться без перекусов.',
      'Пью теплую воду, особенно, когда хочется что-нибудь схватить.',
      'Обычно готовлю одно горячее блюдо в день и салат. Выпечку - через 2 дня. Этого хватает на семью из 4 человек. '
      ],
    productText: [
      "Глютен - белок, которые содержатся в перловой крупе, ржи, пшенице, манной крупе, цельнозерновой муке, макаронах, булгуре, полбе, кускусе. Глютен я не ем.",
      "Источники лектинов – в основном бобовые и пасленовые. Максимальное количество лектинов в бобовых, в пасленовых их чуть меньше. Такие паслёновые, как баклажаны и картофель замачиваю перед приготовлением. Употребляю только термически обработанными.",
      "Источниками ферментируемых олиго-димоносахаридов и полиолов являются молочные продукты, грибы, сахар, сахарозаменители, а также некоторые овощи, сладкие фрукты. Из молочных продуктов иногда использую йогурт, нежирную сметану, безглютеновое масло. Грибы, лук, чеснок и сладкие фрукты употребляю по минимуму. Все термически обработанное.",
    ],
    products: [
      {
        id: 1,
        name: "Овощи:",
        el: [
          "зелень любая",
          "все виды салатов",
          "морковь",
          "свекла",
          "все виды капусты",
          "огурец",
          "редис",
          "тыква",
          "кабачки",
          "цуккини",
          "оливки",
          "имбирь",
          "дайкон",
          "батат",
        ],
      },
      {
        id: 2,
        name: "Крупы:",
        el: ["гречка"],
      },
      {
        id: 3,
        name: "Мясо, яйца:",
        el: ["яйцо", "мясо любое", "птица"],
      },
      {
        id: 4,
        name: "Рыба:",
        el: ["любая термически обработанная рыба"],
      },
      {
        id: 5,
        name: "Масло:",
        el: ["авокадо", "оливковое масло ", "кокосовое масло"],
      },
      {
        id: 6,
        name: "Орехи и сухофрукты:",
        el: ["все орехи кроме арахиса", "семечки льняные, чиа, тыквы"],
      },
      {
        id: 7,
        name: "Специи, готовые изделия:",
        el: ["горчица", "травы и специи", "псиллиум", "сода"],
      },
    ],
    productsLimit: [
      {
        id: 1,
        name: "Овощи:",
        el: [
          "кукуруза",
          "стручковая фасоль",
          "баклажаны",
          "перец",
          "помидоры",
          "зеленый горошек",
          "чеснок",
          "лук репчатый",
          "картофель",
        ],
      },
      {
        id: 2,
        name: "Крупы:",
        el: [
          "овсянка",
          "безглютеновые макароны",
          "пшено",
          "рис бурый",
          "рис белый ",
        ],
      },
      {
        id: 3,
        name: "Мясо, яйца:",
        el: ["жирное мясо"],
      },
      {
        id: 4,
        name: "Рыба:",
        el: ["любая термически Не обработанная рыба"],
      },
      {
        id: 5,
        name: "Молочные продукты:",
        el: [
          "сыр безлактозный",
          "масло сливочное безлактозное",
          "йогурт",
          "сметана нежирная",
          "творог",
          "растительное молоко без добавления сахара",
        ],
      },
      {
        id: 6,
        name: "Орехи и сухофрукты:",
        el: ["все сухофрукты", "семечки подсолнечника"],
      },
      {
        id: 7,
        name: "Хлебобулочные изделия:",
        el: ["безглютеновые хлебцы"],
      },
      {
        id: 8,
        name: "Специи, готовые изделия:",
        el: ["шоколад", "мед"],
      },
    ],
    productsNo: [
      {
        id: 1,
        name: "Продукты, от которых мне очень плохо:",
        el: [
          "сахар и сахарозаменители",
          "молоко",
          "алкогольные напитки",
          "глютен",
          "кофе",
          "и все продукты, содержащие в составе эти вещества: хлеб, колбасы, печенье, мороженое, конфеты, соевый соус, чипсы и др.",
        ],
      },
    ],
    recipe: [{
      id: 1,
      category: "soup",
      name: "Суп с говядиной и овощами",
      img: require("@/assets/img/soup1.jpg"),
      ingredients: [
        {
          id: 1,
          name: "говядина на кости",
          count: 800,
          unit: "гр",
        },
        {
          id: 2,
          name: "брокколи",
          count: 300,
          unit: "гр",
        },
        {
          id: 3,
          name: "морковь",
          count: 300,
          unit: "гр",
        },
        {
          id: 4,
          name: "зелень",
          count: 30,
          unit: "гр",
        },
        {
          id: 5,
          name: "лавровый лист",
          count: 0.1,
          unit: "гр",
        },
        {
          id: 6,
          name: "соль",
          count: 5,
          unit: "гр",
        },
      ],
      description:
        "Говядину хорошо помыть, добавить 1,5-2 литра воды, соль по вкусу, лавровый лист и отварить до готовности. Обязательно снимать накипь. Добавить морковь, нарезанную шайбами, через 10 минут добавить брокколи, разобранные на соцветия. Варить еще 10-15 минут. Добавить зелень.",
    },
    {
      id: 2,
      category: "soup",
      name: "Kуриный суп",
      img: require("@/assets/img/soup2.jpg"),
      ingredients: [
        {
          id: 1,
          name: "курица",
          count: 1000,
          unit: "гр",
        },
        {
          id: 2,
          name: "морковь",
          count: 600,
          unit: "гр",
        },
        {
          id: 3,
          name: "яйцо",
          count: 5,
          unit: "шт",
        },
        {
          id: 4,
          name: "зелень",
          count: 30,
          unit: "гр",
        },
        {
          id: 5,
          name: "лавровый лист",
          count: 0.1,
          unit: "гр",
        },
        {
          id: 6,
          name: "соль",
          count: 5,
          unit: "гр",
        },
      ],
      description:
        "Курицу хорошо помыть, добавить 1,5 - 2 литра воды, соль по вкусу, лавровый лист, почищенную целую морковь и отварить до готовности. Обязательно снимать накипь. Подавать с зеленью и отварным яйцом.",
    },
    {
      id: 3,
      category: "soup",
      name: "Kуриный суп с гречкой",
      img: require("@/assets/img/soup3.jpg"),
      ingredients: [
        {
          id: 1,
          name: "курица",
          count: 600,
          unit: "гр",
        },
        {
          id: 2,
          name: "морковь",
          count: 150,
          unit: "гр",
        },
        {
          id: 3,
          name: "гречка",
          count: 150,
          unit: "гр",
        },
        {
          id: 4,
          name: "картофель",
          count: 150,
          unit: "гр",
        },
        {
          id: 5,
          name: "зелень",
          count: 30,
          unit: "гр",
        },
        {
          id: 6,
          name: "лавровый лист",
          count: 0.1,
          unit: "гр",
        },
        {
          id: 7,
          name: "соль",
          count: 5,
          unit: "гр",
        },
      ],
      description:
        "Курицу хорошо помыть, добавить 1,5 - 2 литра воды, соль по вкусу, лавровый лист. После закипания снять накипь. Добавить нарезанные кубиком 1 морковь и 1-2 шт картофеля, промытую гречку. Варить до готовности картофеля (примерно 20 минут). Подавать украсив зеленью.",
    },
    {
      id: 4,
      category: "soup",
      name: "Суп-пюре из тыквы",
      img: require("@/assets/img/soup4.jpg"),
      ingredients: [
        {
          id: 1,
          name: "тыква",
          count: 800,
          unit: "гр",
        },
        {
          id: 2,
          name: "морковь",
          count: 300,
          unit: "гр",
        },
        {
          id: 3,
          name: "картофель",
          count: 150,
          unit: "гр",
        },
        {
          id: 5,
          name: "масло оливковое",
          count: 10,
          unit: "мл",
        },
        {
          id: 6,
          name: "семечки тыквенные",
          count: 150,
          unit: "гр",
        },
        {
          id: 7,
          name: "соль",
          count: 5,
          unit: "гр",
        },
      ],

      description:
        "Тыкву, 2 морковки и 1 картошку очистить и нарезать крупными кубиками. Добавить 1 литр воды, соль и варить до готовности. Когда овощи станут мягкими, снять с плиты, дать немного остыть, добавить 2 столовые ложки оливкового масла и все взбить погружным блендером. Если покажется густым, можно добавить немного воды. Подавать с тыквенными семечками.",
    },
    {
      id: 5,
      category: "vtoroe",
      name: "Куриная грудка в кляре",
      img: require("@/assets/img/vtoroe2.jpg"),
      ingredients: [
        {
          id: 1,
          name: "куриная грудка",
          count: 1000,
          unit: "гр",
        },
        {
          id: 2,
          name: "яйцо",
          count: 4,
          unit: "шт",
        },
        {
          id: 3,
          name: "мука безглютеновая",
          count: 80,
          unit: "гр",
        },
        {
          id: 4,
          name: "масло оливковое",
          count: 10,
          unit: "гр",
        },
        {
          id: 5,
          name: "перец",
          count: 0.1,
          unit: "гр",
        },
        {
          id: 6,
          name: "соль",
          count: 3,
          unit: "гр",
        },
        {
          id: 6,
          name: "сода",
          count: 1,
          unit: "гр",
        },
      ],
      description:
        "Курицу нарезать пластинками и отбить, добавить соль, перец по вкусу. Для кляра смешать 4 яйца с 50 мл воды, мукой и половиной чайной ложки соды. Обвалять филе в кляре и обжарить с двух сторон до готовности с добавление небольшого количества масла.",
    },
    {
      id: 6,
      category: "vtoroe",
      name: "Говядина запеченная",
      img: require("@/assets/img/vtoroe5.jpg"),
      ingredients: [
        {
          id: 1,
          name: "говядина",
          count: 1000,
          unit: "гр",
        },
        {
          id: 2,
          name: "перец",
          count: 0.1,
          unit: "гр",
        },
        {
          id: 3,
          name: "соль",
          count: 4,
          unit: "гр",
        },
        {
          id: 4,
          name: "бумага для выпечки",
          count: 1,
          unit: "м",
        },
        {
          id: 5,
          name: "фольга",
          count: 1,
          unit: "м",
        },
      ],
      description:
        "Говядину хорошо помыть, обрезать то, что не нравится. Посолить, поперчить по вкусу. Завернуть сначала в бумагу для выпечки в 2 слоя, а затем в фольгу. Готовить в духовке при 200 градусах 2,5 часа. Получается очень сочное и мягкое мясо. ",
    },
    {
      id: 7,
      category: "vtoroe",
      name: "Kуриный ножки с овощами",
      img: require("@/assets/img/vtoroe.jpg"),
      ingredients: [
        {
          id: 1,
          name: "куриная голень",
          count: 2000,
          unit: "гр",
        },
        {
          id: 2,
          name: "морковь",
          count: 300,
          unit: "гр",
        },
        {
          id: 3,
          name: "батат",
          count: 300,
          unit: "гр",
        },
        {
          id: 4,
          name: "кабачок",
          count: 300,
          unit: "гр",
        },
        {
          id: 5,
          name: "масло оливковое",
          count: 5,
          unit: "мл",
        },
        {
          id: 6,
          name: "специи для курицы",
          count: 5,
          unit: "гр",
        },
        {
          id: 7,
          name: "соль",
          count: 5,
          unit: "гр",
        },
      ],
      description:
        "Куриные ножки замариновать со специями и с солью хотя бы на полчаса. Овощи хорошо промыть, при необходимости почистить, посолить. Выложить на притивень, смазанный маслом, овощи, сверху выложить голень. Выпекать при 180-200градусах около часа. Овощи можно использовать любые/", 
    },
    {
      id: 8,
      category: "vtoroe",
      name: "Овощное рагу с грудкой",
      img: require("@/assets/img/vtoroe3.jpg"),
      ingredients: [
        {
          id: 1,
          name: "грудка куриная",
          count: 500,
          unit: "гр",
        },
        {
          id: 2,
          name: "морковь",
          count: 300,
          unit: "гр",
        },
        {
          id: 3,
          name: "кабачок",
          count: 400,
          unit: "гр",
        },
        {
          id: 4,
          name: "цветная капуста",
          count: 200,
          unit: "гр",
        },
        {
          id: 5,
          name: "масло оливковое",
          count: 5,
          unit: "мл",
        },
        {
          id: 6,
          name: "соль",
          count: 3,
          unit: "гр",
        },

        {
          id: 7,
          name: "перец",
          count: 0.1,
          unit: "гр",
        },
      ],

      description:
        "Овощи при необходимости почистить, морковь нарезать соломкой, кабачок кубиком. Куриную грудку нарезать кубиком. Морковь обжарить на сковороде 2-3 минуты, добавить грудку, потушить еще 7-8 минут, добавить остающиеся овощи и тушить до готовности. Соль и перец по вкусу. Готовлю либо в мультиварке на режиме 'жарка', либо в сковороде Wok ",
    },
    {
      id: 9,
      category: "garnish",
      name: "Овощи",
      img: require("@/assets/img/garnir.jpg"),
      ingredients: [
        {
          id: 1,
          name: "брокколи",
          count: 200,
          unit: "гр",
        },
        {
          id: 2,
          name: "морковь",
          count: 300,
          unit: "гр",
        },
        {
          id: 3,
          name: "лук красный",
          count: 150,
          unit: "гр",
        },
        {
          id: 4,
          name: "цветная капуста",
          count: 200,
          unit: "гр",
        },
        {
          id: 5,
          name: "фасоль стручковая",
          count: 100,
          unit: "гр",
        },
        {
          id: 6,
          name: "масло оливковое",
          count: 5,
          unit: "мл",
        },
        {
          id: 7,
          name: "соль",
          count: 2,
          unit: "гр",
        },
      ],

      description: "Овощи очистить, нарезать. На оливковом масле обжарить лук, затем морковь. Затем добавить остальные овощи. Готовить до готовности минут 10. Использую сковороду Wok",
    },
    {
      id: 10,
      category: "garnish",
      name: "Гречка",
      img: require("@/assets/img/garnish1.jpg"),
      ingredients: [
        {
          id: 1,
          name: "гречка",
          count: 400,
          unit: "гр",
        },
        {
          id: 3,
          name: "масло оливковое",
          count: 10,
          unit: "мл",
        },
        {
          id: 4,
          name: "соль",
          count: 2,
          unit: "гр",
        },
      ],

      description:
        "Полпачки гречки промыть, залить холодной водой и оставить на несколько часов. Она разбухнет, но ничего страшного. Добавить еще воды, перемещать и вылить максимально сколько возможно. Лучше так повторить пару раз. Посолить и поставить варить на медленном огне 15-20 минут. И обязательно перед подачей в тарелку добавить оливковое масло",
    },
    {
      id: 11,
      category: "salad",
      name: "С морковью c изюмом",
      img: require("@/assets/img/salad2.jpg"),
      ingredients: [
        {
          id: 1,
          name: "морковь",
          count: 900,
          unit: "гр",
        },
        {
          id: 2,
          name: "изюм",
          count: 50,
          unit: "гр",
        },
        {
          id: 3,
          name: "масло оливковое",
          count: 10,
          unit: "мл",
        },
        {
          id: 4,
          name: "соль",
          count: 2,
          unit: "гр",
        },
      ],
      description:
        "Морковь 5-7 шт отварить до готовности. Изюм промыть и залить горячей водой. Отварную морковь очистить, нашинковать на крупной терке, подавить изюм, соль, оливковое масло. При желании, добавить, предварительно вымоченные в воде, орехи.",
    },
    {
      id: 12,
      category: "salad",
      name: "Салат с пекинской капустой",
      img: require("@/assets/img/salad4.jpg"),
      ingredients: [
        {
          id: 1,
          name: "пекинская капуста",
          count: 500,
          unit: "гр",
        },
        {
          id: 2,
          name: "огурец",
          count: 150,
          unit: "гр",
        },
        {
          id: 3,
          name: "редис",
          count: 100,
          unit: "гр",
        },
        {
          id: 4,
          name: "семечки кунжута",
          count: 20,
          unit: "гр",
        },
        {
          id: 5,
          name: "зелень",
          count: 20,
          unit: "гр",
        },
        {
          id: 6,
          name: "масло оливковое",
          count: 10,
          unit: "мл",
        },
        {
          id: 7,
          name: "соль",
          count: 1,
          unit: "гр",
        },
      ],
      description:
        "Капусту, огурцы, редис промыть и порезать. Добавить зелень, соль по вкусу, масло оливковое и семечки.",
    },
    {
      id: 13,
      category: "salad",
      name: "Салат с курицей и авокадо",
      img: require("@/assets/img/salad5.jpg"),
      ingredients: [
        {
          id: 1,
          name: "куриная грудка",
          count: 200,
          unit: "гр",
        },
        {
          id: 2,
          name: "листья салата",
          count: 40,
          unit: "гр",
        },
        {
          id: 3,
          name: "авокадо",
          count: 1,
          unit: "шт",
        },
        {
          id: 5,
          name: "масло оливковое",
          count: 10,
          unit: "мл",
        },
        {
          id: 6,
          name: "сок лимона",
          count: 5,
          unit: "гр",
        },
        {
          id: 7,
          name: "соль",
          count: 1,
          unit: "гр",
        },
      ],
      description:
        "Готовую куриную грудку нарезать, добавить листья салата, порезанный авокадо. Заправить смесью 1 столовой ложки лимонного сока и 2 ложками оливкового масла. Соль по вкусу.",
    },
    {
      id: 14,
      category: "salad",
      name: "Салат морковью и свеклой",
      img: require("@/assets/img/salad6.jpg"),
      ingredients: [
        {
          id: 1,
          name: "морковь",
          count: 300,
          unit: "гр",
        },
        {
          id: 2,
          name: "свекла",
          count: 300,
          unit: "гр",
        },
        {
          id: 4,
          name: "сок лимона",
          count: 5,
          unit: "гр",
        },
        {
          id: 5,
          name: "масло оливковое",
          count: 10,
          unit: "мл",
        },
        {
          id: 7,
          name: "соль",
          count: 1,
          unit: "гр",
        },
      ],
      description:
        "Овощи почистить и натереть на терке. Заправить смесью 1 столовой ложки лимонного сока и 2 ложки оливкового масла. Соль по вкусу.",
    },
    {
      id: 15,
      category: "bakery",
      name: "Оладьи",
      img: require("@/assets/img/bakery11.jpg"),
      ingredients: [
        {
          id: 1,
          name: "яблоко",
          count: 300,
          unit: "гр",
        },
        {
          id: 2,
          name: "яйцо",
          count: 2,
          unit: "шт",
        },
        {
          id: 4,
          name: "мед",
          count: 10,
          unit: "гр",
        },
      ],
      description:
        "Яблоки очистить и натереть на крупной терке. Добавить яйцо. Обжарить с двух сторон на сухой сковороде. Подавать с медом. Можно добавить корицу для вкуса",
    },
    {
      id: 16,
      category: "bakery",
      name: "Печенье с кунжутом",
      img: require("@/assets/img/bakery7.jpg"),
      ingredients: [
        {
          id: 1,
          name: "яблоко",
          count: 150,
          unit: "гр",
        },
        {
          id: 2,
          name: "яйцо",
          count: 1,
          unit: "шт",
        },
        {
          id: 3,
          name: "овсяные хлопья",
          count: 80,
          unit: "гр",
        },
        {
          id: 4,
          name: "кунжут",
          count: 40,
          unit: "гр",
        },
        {
          id: 4,
          name: "финики",
          count: 30,
          unit: "гр",
        },
        {
          id: 5,
          name: "изюм",
          count: 30,
          unit: "гр",
        },
        {
          id: 4,
          name: "сода",
          count: 5,
          unit: "гр",
        },
      ],
      description:
        "Финики замочить в горячей воде. Овсяные хлопья перемолоть в блендере. Яблоки очистить и тоже перемолоть вместе с яйцом и 5-6 шт фиников. Добавить овес, кунжут, половинку чайной ложки соды и перемещать. Должно получиться по консистенции как сметана. Если жидковато, то добавить еще хлопья овсяные или кунжут. Выложить на противень, застеленный бумагой, добавить изюм и выпекать при 180С 16-18 минут.",
    },
    {
      id: 17,
      category: "bakery",
      name: "Печенье с орехами и сухофруктами",
      img: require("@/assets/img/bakery2.jpg"),
      ingredients: [
        {
          id: 1,
          name: "яблоко",
          count: 150,
          unit: "гр",
        },
        {
          id: 2,
          name: "яйцо",
          count: 2,
          unit: "шт",
        },
        {
          id: 3,
          name: "мука зеленой гречки",
          count: 50,
          unit: "гр",
        },
        {
          id: 4,
          name: "орехи",
          count: 100,
          unit: "гр",
        },
        {
          id: 4,
          name: "сухофрукты",
          count: 100,
          unit: "гр",
        },
        {
          id: 5,
          name: "семечки",
          count: 30,
          unit: "гр",
        },
        {
          id: 4,
          name: "сода",
          count: 5,
          unit: "гр",
        },
      ],
      description:
        "Любые орехи и сухофрукты вымочить в холодной воде. Яблоко очистить и натереть на терке. Орехи и сухофрукты порезать на небольшие кусочки. Добавить яйцо, соду, муку. Выложить на противень, застеленный бумагой, и выпекать при 180С около 16-18 минут.",
    },
    {
      id: 18,
      category: "bakery",
      name: "Печенье имбирное",
      img: require("@/assets/img/bakery4.jpg"),
      ingredients: [
        {
          id: 1,
          name: "масло сливочное",
          count: 90,
          unit: "гр",
        },
        {
          id: 2,
          name: "мед",
          count: 30,
          unit: "гр",
        },
        {
          id: 6,
          name: "яйцо",
          count: 2,
          unit: "шт",
        },
        {
          id: 3,
          name: "мука зеленой гречки",
          count: 100,
          unit: "гр",
        },
        {
          id: 4,
          name: "имбирь",
          count: 5,
          unit: "гр",
        },
        {
          id: 5,
          name: "корица",
          count: 5,
          unit: "гр",
        },

        {
          id: 7,
          name: "сода",
          count: 5,
          unit: "гр",
        },
      ],
      description:
        "Половину пачки сливочного масла вместе с о столовой ложкой меда довести до закипания, добавить чайную ложку соды. Масса должна увеличиться. Когда остынет, добавить яйцо, специи и муку. Вымесить тесто, как для песочного печенья. Раскатать толщиной 5 мм и придать форму печенек. Выпекать при 160-180 градусах около 10-12 минут.",
    },
],
    cartList: [],
    message: "Добавить к покупкам",
  },
  getters: {
    getRecipeCategory: (state) => (category) => {
      return state.recipe.filter((el) => el.category === category);
    },
    getCategory: (state) => state.categories,
    getDishImg: (state) => state.dishImg,
    getlifeHack: (state) => state.lifeHack,
    getCartIngr: (state) => state.cartList.filter((el) => el.ingredients),
    totalByName: (state) => {
      const result = {};
      state.cartList.forEach((obj) => {
        obj.ingredients.forEach((item) => {
          if (!result[item.name]) {
            result[item.name] = 0;
          }
          result[item.name] += item.count;
        });
      });
      return result;
    },
  },

  mutations: {
    ADD_TO_CART(state, recipe) {
      state.cartList.push(recipe);
    },
  },

  actions: {
    addToCart({ state, commit }, recipeId) {
      const queryElement = state.recipe.find((el) => el.id === recipeId);
      const newElement = {
        ...queryElement,
      };
      commit("ADD_TO_CART", newElement);
  },
  },
  modules: {},
});










// addToCart({ state, commit }, recipeId) {
//   const element = state.cartList.find(el => el.id === recipeId);
//   if (element) {
//     element.amount += 1;

//   }
//   else {
//     const queryElement = state.recipe.find(el  => el.id === recipeId);

//     const newElement = {
//       ...queryElement,
//       amount: 1,
//     }
//     commit('ADD_TO_CART', newElement);
//   }
// },
