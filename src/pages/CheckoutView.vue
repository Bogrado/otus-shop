<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">Оформление заказа</h1>
    <div class="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:space-x-8">
      <!-- Левая колонка - информация о доставке -->
      <div class="w-full lg:w-2/3 bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Информация о доставке</h2>
        <form class="space-y-4">
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-700">Имя</label>
            <input type="text" id="firstName" name="firstName"
                   class="mt-1 block w-full p-2 border rounded bg-gray-100" />
          </div>
          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-700">Фамилия</label>
            <input type="text" id="lastName" name="lastName" class="mt-1 block w-full p-2 border rounded bg-gray-100" />
          </div>
          <div>
            <label for="country" class="block text-sm font-medium text-gray-700">Страна</label>
            <input type="text" id="country" name="country" class="mt-1 block w-full p-2 border rounded bg-gray-100" />
          </div>
          <div>
            <label for="city" class="block text-sm font-medium text-gray-700">Город</label>
            <input type="text" id="city" name="city" class="mt-1 block w-full p-2 border rounded bg-gray-100" />
          </div>
          <div>
            <label for="postalCode" class="block text-sm font-medium text-gray-700">Почтовый индекс</label>
            <input type="text" id="postalCode" name="postalCode"
                   class="mt-1 block w-full p-2 border rounded bg-gray-100" />
          </div>
          <div>
            <label for="addressLine1" class="block text-sm font-medium text-gray-700">Улица</label>
            <input type="text" id="addressLine1" name="addressLine1"
                   class="mt-1 block w-full p-2 border rounded bg-gray-100" />
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label for="houseNumber" class="block text-sm font-medium text-gray-700">Номер дома</label>
              <input type="text" id="houseNumber" name="houseNumber"
                     class="mt-1 block w-full p-2 border rounded bg-gray-100" />
            </div>
            <div>
              <label for="apartmentNumber" class="block text-sm font-medium text-gray-700">Квартира</label>
              <input type="text" id="apartmentNumber" name="apartmentNumber"
                     class="mt-1 block w-full p-2 border rounded bg-gray-100" />
            </div>
          </div>
        </form>
      </div>

      <!--       Правая колонка - информация о заказе-->
      <app-summary class="bg-white">
        <template #header>
          <div class="text-lg font-bold mb-4">Ваша заказ</div>
        </template>
        <template #body>
          <div class="space-y-4">
            <div class="flex justify-between">
              <span>Подытог</span>
              <span>₽397.48</span>
            </div>
            <div class="flex justify-between">
              <span>Доставка</span>
              <span>БЕСПЛАТНО</span>
            </div>
            <div class="flex justify-between font-bold text-lg">
              <span>Итого</span>
              <span>₽421.33</span>
            </div>
          </div>
        </template>
        <template #footer>
          <button

            class="w-full bg-gray-700 text-white py-2 rounded hover:bg-green-500 transition duration-300 active:bg-green-700 mt-4">
            Разместить заказ
          </button>
        </template>
      </app-summary>
    </div>
  </div>
</template>

<script setup>
import AppSummary from '@/components/AppSummary.vue'
</script>