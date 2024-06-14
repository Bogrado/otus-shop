# Журнал изменений

## [выпущено]

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
- `auto-animate`, потом буду использовать
- [CartView.vue](src%2Fpages%2FCartView.vue) страница корзины
- Компонент [CartProduct.vue](src%2Fcomponents%2FCartProduct.vue)
- Компонент [QuantityManager.vue](src%2Fcomponents%2FQuantityManager.vue) для управления кол-вом товара
- Компонент [OrderSummary.vue](src%2Fcomponents%2FOrderSummary.vue) общая информация о товарах в корзине
- Компонент [CartProductsList.vue](src%2Fcomponents%2FCartProductsList.vue) контейнер для товаров корзине
- [cartQueryParamsStore.js](src%2Fstores%2FcartQueryParamsStore.js) для корзины, чтобы не пересекаться с каталогом
- computed поле в [cartStore.js](src%2Fstores%2FcartStore.js) для подсчета кол-ва товара
- логика обновления кол-ва товаров в [cartUtils.js](src%2Futils%2FcartUtils.js)

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
- Ссылки в [AppHeader.vue](src%2Fcomponents%2FAppHeader.vue)
- router-view в [App.vue](src%2FApp.vue)
- [loadingStore.js](src%2Fstores%2FloadingStore.js) вызывается из [App.vue](src%2FApp.vue) и прокидывается во все компоненты.
- [AppHeader.vue](src%2Fcomponents%2FAppHeader.vue) обращается к [cartStore.js](src%2Fstores%2FcartStore.js) за кол-вом. товаров в корзине.
- худо бедно функция с запросом переписана
- в [cartQueryParamsStore.js](src%2Fstores%2FcartQueryParamsStore.js) изменен query параметр
- в [CartProductsList.vue](src%2Fcomponents%2FCartProductsList.vue) прокинут массив с товарами
- в [CartProduct.vue](src%2Fcomponents%2FCartProduct.vue) интерполированны свойства продукта
- в [QuantityManager.vue](src%2Fcomponents%2FQuantityManager.vue) прокинуто computed свойство
- в [QuantityManager.vue](src%2Fcomponents%2FQuantityManager.vue) начал делать эмиты, на этом остановился, продолжить с этого места
- Merge измененного запроса
- Доделаны эмиты
- Подкорректирована верстка


## [Не выпущено]

### Добавлено



### Изменено




