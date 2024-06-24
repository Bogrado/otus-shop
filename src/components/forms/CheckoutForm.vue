<template>
  <div class="w-full lg:w-2/3 bg-white p-4 rounded-lg shadow-md">
    <h2 class="text-xl font-bold mb-4">Информация о доставке</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="firstName" class="block text-sm font-medium text-gray-700">Имя</label>
        <input
          type="text"
          id="firstName"
          v-model="state.firstName"
          @blur="v$.firstName.$touch"
          :class="{ 'border-red-500': v$.firstName.$error }"
          class="mt-1 block w-full p-2 border rounded bg-gray-100"
        />
        <span v-if="v$.firstName.$error" class="text-red-500 text-sm">Некорректное имя</span>
      </div>
      <div>
        <label for="lastName" class="block text-sm font-medium text-gray-700">Фамилия</label>
        <input
          type="text"
          id="lastName"
          v-model="state.lastName"
          @blur="v$.lastName.$touch"
          :class="{ 'border-red-500': v$.lastName.$error }"
          class="mt-1 block w-full p-2 border rounded bg-gray-100"
        />
        <span v-if="v$.lastName.$error" class="text-red-500 text-sm">Некорректная фамилия</span>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Электронная почта</label>
        <input
          type="email"
          id="email"
          v-model="state.email"
          @blur="v$.email.$touch"
          :class="{ 'border-red-500': v$.email.$error }"
          class="mt-1 block w-full p-2 border rounded bg-gray-100"
        />
        <span v-if="v$.email.$error" class="text-red-500 text-sm">Некорректный email</span>
      </div>
      <div>
        <label for="country" class="block text-sm font-medium text-gray-700">Страна</label>
        <input
          type="text"
          id="country"
          v-model="state.country"
          @blur="v$.country.$touch"
          :class="{ 'border-red-500': v$.country.$error }"
          class="mt-1 block w-full p-2 border rounded bg-gray-100"
        />
        <span v-if="v$.country.$error" class="text-red-500 text-sm">Некорректная страна</span>
      </div>
      <div>
        <label for="city" class="block text-sm font-medium text-gray-700">Город</label>
        <input
          type="text"
          id="city"
          v-model="state.city"
          @blur="v$.city.$touch"
          :class="{ 'border-red-500': v$.city.$error }"
          class="mt-1 block w-full p-2 border rounded bg-gray-100"
        />
        <span v-if="v$.city.$error" class="text-red-500 text-sm">Некорректный город</span>
      </div>
      <div>
        <label for="postalCode" class="block text-sm font-medium text-gray-700">Почтовый индекс</label>
        <input
          type="text"
          id="postalCode"
          v-model="state.postalCode"
          @blur="v$.postalCode.$touch"
          :class="{ 'border-red-500': v$.postalCode.$error }"
          class="mt-1 block w-full p-2 border rounded bg-gray-100"
        />
        <span v-if="v$.postalCode.$error" class="text-red-500 text-sm">Почтовый индекс обязателен и состоит из 6 цифр</span>
      </div>
      <div>
        <label for="addressLine1" class="block text-sm font-medium text-gray-700">Улица</label>
        <input
          type="text"
          id="addressLine1"
          v-model="state.addressLine1"
          @blur="v$.addressLine1.$touch"
          :class="{ 'border-red-500': v$.addressLine1.$error }"
          class="mt-1 block w-full p-2 border rounded bg-gray-100"
        />
        <span v-if="v$.addressLine1.$error" class="text-red-500 text-sm">Некорректная улица</span>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label for="houseNumber" class="block text-sm font-medium text-gray-700">Номер дома</label>
          <input
            type="text"
            id="houseNumber"
            v-model="state.houseNumber"
            @blur="v$.houseNumber.$touch"
            :class="{ 'border-red-500': v$.houseNumber.$error }"
            class="mt-1 block w-full p-2 border rounded bg-gray-100"
          />
          <span v-if="v$.houseNumber.$error" class="text-red-500 text-sm">Некорректный номер дома</span>
        </div>
        <div>
          <label for="apartmentNumber" class="block text-sm font-medium text-gray-700">Квартира</label>
          <input
            type="text"
            id="apartmentNumber"
            v-model="state.apartmentNumber"
            @blur="v$.apartmentNumber.$touch"
            :class="{ 'border-red-500': v$.apartmentNumber.$error }"
            class="mt-1 block w-full p-2 border rounded bg-gray-100"
          />
          <span v-if="v$.apartmentNumber.$error" class="text-red-500 text-sm">Некорректный номер квартиры</span>
        </div>
      </div>
      <div>
        <label class="inline-flex items-center">
          <input type="checkbox" v-model="state.saveAddress" class="form-checkbox bg-gray-700 text-blue-500 border-gray-600" />
          <span class="ml-2 text-gray-700">Сохранить адрес</span>
        </label>
      </div>
      <div>
        <label class="inline-flex items-center">
          <input type="checkbox" v-model="state.agreeToTerms" class="form-checkbox bg-gray-700 text-blue-500 border-gray-600" />
          <span class="ml-2 text-gray-700">Согласие на обработку персональных данных</span>
        </label>
      </div>
      <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
    </form>
  </div>
</template>

<script setup>
import { useCheckout } from '@/composables/forms/useCheckout.js'

const { state, error, v$, submitForm } = useCheckout()
</script>

<style scoped></style>
