# Журнал изменений

## [выпущено]

### Добавлено

- Компонент [App.vue](src%2FApp.vue) с SVG иконками и адаптивным дизайном.
- Список продуктов на главной странице ([ProductsList.vue](src%2Fcomponents%2FProductsList.vue)
  и [ProductItem.vue](src%2Fcomponents%2FProductItem.vue)).
- Компонент [AppSearchBar.vue](src%2Fcomponents%2FAppSearchBar.vue) для поиска по имени продуктов
- Компонент [AppSortBar.vue](src%2Fcomponents%2FAppSortBar.vue) для сортировки
- Стейт товаров в [productStore.js](src%2Fstores%2FproductStore.js)
- API вызов для получения продуктов в Pinia
- Добавлен компонент [AppPreloader.vue](src%2Fcomponents%2FAppPreloader.vue)
- Добавлен [productStore.js](src%2Fstores%2FproductStore.js)
- Добавлен [queryParamsStore.js](src%2Fstores%2FqueryParamsStore.js)
- Добавлен компонент [AppFiltersBar.vue](src%2Fcomponents%2FAppFiltersBar.vue), чтобы
  разгрузить [HomeView.vue](src%2Fpages%2FHomeView.vue)
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
- В [cartStore.js](src%2Fstores%2FcartStore.js) добавлен геттер products, который возвращает массив товаров в корзине
- В [cartUtils.js](src%2Futils%2FcartUtils.js) добавлена функция, которая запрашивает удаление из стора
- В [CartProduct.vue](src%2Fcomponents%2FCartProduct.vue) добавлены эмиты для удаления
- В [CartProductsList.vue](src%2Fcomponents%2FCartProductsList.vue) вызывается функция удаления
  из [cartUtils.js](src%2Futils%2FcartUtils.js)
- Добавил немного анимашек
- Делал локальное хранилище, а получился кастомный [хук](src%2Fcomposables%2FuseCart.js), бывает ┐(‘～` )┌
- локальное хранилище корзины, кстати, тоже готово
- подсчеты цен в [cartStore.js](src%2Fstores%2FcartStore.js)
- [AccountIcon.vue](src%2Fcomponents%2Ficons%2FAccountIcon.vue) иконка входа
- [AppModal.vue](src%2Fcomponents%2FAppModal.vue) верстка
- [LoginForm.vue](src%2Fcomponents%2FLoginForm.vue) верстка
- [RegisterForm.vue](src%2Fcomponents%2FRegisterForm.vue) верстка
- [modalStore.js](src%2Fstores%2FmodalStore.js) контроль состояния модалки
- В [AppHeader.vue](src%2Fcomponents%2FAppHeader.vue) Добавлен новый li с открытием форм
- [authStore.js](src%2Fstores%2FauthStore.js) простой стор для авторизации и регистрации
- [App.vue](src%2FApp.vue) проверка авторизации по токену при маунте приложения
- Добавил страницу админки, настроил ее в роутере, чтобы без роли админа не попасть, компоненты к
  ней [AdminSidebar.vue](src%2Fcomponents%2Fadmin%2FAdminSidebar.vue)
  [AdminProductForm.vue](src%2Fcomponents%2Fadmin%2FAdminProductForm.vue) [THead.vue](src%2Fcomponents%2Fadmin%2Ftable%2FTHead.vue)[TBody.vue](src%2Fcomponents%2Fadmin%2Ftable%2FTBody.vue)
  [AdminProductTable.vue](src%2Fcomponents%2Fadmin%2Ftable%2FAdminProductTable.vue)
- [useModal.js](src%2Fcomposables%2FuseModal.js) для переиспользования модалок, ох и задолбался с этим, надеюсь, все
  корректно
- [useLoginForm.js](src%2Fcomposables%2Fauth%2FuseLoginForm.js) хук для формы, если бы я знал, что хуки, так круто, юзал
  бы их раньше
- Добавлена Валидация и хук [useValidation.js](src%2Fcomposables%2FuseValidation.js)
- Логика изменения и добавления товаров, с валидацией полей
- Реализовал удаление товара по id с проверкой перед удалением
- Хук [useAdminProductForms.js](src%2Fcomposables%2Fforms%2FuseAdminProductForms.js), чтоб не засорять компонент
- Хук [useDeleteForm.js](src%2Fcomposables%2Fforms%2FuseDeleteForm.js) для удаления товара
- Страница товара [ProductView.vue](src%2Fpages%2FProductView.vue),
  стор [productStore.js](src%2Fstores%2Fproduct%2FproductStore.js)
- Линки на [ProductItem.vue](src%2Fcomponents%2FProductItem.vue)
- Форма в [ProductView.vue](src%2Fpages%2FProductView.vue), navigation guard на странице чекаута
- Функционал уникальной корзины для пользователя в [cartStore.js](src%2Fstores%2Fcart%2FcartStore.js)
  и [authStore.js](src%2Fstores%2FauthStore.js)
- Объединение анонимной корзины с корзиной пользователя при логине

### Изменено

- Обновлен [App.vue](src%2FApp.vue) для включения нового компонента [AppHeader.vue](src%2Fcomponents%2FAppHeader.vue).
- Обновлен [HomeView.vue](src%2Fpages%2FHomeView.vue) для отображения списка продуктов.
- Обновлен [HomeView.vue](src%2Fpages%2FHomeView.vue) для включения
  компонента [AppSearchBar.vue](src%2Fcomponents%2FAppSearchBar.vue), заменены некоторые стили
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
- [loadingStore.js](src%2Fstores%2FloadingStore.js) вызывается из [App.vue](src%2FApp.vue) и прокидывается во все
  компоненты.
- [AppHeader.vue](src%2Fcomponents%2FAppHeader.vue) обращается к [cartStore.js](src%2Fstores%2FcartStore.js) за кол-вом.
  товаров в корзине.
- худо-бедно функция с запросом переписана
- в [cartQueryParamsStore.js](src%2Fstores%2FcartQueryParamsStore.js) изменен query параметр
- в [CartProductsList.vue](src%2Fcomponents%2FCartProductsList.vue) прокинут массив с товарами
- в [CartProduct.vue](src%2Fcomponents%2FCartProduct.vue) интерполированны свойства продукта
- в [QuantityManager.vue](src%2Fcomponents%2FQuantityManager.vue) прокинуто computed свойство
- в [QuantityManager.vue](src%2Fcomponents%2FQuantityManager.vue) начал делать эмиты, на этом остановился, продолжить с
  этого места
- Merge измененного запроса
- Доделаны эмиты
- Подкорректирована верстка
- В [CartView.vue](src%2Fpages%2FCartView.vue) для получения товаров используется новый геттер из стора, вместо прямого
  обращения к состоянию
- вызовы в [ProductsList.vue](src%2Fcomponents%2FProductsList.vue)
  и [CartProductsList.vue](src%2Fcomponents%2FCartProductsList.vue)
- Изменен [cartStore.js](src%2Fstores%2FcartStore.js).
  Смысл: в стейте корзины хранится только один массив items, при добавлении товара из каталога в массив помещается
  объект вида {id: itemId}
  После открытия корзины идет запрос и свойства, полученные с сервера, присваиваются по id к стейту, стейт при этом
  хранится в локальном хранилище,
  computed products теперь возвращает массиив с уникальными товарами, чтобы его можно было интерполировать
  в [CartProductsList.vue](src%2Fcomponents%2FCartProductsList.vue), сейчас компьютед проверяет только id, но в
  дальнейшем можно проверять любое свойство,
  к примеру, размеры у футболок. Самое главное изменение, теперь не нужно отслеживать количество товаров.
- изменены все функции в [cartStore.js](src%2Fstores%2FcartStore.js) и [useCart.js](src%2Fcomposables%2FuseCart.js) в
  соответствии с подходом
- [CartView.vue](src%2Fpages%2FCartView.vue) - завершена
- Переделал [AppSortBar.vue](src%2Fcomponents%2FAppSortBar.vue), чтобы красивенько было
- [LoginForm.vue](src%2Fcomponents%2FLoginForm.vue) [RegisterForm.vue](src%2Fcomponents%2FRegisterForm.vue) изменил
  верстку
- Бэкграунд приложения в [App.vue](src%2FApp.vue)
- Настроил роутер для переадресации, если у пользователя нет прав админа
- В [AppHeader.vue](src%2Fcomponents%2FAppHeader.vue) появляется кнопка с админ панелью, при проверке роли
- Отрефакторил запросы, вынес логику запросов в кастомный хук [useApi.js](src%2Fcomposables%2FuseApi.js)
- Изменено всё, что связано с [AppFiltersBar.vue](src%2Fcomponents%2FAppFiltersBar.vue)
- Изменены запросы на логин, проверку пользователя и регистрацию, как же я задолбался приводить в порядок запросы...
  по крайней мере, за них теперь отвечает только [useApi.js](src%2Fcomposables%2FuseApi.js)
- перелопатил [modalStore.js](src%2Fstores%2FmodalStore.js)
- [LoginForm.vue](src%2Fcomponents%2FLoginForm.vue) перенес логику в хук
- вся логика для форм теперь будет в кастомных хуках в т.ч. и валидация
- Сделал логику модальных окон более адекватной
- В [CartView.vue](src%2Fpages%2FCartView.vue) Поправил баг, в некоторых случаях при логине из корзины некорректно
  отображаются товары

### Удалено

- `cartUtils.js` за ненадобностью, всё в кастомном хуке
- проверка в [QuantityManager.vue](src%2Fcomponents%2FQuantityManager.vue), не понимаю, как она туда попала
- Удален дропдаун из [AppHeader.vue](src%2Fcomponents%2FAppHeader.vue) слишком он муторный
- Удален `apiService.js`, заменен на хук [useApi.js](src%2Fcomposables%2FuseApi.js)
- куча старых хуков для формы
- лишние вызовы синхронизации локальной корзины удалены, забыл, что есть watch

## [Не выпущено]

### Добавлено

### Изменено

### Удалено

### Нужно сделать

1. [x] отрефакторить [queryParamsUpdater.js](src%2Futils%2FqueryParamsUpdater.js) в кастомный хук
2. [x] навести порядок в компонентах
3. [x] В [CartProduct.vue](src%2Fcomponents%2FCartProduct.vue) вынести кнопки удаления и добавления в избранное в
   отдельный компонент
   в [authStore.js](src%2Fstores%2FauthStore.js), [catalogStore.js](src%2Fstores%2Fcatalog%2FcatalogStore.js), [cartStore.js](src%2Fstores%2Fcart%2FcartStore.js)
4. [x] Куда-нибудь определить все константы
5. [x] Что-то сделать с разросшимися [AdminProductForm.vue](src%2Fcomponents%2Fadmin%2FAdminProductForm.vue)
   и [AdminProducts.vue](src%2Fpages%2Fadmin%2FAdminProducts.vue)
6. [x] Убрать дублирующийся код из [useAdminProductForms.js](src%2Fcomposables%2Fforms%2FuseAdminProductForms.js)
7. [x] Убрать дублирующийся код navigation guard в  [index.js](src%2Frouter%2Findex.js)
8. [x] Сделать общую схему для vuelidate
9. [x] вынести formContainer из [modalStore.js](src%2Fstores%2FmodalStore.js)
10. [ ] Переделать нативные слушатели в [AppSortBar.vue](src%2Fcomponents%2FAppSortBar.vue)
11. [ ] Стандартизировать запросы
12. [ ] Перелопатить стор корзины, сделать проще
13. [ ] В ордере отправлять только необходимые данные товаров: id, title, price, (параметры товара, цвет, размер и т.д)
14. [ ] Сохранять адрес юзеру и либо автозаполнять при монтировании чекаута либо добавить что-нибудь по типа сохраненных
    адресов