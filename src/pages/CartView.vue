<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">Корзина</h1>

    <div v-if="false" class="text-center">
      <!-- Заглушка для прелоадера -->
      <div>Загрузка...</div>
    </div>

    <div v-else>
      <div v-if="false" class="text-center text-gray-700">
        Ваша корзина пуста.
      </div>

      <div v-else>
        <div class="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:space-x-8">
          <!-- Левая колонка -  товары в корзине -->
          <div class="flex-1">
            <div class="border-b py-4 flex flex-col md:flex-row justify-between items-start md:items-center">
              <!-- Левая часть: изображение и информация о товаре -->
              <div class="flex items-center">
                <img src="https://via.placeholder.com/150" alt="Product Image" class="w-24 h-24 object-cover" />
                <div class="ml-4">
                  <h3 class="text-lg font-bold">Название товара</h3>
                  <p class="text-gray-700">Категория: название категории</p>
                  <p class="text-gray-700">Рейтинг: цифра</p>
                  <p class="text-gray-700">Количество оценок: цифра</p>
                  <div class="flex items-center mt-2 space-x-2">
                    <button>
                      <!-- иконка добавить в избранное (сердечко) -->
                      <like-icon class="hover:fill-gray-700" />
                    </button>
                    <button>
                      <!-- иконка удалить (мусорка) -->
                      <delete-icon class="hover:fill-gray-700" />
                    </button>
                  </div>
                </div>
              </div>

              <!-- Правая часть: цена и количество -->
              <div class="flex flex-col md:flex-row items-start md:items-center mt-4 md:mt-0 md:ml-auto">
                <div class="text-right md:text-left mb-2 md:mb-0 md:mr-8">
                  <p class="font-bold">цена ₽</p>
                </div>
                <div class="flex items-center">
                  <button>
                    <remove-icon class="hover:fill-gray-700" />
                  </button>
                  <input type="number" value="2" class="w-12 text-center border rounded mx-2" />
                  <button>
                    <!-- квадратная иконка + -->
                    <add-icon class="hover:fill-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            <!-- товар в корзине -->

          </div>

          <!-- Правая колонка - информация о заказе -->
          <div class="lg:w-1/3 lg:sticky lg:top-4 bg-gray-100 p-4 rounded-lg shadow-md h-max mt-8 lg:mt-0">
            <div class="text-lg font-bold mb-4">Ваша корзина</div>
            <div class="text-gray-700 mb-2">Товаров: 7</div>
            <div class="flex justify-between items-center mb-2">
              <span>Товары:</span>
              <span class="font-bold">73 014 ₽</span>
            </div>

            <button class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-green-500 active:bg-green-700 focus:outline-none w-full">
              Перейти к оформлению
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LikeIcon from '@/components/icons/LikeIcon.vue'
import AddIcon from '@/components/icons/AddIcon.vue'
import RemoveIcon from '@/components/icons/RemoveIcon.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
</script>

<style scoped></style>
