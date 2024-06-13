# Журнал изменений

## [выпущено]

ветка feature/home-product-list

### Добавлено
- Компонент [App.vue](src%2FApp.vue) с SVG иконками и адаптивным дизайном.
- Список продуктов на главной странице ([ProductsList.vue](src%2Fcomponents%2FProductsList.vue) и [ProductItem.vue](src%2Fcomponents%2FProductItem.vue)).
- Компонент [AppSearchBar.vue](src%2Fcomponents%2FAppSearchBar.vue) для поиска по имени продуктов
- Компонент [AppSortBar.vue](src%2Fcomponents%2FAppSortBar.vue) для сортировки
- Стейт товаров в [productStore.js](src%2Fstores%2FproductStore.js)
- API вызов для получения продуктов в Pinia
- Добавлен компонент [AppPreloader.vue](src%2Fcomponents%2FAppPreloader.vue)
- Добавлен [productStore.js](src%2Fstores%2FproductStore.js)
- Добавлен [queryParamsStore.js](src%2Fstores%2FqueryParamsStore.js)
- Добавлен компонент [AppFiltersBar.vue](src%2Fcomponents%2FAppFiltersBar.vue), чтобы разгрузить [HomeView.vue](src%2Fpages%2FHomeView.vue)
- Добавлен [cartStore.js](src%2Fstores%2FcartStore.js)
- Добавлен [cartUtils.js](src%2Futils%2FcartUtils.js), управление корзиной будет отсюда (добавление/удаление)

### Изменено
- Обновлен [App.vue](src%2FApp.vue) для включения нового компонента [AppHeader.vue](src%2Fcomponents%2FAppHeader.vue).
- Обновлен [HomeView.vue](src%2Fpages%2FHomeView.vue) для отображения списка продуктов.
- Обновлен [HomeView.vue](src%2Fpages%2FHomeView.vue) для включения компонента [AppSearchBar.vue](src%2Fcomponents%2FAppSearchBar.vue), заменены некоторые стили
- Убраны классы из [ProductsList.vue](src%2Fcomponents%2FProductsList.vue)
- Добавлены классы для группировки поиска и сортировки
- Отформатировано
- Обновлен компонент HomeView для использования продуктов из Pinia store.
- Отформатировано
- Функция запроса
- Запрос в зависимости от [queryParamsStore.js](src%2Fstores%2FqueryParamsStore.js) `queryParamsStore.params`
- Взаимодействие компонентов с [cartStore.js](src%2Fstores%2FcartStore.js)



## [Не выпущено]

### Добавлено


### Изменено


