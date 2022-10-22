# Hotels searher app

Поисковик отелей через [Travelpayouts API](https://support.travelpayouts.com/hc/ru/articles/115000343268-API-%20%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%20%D0%BE%D1%82%D0%B5%D0%BB%D0%B5%D0%B9#price)

<br/>

[Посмотреть деплой](https://hotel-searcher-app-vue.vercel.app/)

<br/>

![](https://raw.githubusercontent.com/proehavshiy/forgifs/main/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-10-08%20%D0%B2%2016.34.42.png)

<br/>

## Экосистема
* `JS ES6`
* `Vue3 CLI`, `Vue Router`
* `Vuex`, `vuex-persist`, LocalStorage - стейт-менеджмент и кеширование данных
* `vuelidate` - валидация полей
* `vue-datepicker` - кастомный дейтпикер для выбора дат
* `swiper` - свайпер картинок
* `uniqid` -  для уникальных айди
* `sass`, `scoped` -  стили: переменные, миксины, вложенность и переиспользование стилей
* `ESlint` - линтинг
* `Vercel` - деплой


## Какие задачи сделал:
- [x] `Вход по логину-паролю` с `валидацией полей`
- [x] `Кеширование состояния` пользователя в localstorage
- [x] `Получение отелей по API` из формы (город, дата, дни)
- [x] `Отрисовка списков` найденных / избранных отелей
- [x] Сохранение в избранное / удаление отелей
- [x] `Сортировка по цене, по рейтингу` избранных отелей
- [x] `Анимации блоков с меняющейся шириной`
- [x] `UI-состояния`: hover, active, disabled и т.д.
- [x] `Адаптивная верстка` с flex
- [x] Кастомные utils для `работы с датами` и `склонениями слов`
### Подробнее:
### Роутинг
- [x] 3 страницы: Login, Hotels, ErrorPage
- [x] Hotels - `protected route`: доступ только после логина
### Формы
- [x] `Валидация формы логина` через Vuelidate
- [x] Логин - любая почта
- [x] Пароль - без кириллицы, минимум 8 символов
- [x] Кнопка submit: disabled, если поля невалидны
- [x] Кастомный `datepicker`
### Redux Store
- [x] Разбит на логические слайсы
- [x] Асинхронные запросы к API через `vuex`
- [x] Стейт логина кешируется в `LocalStorage`
### Обработка асинхронных состояний запросов к серверу
- [x] Состояние до запроса - выводом полей "нет данных" в блоки
- [x] Состояние ожидания - через попап и спиннер
- [x] Состояние ошибки - через попап с выводом ошибки
### Верстка
- [x] `Адаптивная верстка` 320px => 1440px
- [x] `Резиновые размеры шрифтов`
- [x] `Раскрытие блоков по кнопке` на планшетных и мобильных разрешениях
- [x] Состояния `hover` и `active` у UI-компонентов
- [x] `Анимации блоков` с изменяющейся шириной (блоки "избранное" и "найденные отели")
- [x] Блоки с ограничениями по высоте и `скроллбарами`

## Reference
* [ТЗ](https://drive.google.com/file/d/1Y43rzApovIgN5oyyuV4q9EifleUmdYK-/view?usp=sharing)
* [Figma](https://www.figma.com/file/PxI4ycD6GMGSpxOZ2NbFBO/React-Test%2FSimple-Hotel-Check-(Copy)?node-id=0%3A1)

## Команды:
* clone branch with `git@github.com:proehavshiy/hotel-searcher-app-vue.git`
* `npm run build` - build final version
* `npm run serve` - start dev mode
* `npm run lint` - lints and fixes files
