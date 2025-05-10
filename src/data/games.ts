import { Game, Category } from '../types/game';

export const games: Game[] = [
  {
    id: 1,
    title: "Приключение крысок: Путь к дружбе",
    image: "https://img.itch.zone/aW1nLzE4OTg5Mjc5LnBuZw==/315x250%23c/4RszN6.png",
    category: "Развивающие",
    ageGroup: [4, 5, 6, 7],
    description: "Увлекательное приключение о дружбе",
    link: "https://strawbebby228.itch.io/ratsadventure"
  },
  {
    id: 2,
    title: "Реши пример",
    image: "https://avatars.mds.yandex.net/get-games/1881957/2a0000019227a1092ce6cb8c2c1565788022/pjpg350x209",
    category: "Математика",
    ageGroup: [5, 6, 7],
    description: "Простые математические примеры",
    link: "https://yandex.ru/games/app/202398?utm_campaign=rus_games_category-tag2_yandex_search_460.new%7C59209440&utm_medium=search&utm_source=yandex&utm_term=%D0%B8%D0%B3%D1%80%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%B5%D1%82%D0%B5%D0%B9%20%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D0%B5&utm_content=k50id%7C0100000026531152633_26531152633%7Ccid%7C59209440%7Cgid%7C4460582963%7Caid%7C10267414352%7Cadp%7Cno%7Cpos%7Cpremium2%7Csrc%7Csearch_none%7Cdvc%7Cdesktop%7Cmain#app-id=202398&catalog-session-uid=catalog-a51f5e20-d5f3-5f3f-aa15-f9eee2371bdc-1746857706544-38f9&rtx-reqid=9479306195318598249&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22search%22%7D&redir-data=%7B%22block%22%3A%22search%22%2C%22block_index%22%3A0%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A0%2C%22first_screen%22%3A1%2C%22page%22%3A%22search%22%2C%22rn%22%3A485970938%2C%22row%22%3A0%2C%22rtx_reqid%22%3A%2218434515069977168114%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221746858827941763-682948627517578089-lxhwgumgg6wio6r6-BAL%22%2C%22games_request_id%22%3A%221746858827930902-2411563999750119357-balancer-l7leveler-kubr-yp-sas-187-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252Fsearch%253Fclid%253D4686145%2526k50id%253D0100000026531152633_26531152633%2526yclid%253D18360694229061599231%2526query%253D%2525D1%252580%2525D0%2525B5%2525D1%252588%2525D0%2525B8%252520%2525D0%2525BF%2525D1%252580%2525D0%2525B8%2525D0%2525BC%2525D0%2525B5%2525D1%252580%22%7D&search_query=%D1%80%D0%B5%D1%88%D0%B8+%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80"
  },
  {
    id: 3,
    title: "Найди отличия",
    image: "https://avatars.mds.yandex.net/get-games/11385414/2a000001920eaa440cb71183a203f25cdb1a/pjpg350x209",
    category: "Отличия",
    ageGroup: [4, 5, 6],
    description: "Находите отличия между двумя картинками и тренируйте свой мозг и внимательность",
    link: "https://yandex.ru/games/app/208909?utm_campaign=rus_games_category-tag2_yandex_search_460.new%7C59209440&utm_medium=search&utm_source=yandex&utm_term=%D0%B8%D0%B3%D1%80%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%B5%D1%82%D0%B5%D0%B9%20%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D0%B5&utm_content=k50id%7C0100000026531152633_26531152633%7Ccid%7C59209440%7Cgid%7C4460582963%7Caid%7C10267414352%7Cadp%7Cno%7Cpos%7Cpremium2%7Csrc%7Csearch_none%7Cdvc%7Cdesktop%7Cmain#app-id=208909&catalog-session-uid=catalog-a51f5e20-d5f3-5f3f-aa15-f9eee2371bdc-1746857706544-38f9&rtx-reqid=11039221153712395687&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22search%22%7D&redir-data=%7B%22block%22%3A%22search%22%2C%22block_index%22%3A0%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A0%2C%22first_screen%22%3A1%2C%22page%22%3A%22search%22%2C%22rn%22%3A352428142%2C%22row%22%3A0%2C%22rtx_reqid%22%3A%2218434515069977168114%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221746859141283226-9605737981361354124-mv2eeqenp4thmy4c-BAL%22%2C%22games_request_id%22%3A%221746859141271041-9166261195803264545-balancer-l7leveler-kubr-yp-sas-187-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252Fsearch%253Fclid%253D4686145%2526k50id%253D0100000026531152633_26531152633%2526yclid%253D18360694229061599231%2526query%253D%2525D0%2525BD%2525D0%2525B0%2525D0%2525B9%2525D0%2525B4%2525D0%2525B8%252520%2525D0%2525BE%2525D1%252582%2525D0%2525BB%2525D0%2525B8%2525D1%252587%2525D0%2525B8%2525D1%25258F%22%7D&search_query=%D0%BD%D0%B0%D0%B9%D0%B4%D0%B8+%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D1%8F"
  },
  {
    id: 4,
    title: "Найди число",
    image: "https://avatars.mds.yandex.net/get-games/6300668/2a0000019524d618aab12850fcc45d359d88/pjpg350x209",
    category: "Поиск числа",
    ageGroup: [4, 5, 6],
    description: "Найди как можно быстрее все числа, спрятанные на цветных плитках",
    link: "https://yandex.ru/games/app/420966?utm_campaign=rus_games_general-igra-bezkav_yandex_search_460.new%7C59207487&utm_medium=search&utm_source=yandex&utm_term=%D0%B8%D0%B3%D1%80%D0%B0&utm_content=k50id%7C0100000026526832597_26526832597%7Ccid%7C59207487%7Cgid%7C4460504205%7Caid%7C10267103746%7Cadp%7Cno%7Cpos%7Cpremium1%7Csrc%7Csearch_none%7Cdvc%7Cdesktop%7Cmain&first-seen=%7B%22clid%22%3A4686145%2C%22utm_source%22%3A%22yandex%22%7D#app-id=420966&catalog-session-uid=catalog-a51f5e20-d5f3-5f3f-aa15-f9eee2371bdc-1746859533615-2bf9&rtx-reqid=3069337988087730987&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22search%22%7D&redir-data=%7B%22block%22%3A%22search%22%2C%22block_index%22%3A0%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A0%2C%22first_screen%22%3A1%2C%22page%22%3A%22search%22%2C%22rn%22%3A522934828%2C%22row%22%3A0%2C%22rtx_reqid%22%3A%2214159519539250463798%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221746859539218897-8160417701878627293-qtlaak7iuyczxrng-BAL%22%2C%22games_request_id%22%3A%221746859539206978-11429671894550235589-balancer-l7leveler-kubr-yp-sas-187-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252Fsearch%253Fclid%253D4686145%2526game-id%253D253647%25253Ano%25252C190934%25252C104505%25252C259111%25252C188408%25252C346285%25252C206842%25252C313892%25252C96447%25252C182464%25252C96445%25252C99195%25252C193301%25252C197352%25252C96751%25252C190906%25252C222031%25252C166049%25252C162893%25252C269910%2526k50id%253D0100000026526832597_26526832597%2526yclid%253D13020736389992939519%2526query%253D%2525D0%2525BF%2525D0%2525BE%2525D0%2525B8%2525D1%252581%2525D0%2525BA%252520%2525D1%252587%2525D0%2525B8%2525D1%252581%2525D0%2525BB%2525D0%2525B0%22%7D&search_query=%D0%BF%D0%BE%D0%B8%D1%81%D0%BA+%D1%87%D0%B8%D1%81%D0%BB%D0%B0"
  },
  {
    id: 5,
    title: "Собери слова из букв",
    image: "https://avatars.mds.yandex.net/get-games/10152950/2a0000018d37cf40753e30e15d905e1f6736/pjpg350x209",
    category: "Буквы",
    ageGroup: [6, 7],
    description: "Отгадай все слова, перемещая палец по нужным буквам",
    link: "https://yandex.ru/games/app/283876?utm_campaign=rus_games_general-igra-bezkav_yandex_search_460.new%7C59207487&utm_medium=search&utm_source=yandex&utm_term=%D0%B8%D0%B3%D1%80%D0%B0&utm_content=k50id%7C0100000026526832597_26526832597%7Ccid%7C59207487%7Cgid%7C4460504205%7Caid%7C10267103746%7Cadp%7Cno%7Cpos%7Cpremium1%7Csrc%7Csearch_none%7Cdvc%7Cdesktop%7Cmain#app-id=283876&catalog-session-uid=catalog-a51f5e20-d5f3-5f3f-aa15-f9eee2371bdc-1746859533615-2bf9&rtx-reqid=16113266986925626730&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22search%22%7D&redir-data=%7B%22block%22%3A%22search%22%2C%22block_index%22%3A0%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A0%2C%22first_screen%22%3A1%2C%22page%22%3A%22search%22%2C%22rn%22%3A269630065%2C%22row%22%3A0%2C%22rtx_reqid%22%3A%2214159519539250463798%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221746859871535249-17885345883936587981-c542ztagbnf5gjhn-BAL%22%2C%22games_request_id%22%3A%221746859871483565-15710209779662153652-balancer-l7leveler-kubr-yp-sas-187-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252Fsearch%253Fclid%253D4686145%2526game-id%253D253647%25253Ano%25252C190934%25252C104505%25252C259111%25252C188408%25252C346285%25252C206842%25252C313892%25252C96447%25252C182464%25252C96445%25252C99195%25252C193301%25252C197352%25252C96751%25252C190906%25252C222031%25252C166049%25252C162893%25252C269910%2526k50id%253D0100000026526832597_26526832597%2526yclid%253D13020736389992939519%2526query%253D%2525D0%2525B1%2525D1%252583%2525D0%2525BA%2525D0%2525B2%2525D1%25258B%22%7D&search_query=%D0%B1%D1%83%D0%BA%D0%B2%D1%8B"
  },
  {
    id: 6,
    title: "Цветные фигуры",
    image: "https://avatars.mds.yandex.net/get-games/6300668/2a00000196262b9357924ec0fb3e7077915f/pjpg350x209",
    category: "Фигуры",
    ageGroup: [5, 6, 7],
    description: "Соединяй одинаковые фигуры, чтобы они исчезали и приносили очки",
    link: "https://yandex.ru/games/app/427943?utm_campaign=rus_games_general-igra-bezkav_yandex_search_460.new%7C59207487&utm_medium=search&utm_source=yandex&utm_term=%D0%B8%D0%B3%D1%80%D0%B0&utm_content=k50id%7C0100000026526832597_26526832597%7Ccid%7C59207487%7Cgid%7C4460504205%7Caid%7C10267103746%7Cadp%7Cno%7Cpos%7Cpremium1%7Csrc%7Csearch_none%7Cdvc%7Cdesktop%7Cmain&first-seen=%7B%22clid%22%3A4686145%2C%22utm_source%22%3A%22yandex%22%7D#app-id=427943&catalog-session-uid=catalog-a51f5e20-d5f3-5f3f-aa15-f9eee2371bdc-1746859533615-2bf9&rtx-reqid=17703494896100939365&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22search%22%7D&redir-data=%7B%22block%22%3A%22search%22%2C%22block_index%22%3A0%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A0%2C%22first_screen%22%3A1%2C%22page%22%3A%22search%22%2C%22rn%22%3A230172203%2C%22row%22%3A0%2C%22rtx_reqid%22%3A%2214159519539250463798%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221746865265265964-10130490287683801856-dmhos7ujuvjnjbof-BAL%22%2C%22games_request_id%22%3A%221746865265244065-14325963234669611448-balancer-l7leveler-kubr-yp-sas-185-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252Fsearch%253Fclid%253D4686145%2526game-id%253D253647%25253Ano%25252C190934%25252C104505%25252C259111%25252C188408%25252C346285%25252C206842%25252C313892%25252C96447%25252C182464%25252C96445%25252C99195%25252C193301%25252C197352%25252C96751%25252C190906%25252C222031%25252C166049%25252C162893%25252C269910%2526k50id%253D0100000026526832597_26526832597%2526yclid%253D13020736389992939519%2526query%253D%2525D1%252584%2525D0%2525B8%2525D0%2525B3%2525D1%252583%2525D1%252580%2525D1%25258B%22%7D&search_query=%D1%84%D0%B8%D0%B3%D1%83%D1%80%D1%8B"
  },
  {
    id: 7,
    title: "6 отличий",
    image: "https://avatars.mds.yandex.net/get-games/11374519/2a00000195a9de6eafead1dd7989c80b5f09/pjpg350x209",
    category: "Отличия",
    ageGroup: [5, 6],
    description: "Ваша задача — найти шесть различий между двумя, на первый взгляд, одинаковыми картинками",
    link: "https://yandex.ru/games/app/420814?utm_campaign=rus_games_general-igra-bezkav_yandex_search_460.new%7C59207487&utm_medium=search&utm_source=yandex&utm_term=%D0%B8%D0%B3%D1%80%D0%B0&utm_content=k50id%7C0100000026526832597_26526832597%7Ccid%7C59207487%7Cgid%7C4460504205%7Caid%7C10267103746%7Cadp%7Cno%7Cpos%7Cpremium1%7Csrc%7Csearch_none%7Cdvc%7Cdesktop%7Cmain&first-seen=%7B%22clid%22%3A4686145%2C%22utm_source%22%3A%22yandex%22%7D#app-id=420814&catalog-session-uid=catalog-a51f5e20-d5f3-5f3f-aa15-f9eee2371bdc-1746859533615-2bf9&rtx-reqid=17481652780969784297&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22search%22%7D&redir-data=%7B%22block%22%3A%22search%22%2C%22block_index%22%3A0%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A0%2C%22first_screen%22%3A1%2C%22page%22%3A%22search%22%2C%22rn%22%3A246758052%2C%22row%22%3A0%2C%22rtx_reqid%22%3A%2214159519539250463798%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221746865541827230-4285492186148050049-c542ztagbnf5gjhn-BAL%22%2C%22games_request_id%22%3A%221746865541817245-8628114126751704532-balancer-l7leveler-kubr-yp-sas-185-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252Fsearch%253Fclid%253D4686145%2526game-id%253D253647%25253Ano%25252C190934%25252C104505%25252C259111%25252C188408%25252C346285%25252C206842%25252C313892%25252C96447%25252C182464%25252C96445%25252C99195%25252C193301%25252C197352%25252C96751%25252C190906%25252C222031%25252C166049%25252C162893%25252C269910%2526k50id%253D0100000026526832597_26526832597%2526yclid%253D13020736389992939519%2526query%253D%2525D0%2525BE%2525D1%252582%2525D0%2525BB%2525D0%2525B8%2525D1%252587%2525D0%2525B8%2525D1%25258F%22%7D&search_query=%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D1%8F"
  },
  {
    id: 7,
    title: "Разукрась это!",
    image: "https://avatars.mds.yandex.net/get-games/1892995/2a000001930ba972d173dfba9ad8a1297efd/pjpg350x209",
    category: "Творчество",
    ageGroup: [4, 5],
    description: "Создай как можно больше красивых и интересных рисунков",
    link: "https://yandex.ru/games/app/420814?utm_campaign=rus_games_general-igra-bezkav_yandex_search_460.new%7C59207487&utm_medium=search&utm_source=yandex&utm_term=%D0%B8%D0%B3%D1%80%D0%B0&utm_content=k50id%7C0100000026526832597_26526832597%7Ccid%7C59207487%7Cgid%7C4460504205%7Caid%7C10267103746%7Cadp%7Cno%7Cpos%7Cpremium1%7Csrc%7Csearch_none%7Cdvc%7Cdesktop%7Cmain&first-seen=%7B%22clid%22%3A4686145%2C%22utm_source%22%3A%22yandex%22%7D#app-id=420814&catalog-session-uid=catalog-a51f5e20-d5f3-5f3f-aa15-f9eee2371bdc-1746859533615-2bf9&rtx-reqid=17481652780969784297&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22search%22%7D&redir-data=%7B%22block%22%3A%22search%22%2C%22block_index%22%3A0%2C%22card%22%3A%22adaptive_recommended_new%22%2C%22col%22%3A0%2C%22first_screen%22%3A1%2C%22page%22%3A%22search%22%2C%22rn%22%3A246758052%2C%22row%22%3A0%2C%22rtx_reqid%22%3A%2214159519539250463798%22%2C%22same_block_index%22%3A0%2C%22wrapper%22%3A%22grid-list%22%2C%22request_id%22%3A%221746865541827230-4285492186148050049-c542ztagbnf5gjhn-BAL%22%2C%22games_request_id%22%3A%221746865541817245-8628114126751704532-balancer-l7leveler-kubr-yp-sas-185-BAL%22%2C%22http_ref%22%3A%22https%253A%252F%252Fyandex.ru%252Fgames%252Fsearch%253Fclid%253D4686145%2526game-id%253D253647%25253Ano%25252C190934%25252C104505%25252C259111%25252C188408%25252C346285%25252C206842%25252C313892%25252C96447%25252C182464%25252C96445%25252C99195%25252C193301%25252C197352%25252C96751%25252C190906%25252C222031%25252C166049%25252C162893%25252C269910%2526k50id%253D0100000026526832597_26526832597%2526yclid%253D13020736389992939519%2526query%253D%2525D0%2525BE%2525D1%252582%2525D0%2525BB%2525D0%2525B8%2525D1%252587%2525D0%2525B8%2525D1%25258F%22%7D&search_query=%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D1%8F"
  }
];

export const categories: Category[] = [
  {
    id: 1,
    title: "Фигуры",
    image: "https://s3-prod-web-app.logiclike.com/v3assets/traceShapes@opt-CIDdc7NZ.svg",
    link: "/category/figures"
  },
  {
    id: 2,
    title: "Буквы",
    image: "https://s3-prod-web-app.logiclike.com/v3assets/capitalLetters@opt-DLDnDFFO.svg",
    link: "/category/letters"
  },
  {
    id: 3,
    title: "Отличия",
    image: "https://s3-prod-training.logiclike.com/converted/jpg/files/mkQiDlFfFql4CKPaxagzuozYPaUp00bRpgQ8ZXou.png.jpg",
    link: "/category/differences"
  },
  {
    id: 4,
    title: "Математика",
    image: "https://s3-prod-web-app.logiclike.com/v3assets/traceDigits@opt-ChfV-TEi.svg",
    link: "/category/mathematics"
  },
  {
    id: 5,
    title: "Поиск Числа",
    image: "https://s3-prod-web-app.logiclike.com/v3assets/countAndSelect@opt-p1JDGD1F.svg",
    link: "/category/search-number"
  },
  {
    id: 6,
    title: "Творчество",
    image: "https://s3-prod-web-app.logiclike.com/v3assets/art@opt-Y8VW1lVv.svg",
    link: "/category/creation"
  }
];